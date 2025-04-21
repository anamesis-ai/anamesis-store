# 🧭 Anamesis Store — System Overview

Anamesis Store is a minimalist AI-native commerce platform designed to recommend high-integrity products across six core categories of cognitive and emotional life. It serves as both a consumer storefront and a foundational testbed for future regenerative commerce systems powered by intelligent automation.

---

## 🔍 Purpose

- Promote clarity, focus, and regenerative consumption  
- Reject extractive ad-based commerce models  
- Create a dual-intelligence platform:  
  - **User layer:** Insightful, ad-free product curation  
  - **Business layer:** Fully automated AI-driven operations and optimization

---

## 🧱 Current Architecture

**Frontend:**
- `Next.js` (App Router not yet in use)
- `Tailwind CSS` for styling
- Fully responsive layout with dark mode and font size accessibility
- Category filtering via query params

**Core Pages:**
- `/`: Landing page with category grid  
- `/products`: All or filtered product grid view  
- `/products/[slug]`: Dynamic product detail pages

**Components:**
- `TopNav`: Unified header with logo, category links, dark mode toggle, and font size controls  
- `ProductCard`: Each product is a card rendered in the grid  
- `UIContext`: Global UI state (theme, font size)

---

## 🗃️ Data

**Stored in `data/`:**
- `products.js`: Product array with fields:  
  - `id`, `name`, `slug`, `fallbackDescription`, `category`, `image`, `affiliateLink`, `affiliateData`, `aiInsights`  
- `categories.js`: Category metadata with fields:  
  - `id`, `name`, `slug`, `description`, `image`

---

## 🤖 AI Roadmap

- AI-powered product ranking (user-side insight)  
- AI ops engine (autonomous business intelligence)  
- Predictive commerce engine (long-term)

---

## 🛣️ What's Next

- Affiliate logic + dynamic product content fallback  
- UI polish & product hover states  
- Internal analytics scaffolding  
- AI ops layer (Phase 1: data capture + task automation)

---

_Last updated: April 20, 2025_
