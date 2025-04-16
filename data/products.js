const products = [
  // Focus & Attention
  {
    id: 1,
    name: "Blue Light Blocking Glasses",
    description: "Protect your eyes and reclaim your focus from screen fatigue.",
    category: "focus-tools",
    image: "/images/bluelight.jpg",
    link: "#"
  },
  {
    id: 2,
    name: "Noise-Canceling Earbuds",
    description: "Silence distraction and amplify focus wherever you are.",
    category: "focus-tools",
    image: "/images/earbuds.jpg",
    link: "#"
  },
  {
    id: 3,
    name: "Digital Timer Cube",
    description: "Physical timeboxing for flow state training.",
    category: "focus-tools",
    image: "/images/timer.jpg",
    link: "#"
  },
  {
    id: 4,
    name: "Task Planning Notepad",
    description: "Visual priority mapping for intentional days.",
    category: "focus-tools",
    image: "/images/notepad.jpg",
    link: "#"
  },
  {
    id: 5,
    name: "Portable Whiteboard Tablet",
    description: "Externalize thinking and iterate freely.",
    category: "focus-tools",
    image: "/images/whiteboard.jpg",
    link: "#"
  },
  {
    id: 6,
    name: "Focus Booster Lamp",
    description: "Daylight-aligned lighting for energy regulation.",
    category: "focus-tools",
    image: "/images/focuslamp.jpg",
    link: "#"
  },

  // Mind–Body Health
  {
    id: 7,
    name: "Breath Training Device",
    description: "Train your nervous system and regulate stress.",
    category: "mind-body",
    image: "/images/breath.jpg",
    link: "#"
  },
  {
    id: 8,
    name: "Acupressure Mat",
    description: "Full-body release and nervous system decompression.",
    category: "mind-body",
    image: "/images/acupressure.jpg",
    link: "#"
  },
  {
    id: 9,
    name: "Infrared Neck Wrap",
    description: "Targeted heat for deep physical decompression.",
    category: "mind-body",
    image: "/images/neckwrap.jpg",
    link: "#"
  },
  {
    id: 10,
    name: "Adaptogen Capsules",
    description: "Support clarity, resilience, and internal rhythm.",
    category: "mind-body",
    image: "/images/adaptogens.jpg",
    link: "#"
  },
  {
    id: 11,
    name: "Balance Cushion",
    description: "Micro-movement training to stay grounded and aware.",
    category: "mind-body",
    image: "/images/cushion.jpg",
    link: "#"
  },
  {
    id: 12,
    name: "HRV Tracker Ring",
    description: "Insight into your recovery and restoration patterns.",
    category: "mind-body",
    image: "/images/hrv.jpg",
    link: "#"
  },

  // Digital Workflow
  {
    id: 13,
    name: "Stream Deck Mini",
    description: "Trigger complex workflows or shortcuts with a tap. Minimal input, maximum flow.",
    category: "workflow",
    image: "/images/streamdeck.jpg",
    link: "#"
  },
  {
    id: 14,
    name: "Wireless Mechanical Keyboard",
    description: "Tactile, responsive keys that support rhythm, not just input.",
    category: "workflow",
    image: "/images/keyboard.jpg",
    link: "#"
  },
  {
    id: 15,
    name: "Vertical Ergonomic Mouse",
    description: "A subtle shift that reduces strain and increases long-term ease.",
    category: "workflow",
    image: "/images/mouse.jpg",
    link: "#"
  },
  {
    id: 16,
    name: "USB-C Hub Docking Station",
    description: "Declutter connections and center your workflow around one anchor point.",
    category: "workflow",
    image: "/images/dock.jpg",
    link: "#"
  },
  {
    id: 17,
    name: "Noise-Canceling Headphones",
    description: "Control your auditory environment. Focus without friction.",
    category: "workflow",
    image: "/images/headphones.jpg",
    link: "#"
  },
  {
    id: 18,
    name: "Smart Task Light",
    description: "Reduces eye strain and regulates circadian-friendly brightness for screen-based work.",
    category: "workflow",
    image: "/images/tasklight.jpg",
    link: "#"
  },

  // Rest & Recovery
  {
    id: 19,
    name: "Weighted Blanket",
    description: "Ground your body and nervous system for deeper, safer rest.",
    category: "rest",
    image: "/images/blanket.jpg",
    link: "#"
  },
  {
    id: 20,
    name: "Blue Light Blocking Glasses",
    description: "Protect your melatonin cycle and wind down with clarity.",
    category: "rest",
    image: "/images/glasses.jpg",
    link: "#"
  },
  {
    id: 21,
    name: "Magnesium Supplement (Calm Blend)",
    description: "Support natural relaxation and deeper sleep cycles.",
    category: "rest",
    image: "/images/magnesium.jpg",
    link: "#"
  },
  {
    id: 22,
    name: "Sleep Sound Machine",
    description: "Drown out noise and signal your brain: it's time to recover.",
    category: "rest",
    image: "/images/sound.jpg",
    link: "#"
  },
  {
    id: 23,
    name: "Aromatherapy Diffuser",
    description: "Scent is a nervous system shortcut. Use it to unwind.",
    category: "rest",
    image: "/images/diffuser.jpg",
    link: "#"
  },
  {
    id: 24,
    name: "Acupressure Mat",
    description: "Release tension and reconnect body awareness before bed.",
    category: "rest",
    image: "/images/acumat.jpg",
    link: "#"
  },

  // Environment & Ritual
  {
    id: 25,
    name: "Minimalist Desk Lamp",
    description: "Lighting that shapes attention and rhythm without clutter.",
    category: "environment",
    image: "/images/lamp.jpg",
    link: "#"
  },
  {
    id: 26,
    name: "Natural Cork Desk Mat",
    description: "Ground your workspace with texture and quiet materiality.",
    category: "environment",
    image: "/images/deskmat.jpg",
    link: "#"
  },
  {
    id: 27,
    name: "Standing Meditation Cushion",
    description: "Create a deliberate pause point in your daily environment.",
    category: "environment",
    image: "/images/cushion.jpg",
    link: "#"
  },
  {
    id: 28,
    name: "Desktop Zen Garden",
    description: "Micro-rituals for focus and momentary calm throughout the day.",
    category: "environment",
    image: "/images/zen.jpg",
    link: "#"
  },
  {
    id: 29,
    name: "Essential Oil Roller",
    description: "Portable scent for cueing rituals and emotional reset.",
    category: "environment",
    image: "/images/roller.jpg",
    link: "#"
  },
  {
    id: 30,
    name: "Daily Intention Card Deck",
    description: "Center presence with small prompts for focus and values alignment.",
    category: "environment",
    image: "/images/deck.jpg",
    link: "#"
  },

  // Expression & Insight
  {
    id: 31,
    name: "Hardcover Dotted Journal",
    description: "Open space for identity, reflection, clarity, and visioning.",
    category: "insight",
    image: "/images/journal.jpg",
    link: "#"
  },
  {
    id: 32,
    name: "Reflective Prompt Deck",
    description: "Cut through the noise with structured inquiry for self-growth.",
    category: "insight",
    image: "/images/prompts.jpg",
    link: "#"
  },
  {
    id: 33,
    name: "Smart Pen Recorder",
    description: "Capture thoughts in analog and digital simultaneously.",
    category: "insight",
    image: "/images/smartpen.jpg",
    link: "#"
  },
  {
    id: 34,
    name: "Creative Expression Toolkit",
    description: "Color, shape, and play—invite subconscious insight and release.",
    category: "insight",
    image: "/images/artkit.jpg",
    link: "#"
  },
  {
    id: 35,
    name: "Mood-Based Playlist Light",
    description: "Pair sound and ambiance with inner states or reflection rituals.",
    category: "insight",
    image: "/images/moodlight.jpg",
    link: "#"
  },
  {
    id: 36,
    name: "Visualization & Manifestation Journal",
    description: "Map your vision. Reflect it daily. Rewire your belief system.",
    category: "insight",
    image: "/images/vision.jpg",
    link: "#"
  }
];

export default products;
