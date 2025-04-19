const products = [
  {
    id: 1,
    name: "Blue Light Blocking Glasses",
    slug: "blue-light-blocking-glasses",
    description: "Protect your eyes and reclaim your focus from screen fatigue.",
    category: "focus-tools",
    image: "/images/bluelight.jpg",
    link: "#"
  },
  {
    id: 2,
    name: "Noise-Canceling Earbuds",
    slug: "noise-canceling-earbuds",
    description: "Silence distraction and amplify focus wherever you are.",
    category: "focus-tools",
    image: "/images/earbuds.jpg",
    link: "#"
  },
  {
    id: 3,
    name: "Digital Timer Cube",
    slug: "digital-timer-cube",
    description: "Physical timeboxing for flow state training.",
    category: "focus-tools",
    image: "/images/timer.jpg",
    link: "#"
  },
  {
    id: 4,
    name: "Task Planning Notepad",
    slug: "task-planning-notepad",
    description: "Visual priority mapping for intentional days.",
    category: "focus-tools",
    image: "/images/notepad.jpg",
    link: "#"
  },
  {
    id: 5,
    name: "Portable Whiteboard Tablet",
    slug: "portable-whiteboard-tablet",
    description: "Externalize thinking and iterate freely.",
    category: "focus-tools",
    image: "/images/whiteboard.jpg",
    link: "#"
  },
  {
    id: 6,
    name: "Focus Booster Lamp",
    slug: "focus-booster-lamp",
    description: "Daylight-aligned lighting for energy regulation.",
    category: "focus-tools",
    image: "/images/focuslamp.jpg",
    link: "#"
  },
  {
    id: 7,
    name: "Breath Training Device",
    slug: "breath-training-device",
    description: "Train your nervous system and regulate stress.",
    category: "mind-body",
    image: "/images/breath.jpg",
    link: "#"
  },
  {
    id: 8,
    name: "Acupressure Mat",
    slug: "acupressure-mat",
    description: "Full-body release and nervous system decompression.",
    category: "mind-body",
    image: "/images/acupressure.jpg",
    link: "#"
  },
  {
    id: 9,
    name: "Infrared Neck Wrap",
    slug: "infrared-neck-wrap",
    description: "Targeted heat for deep physical decompression.",
    category: "mind-body",
    image: "/images/neckwrap.jpg",
    link: "#"
  },
  {
    id: 10,
    name: "Adaptogen Capsules",
    slug: "adaptogen-capsules",
    description: "Support clarity, resilience, and internal rhythm.",
    category: "mind-body",
    image: "/images/adaptogens.jpg",
    link: "#"
  },
  {
    id: 11,
    name: "Balance Cushion",
    slug: "balance-cushion",
    description: "Micro-movement training to stay grounded and aware.",
    category: "mind-body",
    image: "/images/cushion.jpg",
    link: "#"
  },
  {
    id: 12,
    name: "HRV Tracker Ring",
    slug: "hrv-tracker-ring",
    description: "Insight into your recovery and restoration patterns.",
    category: "mind-body",
    image: "/images/hrv.jpg",
    link: "#"
  },
  {
    id: 13,
    name: "Stream Deck Mini",
    slug: "stream-deck-mini",
    description: "Trigger complex workflows or shortcuts with a tap. Minimal input, maximum flow.",
    category: "workflow",
    image: "/images/streamdeck.jpg",
    link: "#"
  },
  {
    id: 14,
    name: "Wireless Mechanical Keyboard",
    slug: "wireless-mechanical-keyboard",
    description: "Tactile, responsive keys that support rhythm, not just input.",
    category: "workflow",
    image: "/images/keyboard.jpg",
    link: "#"
  },
  {
    id: 15,
    name: "Vertical Ergonomic Mouse",
    slug: "vertical-ergonomic-mouse",
    description: "A subtle shift that reduces strain and increases long-term ease.",
    category: "workflow",
    image: "/images/mouse.jpg",
    link: "#"
  },
  {
    id: 16,
    name: "USB-C Hub Docking Station",
    slug: "usb-c-hub-docking-station",
    description: "Declutter connections and center your workflow around one anchor point.",
    category: "workflow",
    image: "/images/dock.jpg",
    link: "#"
  },
  {
    id: 17,
    name: "Noise-Canceling Headphones",
    slug: "noise-canceling-headphones",
    description: "Control your auditory environment. Focus without friction.",
    category: "workflow",
    image: "/images/headphones.jpg",
    link: "#"
  },
  {
    id: 18,
    name: "Smart Task Light",
    slug: "smart-task-light",
    description: "Reduces eye strain and regulates circadian-friendly brightness for screen-based work.",
    category: "workflow",
    image: "/images/tasklight.jpg",
    link: "#"
  },
  {
    id: 19,
    name: "Weighted Blanket",
    slug: "weighted-blanket",
    description: "Ground your body and nervous system for deeper, safer rest.",
    category: "rest",
    image: "/images/blanket.jpg",
    link: "#"
  },
  {
    id: 20,
    name: "Blue Light Blocking Glasses",
    slug: "blue-light-blocking-glasses",
    description: "Protect your melatonin cycle and wind down with clarity.",
    category: "rest",
    image: "/images/glasses.jpg",
    link: "#"
  },
  {
    id: 21,
    name: "Magnesium Supplement (Calm Blend)",
    slug: "magnesium-supplement-calm-blend",
    description: "Support natural relaxation and deeper sleep cycles.",
    category: "rest",
    image: "/images/magnesium.jpg",
    link: "#"
  },
  {
    id: 22,
    name: "Sleep Sound Machine",
    slug: "sleep-sound-machine",
    description: "Drown out noise and signal your brain: it's time to recover.",
    category: "rest",
    image: "/images/sound.jpg",
    link: "#"
  },
  {
    id: 23,
    name: "Aromatherapy Diffuser",
    slug: "aromatherapy-diffuser",
    description: "Scent is a nervous system shortcut. Use it to unwind.",
    category: "rest",
    image: "/images/diffuser.jpg",
    link: "#"
  },
  {
    id: 24,
    name: "Acupressure Mat",
    slug: "acupressure-mat",
    description: "Release tension and reconnect body awareness before bed.",
    category: "rest",
    image: "/images/acumat.jpg",
    link: "#"
  },
  {
    id: 25,
    name: "Minimalist Desk Lamp",
    slug: "minimalist-desk-lamp",
    description: "Lighting that shapes attention and rhythm without clutter.",
    category: "environment",
    image: "/images/lamp.jpg",
    link: "#"
  },
  {
    id: 26,
    name: "Natural Cork Desk Mat",
    slug: "natural-cork-desk-mat",
    description: "Ground your workspace with texture and quiet materiality.",
    category: "environment",
    image: "/images/deskmat.jpg",
    link: "#"
  },
  {
    id: 27,
    name: "Standing Meditation Cushion",
    slug: "standing-meditation-cushion",
    description: "Create a deliberate pause point in your daily environment.",
    category: "environment",
    image: "/images/cushion.jpg",
    link: "#"
  },
  {
    id: 28,
    name: "Desktop Zen Garden",
    slug: "desktop-zen-garden",
    description: "Micro-rituals for focus and momentary calm throughout the day.",
    category: "environment",
    image: "/images/zen.jpg",
    link: "#"
  },
  {
    id: 29,
    name: "Essential Oil Roller",
    slug: "essential-oil-roller",
    description: "Portable scent for cueing rituals and emotional reset.",
    category: "environment",
    image: "/images/roller.jpg",
    link: "#"
  },
  {
    id: 30,
    name: "Daily Intention Card Deck",
    slug: "daily-intention-card-deck",
    description: "Center presence with small prompts for focus and values alignment.",
    category: "environment",
    image: "/images/deck.jpg",
    link: "#"
  },
  {
    id: 31,
    name: "Hardcover Dotted Journal",
    slug: "hardcover-dotted-journal",
    description: "Open space for identity, reflection, clarity, and visioning.",
    category: "insight",
    image: "/images/journal.jpg",
    link: "#"
  },
  {
    id: 32,
    name: "Reflective Prompt Deck",
    slug: "reflective-prompt-deck",
    description: "Cut through the noise with structured inquiry for self-growth.",
    category: "insight",
    image: "/images/prompts.jpg",
    link: "#"
  },
  {
    id: 33,
    name: "Smart Pen Recorder",
    slug: "smart-pen-recorder",
    description: "Capture thoughts in analog and digital simultaneously.",
    category: "insight",
    image: "/images/smartpen.jpg",
    link: "#"
  },
  {
    id: 34,
    name: "Creative Expression Toolkit",
    slug: "creative-expression-toolkit",
    description: "Color, shape, and play—invite subconscious insight and release.",
    category: "insight",
    image: "/images/artkit.jpg",
    link: "#"
  },
  {
    id: 35,
    name: "Mood-Based Playlist Light",
    slug: "mood-based-playlist-light",
    description: "Pair sound and ambiance with inner states or reflection rituals.",
    category: "insight",
    image: "/images/moodlight.jpg",
    link: "#"
  },
  {
    id: 36,
    name: "Visualization & Manifestation Journal",
    slug: "visualization-manifestation-journal",
    description: "Map your vision. Reflect it daily. Rewire your belief system.",
    category: "insight",
    image: "/images/vision.jpg",
    link: "#"
  }
];

export default products;