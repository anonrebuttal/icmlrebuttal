"""
analyze.py  —  User Study Results Analyzer
==========================================

Usage:
    python analyze.py results/          # folder of .json files
    python analyze.py results/user1.json results/user2.json ...

Output:
    - Per-method win rates (Text Alignment & Visual Quality)
    - Bootstrap confidence intervals
    - Section-level breakdown (SDXL vs Flux-Schnell)
    - Summary table printed to console
    - Saves analyze_output.csv
"""

import json
import sys
import os
import glob
from pathlib import Path
from collections import defaultdict
import random

# ── METHOD LABELS ──────────────────────────────────────────────
METHOD_NAMES = {
    "method1": "Baseline (CFG / Base)",
    "method2": "PLADIS",
    "method3": "Ours (GAG)",
}
METHODS = list(METHOD_NAMES.keys())

# ── LOAD ───────────────────────────────────────────────────────
def load_results(paths):
    all_responses = []
    for path in paths:
        with open(path) as f:
            data = json.load(f)
        participant_id = Path(path).stem
        for r in data["responses"]:
            r["participant"] = participant_id
            all_responses.append(r)
    return all_responses


# ── WIN RATE ───────────────────────────────────────────────────
def compute_win_rates(responses, metric="ta_method"):
    counts = defaultdict(int)
    total = 0
    for r in responses:
        winner = r.get(metric)
        if winner:
            counts[winner] += 1
            total += 1
    return {m: counts[m] / total if total > 0 else 0 for m in METHODS}, total


# ── BOOTSTRAP CI ───────────────────────────────────────────────
def bootstrap_ci(responses, metric, method, n_boot=2000, ci=0.95):
    wins = [1 if r.get(metric) == method else 0 for r in responses if r.get(metric)]
    if not wins:
        return 0.0, 0.0
    bootstraps = []
    for _ in range(n_boot):
        sample = random.choices(wins, k=len(wins))
        bootstraps.append(sum(sample) / len(sample))
    bootstraps.sort()
    lo = bootstraps[int((1 - ci) / 2 * n_boot)]
    hi = bootstraps[int((1 + ci) / 2 * n_boot)]
    return lo, hi


# ── SECTION BREAKDOWN ──────────────────────────────────────────
def section_breakdown(responses, metric):
    sections = defaultdict(list)
    for r in responses:
        sections[r["section"]].append(r)
    result = {}
    for sec, resps in sections.items():
        rates, total = compute_win_rates(resps, metric)
        result[sec] = {"rates": rates, "n": total}
    return result


# ── PRINT TABLE ────────────────────────────────────────────────
def print_table(title, rates, totals, ci_map=None):
    print(f"\n{'═'*60}")
    print(f"  {title}")
    print(f"{'═'*60}")
    print(f"  {'Method':<28} {'Win Rate':>10} {'Wins':>6}  {'95% CI'}")
    print(f"  {'-'*56}")
    for m in METHODS:
        name = METHOD_NAMES[m]
        rate = rates.get(m, 0)
        wins = int(rate * totals)
        ci_str = ""
        if ci_map and m in ci_map:
            lo, hi = ci_map[m]
            ci_str = f"[{lo:.1%} – {hi:.1%}]"
        print(f"  {name:<28} {rate:>9.1%} {wins:>6}   {ci_str}")
    print(f"  {'─'*56}")
    print(f"  Total responses: {totals}")


# ── SAVE CSV ───────────────────────────────────────────────────
def save_csv(responses, out_path="analyze_output.csv"):
    import csv
    fields = ["participant", "prompt_id", "section", "prompt",
              "ta_method", "vq_method"]
    with open(out_path, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(responses)
    print(f"\n  → Saved raw data to {out_path}")


# ── MAIN ───────────────────────────────────────────────────────
def main():
    # Collect file paths
    if len(sys.argv) < 2:
        print("Usage: python analyze.py <results_folder_or_files>")
        sys.exit(1)

    paths = []
    for arg in sys.argv[1:]:
        if os.path.isdir(arg):
            paths.extend(glob.glob(os.path.join(arg, "*.json")))
        else:
            paths.append(arg)

    if not paths:
        print("No JSON files found.")
        sys.exit(1)

    print(f"\n  Loading {len(paths)} participant file(s)...")
    responses = load_results(paths)
    print(f"  Total response rows: {len(responses)}")

    # ── Text Alignment ──
    ta_rates, ta_total = compute_win_rates(responses, "ta_method")
    ta_ci = {m: bootstrap_ci(responses, "ta_method", m) for m in METHODS}
    print_table("TEXT ALIGNMENT  —  Win Rate", ta_rates, ta_total, ta_ci)

    # ── Visual Quality ──
    vq_rates, vq_total = compute_win_rates(responses, "vq_method")
    vq_ci = {m: bootstrap_ci(responses, "vq_method", m) for m in METHODS}
    print_table("VISUAL QUALITY  —  Win Rate", vq_rates, vq_total, vq_ci)

    # ── Section breakdown ──
    print(f"\n{'═'*60}")
    print("  SECTION BREAKDOWN")
    print(f"{'═'*60}")
    for metric, label in [("ta_method", "Text Alignment"), ("vq_method", "Visual Quality")]:
        print(f"\n  [{label}]")
        breakdown = section_breakdown(responses, metric)
        for sec, info in breakdown.items():
            print(f"\n    {sec}  (n={info['n']})")
            for m in METHODS:
                rate = info["rates"].get(m, 0)
                print(f"      {METHOD_NAMES[m]:<28} {rate:.1%}")

    # ── Save CSV ──
    save_csv(responses)
    print()


if __name__ == "__main__":
    main()
