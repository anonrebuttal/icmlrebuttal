// ══════════════════════════════════════════════════════
//  config.js
//
//  Image folder structure:
//  images/
//    sdxl/prompt_01/ ~ prompt_12/
//      method1.jpg  ← Baseline (CFG / APG / PAG)
//      method2.jpg  ← PLADIS
//      method3.jpg  ← Ours (GAG)
//    flux/prompt_01/ ~ prompt_08/
//      method1.jpg  ← Base (Schnell / Dev)
//      method2.jpg  ← PLADIS
//      method3.jpg  ← Ours (GAG)
// ══════════════════════════════════════════════════════

const PROMPTS = [

  // ── SDXL / CFG (prompt_01 ~ 04) ───────────────────
  {
    section: "SDXL",
    prompt: "A vehicle to the side which is carrying a load appears that it is running into the signage.",
    folder: "images/sdxl/prompt_01"
  },
  {
    section: "SDXL",
    prompt: "The LG cell phone shows a date of January 27, 2010.",
    folder: "images/sdxl/prompt_02"
  },
  {
    section: "SDXL",
    prompt: "A cat laying next to a shoe on the ground.",
    folder: "images/sdxl/prompt_03"
  },
  {
    section: "SDXL",
    prompt: "A white and red bus driving down a busy street.",
    folder: "images/sdxl/prompt_04"
  },

  // ── SDXL / APG (prompt_05 ~ 08) ───────────────────
  {
    section: "SDXL",
    prompt: "A man on his bike talking on a cell.",
    folder: "images/sdxl/prompt_05"
  },
  {
    section: "SDXL",
    prompt: "A blue and white train passing houses while emitting smoke.",
    folder: "images/sdxl/prompt_06"
  },
  {
    section: "SDXL",
    prompt: "A long yellow train that is on a train track.",
    folder: "images/sdxl/prompt_07"
  },
  {
    section: "SDXL",
    prompt: "A group of bicyclists speeding up a city street.",
    folder: "images/sdxl/prompt_08"
  },

  // ── SDXL / PAG (prompt_09 ~ 12) ───────────────────
  {
    section: "SDXL",
    prompt: "A photo of a dog right of a teddy bear.",
    folder: "images/sdxl/prompt_09"
  },
  {
    section: "SDXL",
    prompt: "A photo of a bench left of a bear.",
    folder: "images/sdxl/prompt_10"
  },
  {
    section: "SDXL",
    prompt: "A photo of an elephant below a horse.",
    folder: "images/sdxl/prompt_11"
  },
  {
    section: "SDXL",
    prompt: "A photo of a yellow car and an orange toothbrush.",
    folder: "images/sdxl/prompt_12"
  },

  // ── Flux-Schnell (flux/prompt_01 ~ 04) ────────────
  {
    section: "Flux",
    prompt: "A photo of a black kite and a green bear.",
    folder: "images/flux/prompt_01"
  },
  {
    section: "Flux",
    prompt: "A photo of a white bottle and a blue sheep.",
    folder: "images/flux/prompt_02"
  },
  {
    section: "Flux",
    prompt: "A photo of a cat below a backpack.",
    folder: "images/flux/prompt_03"
  },
  {
    section: "Flux",
    prompt: "A photo of a brown computer mouse and a purple bottle.",
    folder: "images/flux/prompt_04"
  },

  // ── Flux-Dev (flux/prompt_05 ~ 08) ────────────────
  {
    section: "Flux",
    prompt: "A photo of a dog right of a teddy bear.",
    folder: "images/flux/prompt_05"
  },
  {
    section: "Flux",
    prompt: "A photo of a toaster below a traffic light.",
    folder: "images/flux/prompt_06"
  },
  {
    section: "Flux",
    prompt: "A photo of a bus above a boat.",
    folder: "images/flux/prompt_07"
  },
  {
    section: "Flux",
    prompt: "A photo of a yellow bicycle and a red motorcycle.",
    folder: "images/flux/prompt_08"
  },

];
