# Emotion Nuxt 4 Template

A production-ready Nuxt 4 starter template by Emotion Agency with smooth scrolling, GSAP animations, headless UI components, form validation, toast notifications, and a comprehensive SCSS design system.

## Quick Start

```bash
npx @emotionagency/template <your-app-name>
```

## Setup

This template uses [pnpm](https://pnpm.io/) as the preferred package manager.

```bash
# Install dependencies
pnpm install

# Start dev server at http://localhost:3000
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Generate static site
pnpm generate
```

## Project Structure

```
app/
├── assets/styles/       # SCSS design system
│   ├── helpers/         # Variables, mixins, functions, breakpoints
│   ├── ui/              # Button and input field styles
│   ├── reset.scss       # CSS reset
│   ├── global.scss      # Global styles
│   ├── layout.scss      # Grid and container system
│   └── utility.scss     # Utility classes
├── components/          # Auto-imported Vue components
│   ├── Input/           # Form inputs (Field, Checkbox, Number, Search, Textarea)
│   ├── Toast/           # Toast notification system
│   ├── Dialog/          # Modal dialog
│   └── Tooltip/         # Tooltip component
├── composables/         # Auto-imported composables
├── utils/               # Auto-imported utilities
├── libs/gsap/           # GSAP configuration
├── middleware/           # Route middleware
├── layouts/             # Layout components
└── pages/               # File-based routing
shared/
├── types/               # Shared TypeScript interfaces
└── transitions/         # Page transition config
cli/                     # Component/page generator
```

## Features

### Smooth Scroll

The template uses `@emotionagency/emotion-scroll` for custom smooth scrolling, initialized via the `SmoothScroll` component in `app.vue`. Accessible globally through `window.escroll`.

### GSAP Animations

Pre-configured GSAP with `Flip` and `ScrollTrigger` plugins. Defaults include golden ratio duration (0.618s) and `power2.out` easing. ScrollTrigger is bound to `#scroll-container`.

```ts
import { gsap, ScrollTrigger, Flip } from '~/libs/gsap'
```

### Components

**UI:**
- `CustomButton` -- button with start/end icon slots
- `LoFiButton` -- base component that renders as `<button>`, `<a>`, or `<NuxtLink>` depending on props
- `Dialog` -- modal with backdrop blur (uses reka-ui)
- `Tooltip` -- tooltip with fade transition (uses reka-ui)
- `Loader` -- animated SVG spinner

**Form Inputs:**
- `InputField` -- text input with label, validation, and icon slots
- `InputNumber` -- number field with increment/decrement buttons
- `InputSearch` -- search field with clear button and loading state
- `InputTextarea` -- textarea with validation
- `InputCheckbox` -- checkbox with animated icons (uses reka-ui)

**Feedback:**
- `ToastGroup` / `ToastItem` -- toast notifications with progress bar and drag-to-dismiss

**Utility:**
- `SmoothScroll` -- emotion-scroll wrapper
- `AppGrid` -- 12-column debug grid (toggle with `G` key in dev mode)
- `Landscape` -- landscape orientation warning
- `PageMeta` -- SEO meta tags (title, description, OG, Twitter)

### Composables

- `useAppState()` -- global app state (`isInEditor`, `isLoaded`, `isWaiting`)
- `useToasts()` -- toast notifications with `success`, `error`, `info`, `warning` methods
- `useSSRMediaQuery()` -- SSR-safe media query hook with UA-based server-side detection
- `useDecodedRuntimeConfig()` -- decodes base64-encoded runtime config

### SCSS Design System

Global SCSS helpers are auto-imported into every component.

**Functions:**
- `rem($px)` -- convert px to rem
- `vw($px, $screen)` -- viewport width percentage
- `vh($px)` -- viewport height percentage
- `size($pcSize, $mobSize)` -- fluid sizing between breakpoints
- `aspect($w, $h)` -- aspect ratio calculation

**Mixins:**
- `cover` -- background cover
- `coverdiv($pos)` -- full-screen overlay
- `center($axis)` -- centering (both, h, v)
- `col($start, $end)` / `row($start, $end)` -- grid placement
- `font($name, $file, $weight, $style)` -- @font-face declaration

**Breakpoints:**
| Variable | Width  | Usage          |
|----------|--------|----------------|
| `$uls`   | 2100px | Ultra large    |
| `$ls`    | 1366px | Large screen   |
| `$br1`   | 960px  | Tablet         |
| `$br2`   | 768px  | Small tablet   |
| `$br3`   | 660px  | Mobile landscape |
| `$br4`   | 460px  | Mobile         |

**Utility Classes:**
- Spacing: `mt-1` to `mt-8`, `mb-*`, `ml-*`, `mr-*`, `pt-*`, `pb-*`, `pl-*`, `pr-*`, `gap-*`
- Flexbox: `flex`, `flex-column`, `justify-between`, `align-center`, `align-start`, `align-end`
- Text: `text-center`, `text-left`, `text-right`, `text-ellipsis`
- Sizing: `w-100`, `w-fit`, `h-100`, `h-100vh`

### Dark Mode

CSS variables switch automatically when the `.dark` class is added to the root element. Supports background, foreground, card, border, and muted color tokens.

### Page Transitions

Global page transitions are handled via middleware with `out-in` mode (250ms duration).

### Debug Grid

Press `G` in development mode to toggle a 12-column grid overlay for layout alignment.

## Included Libraries

| Library | Purpose | Docs |
|---------|---------|------|
| [VueUse](https://vueuse.org/) | Vue composition utilities | [Guide](https://vueuse.org/guide/) |
| [Reka UI](https://reka-ui.com/) | Headless UI components | [Docs](https://reka-ui.com/) |
| [GSAP](https://gsap.com/) | Animations (Flip, ScrollTrigger) | [Docs](https://gsap.com/docs/) |
| [Nuxt Icon](https://nuxt.com/modules/icon) | Icon system (Lucide collection) | [Module](https://nuxt.com/modules/icon) |
| [Nuxt Fonts](https://nuxt.com/modules/fonts) | Font management | [Module](https://nuxt.com/modules/fonts) |
| [Vuelidate](https://vuelidate-next.netlify.app/) | Form validation | [Docs](https://vuelidate-next.netlify.app/) |
| [Emotion Scroll](https://github.com/emotionagency/emotion-scroll) | Smooth scrolling | -- |
| [focus-trap](https://github.com/focus-trap/focus-trap) | Focus management for modals | -- |

## CLI Generator

Generate new components and pages:

```bash
node cli/create.mjs
```

## Code Quality

- ESLint with Nuxt preset
- Prettier (single quotes, no semicolons, trailing commas)
- EditorConfig for consistent formatting

Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) and [deployment guide](https://nuxt.com/docs/getting-started/deployment) for more information.
