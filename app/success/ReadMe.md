# Mini eCommerce Store (Next.js 14 + TypeScript)

## Project Overview

This project is a full-featured prototype of an eCommerce storefront built with modern frontend technologies. It includes:

Product Catalog with filtering and search  
Cart Management with persistent state  
Checkout Flow and Order Confirmation  
Order History with search, filtering, and sorting  
Receipt and localStorage-based order logging  

Built to showcase a junior-to-mid frontend developer's skill set using the **App Router** in Next.js 14 and modular, scalable architecture.

---

## Design Approach

**Layout**: Responsive grid layout using Tailwind CSS, structured with clear sections (hero, categories, product grid, filters, cart drawer).
**Colors & Typography**: Minimal palette for high contrast and focus on products. Typography uses Tailwind’s font utilities for readability.
**Mobile Responsiveness**: Designed mobile-first with a sticky filter bar, collapsible cart, and flexible UI components.
**Animation**: Subtle tab click transitions using `@tailwindcss/transition` and conditional class states.

---

## Tools & Techniques

### Core Stack:
**Next.js 14 (App Router)**
**TypeScript (strict mode)**
**Tailwind CSS**
**React Query** for data fetching and caching
**Zustand** for global cart state
**localStorage** for cart and order persistence

### Component Patterns:
Modular UI components (`ProductCard`, `OrderTable`, `CartDrawer`)
Reusable hooks (`useProductFilter`, `useLocalOrders`)
Controlled forms and optimistic UI updates

### Testing:
`@testing-library/react` for unit/component tests  
`jest.mock` for state and behavior isolation  
Snapshot tests for key UI components

### CI:
GitHub Actions (optional): run lint, type check, and test on push

---

## SEO Strategy

**Meta Tags**: Set dynamic `metadata` in layout.tsx (title, description, Open Graph).
**Structured Data**: JSON-LD (optional) for products and organization.
**Performance**: Optimized images via Next.js `Image`, lazy loading, and route prefetching.
**Accessibility**: Semantic HTML, alt tags, and focus-visible outlines.

---

## 🛠️ Error-Handling Technique

**UI-Level**:
Friendly fallback messages for failed queries (e.g., no products found).
Toast notifications for cart actions and checkout feedback.
  
- **Data Fetching**:
  - React Query handles loading, error, and stale states.
  - Retry logic and exponential backoff for network calls.

**Logging**:
Custom `useErrorLogger` hook (optional) to log errors in dev.
Errors are surfaced via boundary UI components with recovery options.

**Recovery**:
LocalStorage is used to preserve orders and cart state even on refresh or reload.
404 and generic error boundaries are defined in the `app/` directory.

---


