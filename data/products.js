const products = [
  {
    "id": 1,
    "name": "Blue Light Blocking Glasses",
    "slug": "blue-light-blocking-glasses",
    "category": "focus-tools",
    "image": "/images/bluelight.jpg",
    "affiliateLink": "https://www.amazon.com/dp/B07QX8ZZLV",
    "fallbackDescription": "Protect your eyes and reclaim your focus from screen fatigue.",
    "affiliateData": {
      "source": "Amazon",
      "asin": "B07QX8ZZLV",
      "price": "$19.99",
      "availability": "In stock"
    },
    "aiInsights": {
      "summary": "These non-prescription glasses filter blue light from screens to help reduce eye strain, especially during late-night work sessions.",
      "useCases": [
        "Remote workers with high screen exposure",
        "Students or professionals experiencing digital fatigue",
        "Anyone trying to improve evening sleep hygiene"
      ],
      "caution": "Not a replacement for prescription lenses. May cause slight color distortion on some screens."
    }
  },
  {
      "id": 2,
      "name": "Noise-Canceling Earbuds",
      "slug": "noise-canceling-earbuds",
      "category": "focus-tools",
      "image": "/images/earbuds.jpg",
      "affiliateLink": "#",
      "fallbackDescription": "Silence distraction and amplify focus wherever you are.",
      "affiliateData": {
          "source": "",
          "asin": "",
          "price": "",
          "availability": ""
      },
      "aiInsights": {
          "summary": "",
          "useCases": [],
          "caution": ""
      }
  },
  {
      "id": 3,
      "name": "Digital Timer Cube",
      "slug": "digital-timer-cube",
      "category": "focus-tools",
      "image": "/images/timer.jpg",
      "affiliateLink": "#",
      "fallbackDescription": "Physical timeboxing for flow state training.",
      "affiliateData": {
          "source": "",
          "asin": "",
          "price": "",
          "availability": ""
      },
      "aiInsights": {
          "summary": "",
          "useCases": [],
          "caution": ""
      }
  },
  {
    "id": 4,
    "name": "Task Planning Notepad",
    "slug": "task-planning-notepad",
    "category": "focus-tools",
    "image": "/images/notepad.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Visual priority mapping for intentional days.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 5,
    "name": "Portable Whiteboard Tablet",
    "slug": "portable-whiteboard-tablet",
    "category": "focus-tools",
    "image": "/images/whiteboard.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Externalize thinking and iterate freely.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 6,
    "name": "Focus Booster Lamp",
    "slug": "focus-booster-lamp",
    "category": "focus-tools",
    "image": "/images/focuslamp.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Daylight-aligned lighting for energy regulation.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 7,
    "name": "Breath Training Device",
    "slug": "breath-training-device",
    "category": "mind-body",
    "image": "/images/breath.jpg",
    "affiliateLink": "https://www.amazon.com/dp/B08T5P7TPW",
    "fallbackDescription": "Train your nervous system and regulate stress.",
    "affiliateData": {
      "source": "Amazon",
      "asin": "B08T5P7TPW",
      "price": "$54.99",
      "availability": "In stock"
    },
    "aiInsights": {
      "summary": "This device supports slow, regulated breathing patterns by providing real-time resistance training for the lungs. A physical anchor for stress reduction and vagal tone improvement.",
      "useCases": [
        "Daily breathwork or meditation routines",
        "Improving lung capacity and resilience",
        "Managing symptoms of anxiety or burnout"
      ],
      "caution": "Not recommended for individuals with certain respiratory conditions—consult a healthcare professional if unsure."
    }
  },
  {
    "id": 8,
    "name": "Acupressure Mat",
    "slug": "acupressure-mat",
    "category": "mind-body",
    "image": "/images/acupressure.jpg",
    "affiliateLink": "https://www.amazon.com/dp/B01GIL6EU4",
    "fallbackDescription": "Full-body release and nervous system decompression.",
    "affiliateData": {
      "source": "Amazon",
      "asin": "B01GIL6EU4",
      "price": "$24.95",
      "availability": "In stock"
    },
    "aiInsights": {
      "summary": "The mat stimulates acupressure points across the body to help relieve muscle tension, improve circulation, and promote parasympathetic activation.",
      "useCases": [
        "End-of-day nervous system reset",
        "Relieving back and neck tension from sedentary work",
        "Enhancing mindfulness or breathwork practices"
      ],
      "caution": "Not recommended for individuals with sensitive skin or blood clotting disorders without medical consultation."
    }
  },
  {
    "id": 9,
    "name": "Infrared Neck Wrap",
    "slug": "infrared-neck-wrap",
    "category": "mind-body",
    "image": "/images/neckwrap.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Targeted heat for deep physical decompression.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 10,
    "name": "Adaptogen Capsules",
    "slug": "adaptogen-capsules",
    "category": "mind-body",
    "image": "/images/adaptogens.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Support clarity, resilience, and internal rhythm.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 11,
    "name": "Balance Cushion",
    "slug": "balance-cushion",
    "category": "mind-body",
    "image": "/images/balance-cushion.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Micro-movement training to stay grounded and aware.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 12,
    "name": "HRV Tracker Ring",
    "slug": "hrv-tracker-ring",
    "category": "mind-body",
    "image": "/images/hrv.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Insight into your recovery and restoration patterns.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 13,
    "name": "Stream Deck Mini",
    "slug": "stream-deck-mini",
    "category": "workflow",
    "image": "/images/streamdeck.jpg",
    "affiliateLink": "https://www.amazon.com/dp/B07D5V2ZXD",
    "fallbackDescription": "Trigger complex workflows or shortcuts with a tap. Minimal input, maximum flow.",
    "affiliateData": {
      "source": "Amazon",
      "asin": "B07D5V2ZXD",
      "price": "$79.99",
      "availability": "In stock"
    },
    "aiInsights": {
      "summary": "This customizable keypad lets you trigger macros, launch apps, or execute complex workflows instantly, reducing decision fatigue and boosting task flow.",
      "useCases": [
        "Streamlining repetitive digital tasks",
        "Creating low-friction transitions between work modes",
        "Developing ADHD-friendly digital rituals"
      ],
      "caution": "Initial setup requires some time investment to optimize for your habits."
    }
  },
  {
    "id": 14,
    "name": "Wireless Mechanical Keyboard",
    "slug": "wireless-mechanical-keyboard",
    "category": "workflow",
    "image": "/images/keyboard.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Tactile, responsive keys that support rhythm, not just input.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 15,
    "name": "Vertical Ergonomic Mouse",
    "slug": "vertical-ergonomic-mouse",
    "category": "workflow",
    "image": "/images/mouse.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "A subtle shift that reduces strain and increases long-term ease.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 16,
    "name": "USB-C Hub Docking Station",
    "slug": "usb-c-hub-docking-station",
    "category": "workflow",
    "image": "/images/dock.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Declutter connections and center your workflow around one anchor point.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 17,
    "name": "Noise-Canceling Headphones",
    "slug": "noise-canceling-headphones",
    "category": "workflow",
    "image": "/images/headphones.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Control your auditory environment. Focus without friction.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 18,
    "name": "Smart Task Light",
    "slug": "smart-task-light",
    "category": "workflow",
    "image": "/images/tasklight.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Reduces eye strain and regulates circadian-friendly brightness for screen-based work.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 19,
    "name": "Weighted Blanket",
    "slug": "weighted-blanket",
    "category": "rest",
    "image": "/images/blanket.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Ground your body and nervous system for deeper, safer rest.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 20,
    "name": "Blue Light Sunset Bulb",
    "slug": "blue-light-sunset-bulb",
    "category": "rest",
    "image": "/images/bulb.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Protect your melatonin cycle and wind down with clarity.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 21,
    "name": "Magnesium Supplement (Calm Blend)",
    "slug": "magnesium-supplement-calm-blend",
    "category": "rest",
    "image": "/images/magnesium.jpg",
    "affiliateLink": "https://www.amazon.com/dp/B000OQ2DL4",
    "fallbackDescription": "Support natural relaxation and deeper sleep cycles.",
    "affiliateData": {
      "source": "Amazon",
      "asin": "B000OQ2DL4",
      "price": "$23.95",
      "availability": "In stock"
    },
    "aiInsights": {
      "summary": "Magnesium helps regulate the nervous system, muscle function, and circadian rhythm. This blend is especially effective for bedtime decompression.",
      "useCases": [
        "Easing body tension before sleep",
        "Improving sleep onset and quality",
        "Supporting women’s hormonal rhythm"
      ],
      "caution": "May cause digestive upset in higher doses. Consult your provider if taking other medications."
    }
  },
  {
    "id": 22,
    "name": "Sleep Sound Machine",
    "slug": "sleep-sound-machine",
    "category": "rest",
    "image": "/images/sound.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Drown out noise and signal your brain: it's time to recover.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 23,
    "name": "Aromatherapy Diffuser",
    "slug": "aromatherapy-diffuser",
    "category": "rest",
    "image": "/images/diffuser.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Scent is a nervous system shortcut. Use it to unwind.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 24,
    "name": "Acupressure Mat",
    "slug": "acupressure-mat",
    "category": "rest",
    "image": "/images/acumat.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Release tension and reconnect body awareness before bed.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 25,
    "name": "Minimalist Desk Lamp",
    "slug": "minimalist-desk-lamp",
    "category": "environment",
    "image": "/images/lamp.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Lighting that shapes attention and rhythm without clutter.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 26,
    "name": "Natural Cork Desk Mat",
    "slug": "natural-cork-desk-mat",
    "category": "environment",
    "image": "/images/deskmat.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Ground your workspace with texture and quiet materiality.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 27,
    "name": "Standing Meditation Cushion",
    "slug": "standing-meditation-cushion",
    "category": "environment",
    "image": "/images/meditation-cushion.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Create a deliberate pause point in your daily environment.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 28,
    "name": "Desktop Zen Garden",
    "slug": "desktop-zen-garden",
    "category": "environment",
    "image": "/images/zen.jpg",
    "affiliateLink": "https://www.amazon.com/dp/B08XNZPLWJ",
    "fallbackDescription": "Micro-rituals for focus and momentary calm throughout the day.",
    "affiliateData": {
      "source": "Amazon",
      "asin": "B08XNZPLWJ",
      "price": "$17.89",
      "availability": "In stock"
    },
    "aiInsights": {
      "summary": "This miniature garden introduces subtle tactile engagement that breaks cognitive rumination. Great for transition pauses or centering rituals.",
      "useCases": [
        "Mental reset during cognitively demanding work",
        "Creating a calming anchor in a high-stress space",
        "Stimulating subtle movement for neurodivergent focus"
      ],
      "caution": "Not ideal for shared workspaces where loose sand may cause mess or distraction."
    }
  },
  {
    "id": 29,
    "name": "Essential Oil Roller",
    "slug": "essential-oil-roller",
    "category": "environment",
    "image": "/images/roller.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Portable scent for cueing rituals and emotional reset.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 30,
    "name": "Daily Intention Card Deck",
    "slug": "daily-intention-card-deck",
    "category": "environment",
    "image": "/images/deck.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Center presence with small prompts for focus and values alignment.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 31,
    "name": "Hardcover Dotted Journal",
    "slug": "hardcover-dotted-journal",
    "category": "insight",
    "image": "/images/journal.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Open space for identity, reflection, clarity, and visioning.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 32,
    "name": "Reflective Prompt Deck",
    "slug": "reflective-prompt-deck",
    "category": "insight",
    "image": "/images/prompts.jpg",
    "affiliateLink": "https://www.amazon.com/dp/B08P55W8SZ",
    "fallbackDescription": "Cut through the noise with structured inquiry for self-growth.",
    "affiliateData": {
      "source": "Amazon",
      "asin": "B08P55W8SZ",
      "price": "$14.99",
      "availability": "In stock"
    },
    "aiInsights": {
      "summary": "These prompt cards create structure for journaling or conversation, helping you explore emotions, identity, and values with clarity.",
      "useCases": [
        "Evening self-reflection or debrief",
        "Therapy or coaching session augmentation",
        "Breaking through emotional avoidance or creative blocks"
      ],
      "caution": "May evoke strong emotions — allow space and time for integration when needed."
    }
  },
  {
    "id": 33,
    "name": "Smart Pen Recorder",
    "slug": "smart-pen-recorder",
    "category": "insight",
    "image": "/images/smartpen.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Capture thoughts in analog and digital simultaneously.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 34,
    "name": "Creative Expression Toolkit",
    "slug": "creative-expression-toolkit",
    "category": "insight",
    "image": "/images/artkit.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Color, shape, and play—invite subconscious insight and release.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 35,
    "name": "Mood-Based Playlist Light",
    "slug": "mood-based-playlist-light",
    "category": "insight",
    "image": "/images/moodlight.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Pair sound and ambiance with inner states or reflection rituals.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  },
  {
    "id": 36,
    "name": "Visualization & Manifestation Journal",
    "slug": "visualization-manifestation-journal",
    "category": "insight",
    "image": "/images/vision.jpg",
    "affiliateLink": "#",
    "fallbackDescription": "Map your vision. Reflect it daily. Rewire your belief system.",
    "affiliateData": {
        "source": "",
        "asin": "",
        "price": "",
        "availability": ""
    },
    "aiInsights": {
        "summary": "",
        "useCases": [],
        "caution": ""
    }
  }
];

export default products;