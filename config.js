var BASE = "https://raw.githubusercontent.com/anonrebuttal/icmlrebuttal/master/images/";
 
var PROMPTS = [
  // ── SDXL / CFG ──
  { section: "SDXL", prompt: "A vehicle to the side which is carrying a load appears that it is running into the signage.", folder: BASE + "sdxl/prompt_01" },
  { section: "SDXL", prompt: "The LG cell phone shows a date of January 27, 2010.", folder: BASE + "sdxl/prompt_02" },
  { section: "SDXL", prompt: "A cat laying next to a shoe on the ground.", folder: BASE + "sdxl/prompt_03" },
  { section: "SDXL", prompt: "A white and red bus driving down a busy street.", folder: BASE + "sdxl/prompt_04" },
  // ── SDXL / APG ──
  { section: "SDXL", prompt: "A man on his bike talking on a cell.", folder: BASE + "sdxl/prompt_05" },
  { section: "SDXL", prompt: "A blue and white train passing houses while emitting smoke.", folder: BASE + "sdxl/prompt_06" },
  { section: "SDXL", prompt: "A long yellow train that is on a train track.", folder: BASE + "sdxl/prompt_07" },
  { section: "SDXL", prompt: "A group of bicyclists speeding up a city street.", folder: BASE + "sdxl/prompt_08" },
  // ── SDXL / PAG ──
  { section: "SDXL", prompt: "A photo of a dog right of a teddy bear.", folder: BASE + "sdxl/prompt_09" },
  { section: "SDXL", prompt: "A photo of a bench left of a bear.", folder: BASE + "sdxl/prompt_10" },
  { section: "SDXL", prompt: "A photo of an elephant below a horse.", folder: BASE + "sdxl/prompt_11" },
  { section: "SDXL", prompt: "A photo of a yellow car and an orange toothbrush.", folder: BASE + "sdxl/prompt_12" },
  // ── Flux-Schnell ──
  { section: "Flux", prompt: "A photo of a black kite and a green bear.", folder: BASE + "flux/prompt_01" },
  { section: "Flux", prompt: "A photo of a white bottle and a blue sheep.", folder: BASE + "flux/prompt_02" },
  { section: "Flux", prompt: "A photo of a cat below a backpack.", folder: BASE + "flux/prompt_03" },
  { section: "Flux", prompt: "A photo of a brown computer mouse and a purple bottle.", folder: BASE + "flux/prompt_04" },
  // ── Flux-Dev ──
  { section: "Flux", prompt: "A photo of a dog right of a teddy bear.", folder: BASE + "flux/prompt_05" },
  { section: "Flux", prompt: "A photo of a toaster below a traffic light.", folder: BASE + "flux/prompt_06" },
  { section: "Flux", prompt: "A photo of a bus above a boat.", folder: BASE + "flux/prompt_07" },
  { section: "Flux", prompt: "A photo of a yellow bicycle and a red motorcycle.", folder: BASE + "flux/prompt_08" },
];
 
