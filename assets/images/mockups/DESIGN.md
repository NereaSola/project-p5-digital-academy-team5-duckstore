---
name: Quack & Co.
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#40484c'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#71787c'
  outline-variant: '#c0c8cc'
  surface-tint: '#306579'
  primary: '#0d4a5d'
  on-primary: '#ffffff'
  primary-container: '#2d6276'
  on-primary-container: '#a8dcf3'
  inverse-primary: '#9bcee5'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#ffda63'
  on-secondary-container: '#765e00'
  tertiary: '#354846'
  on-tertiary: '#ffffff'
  tertiary-container: '#4c605e'
  on-tertiary-container: '#c4d9d7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bbe9ff'
  primary-fixed-dim: '#9bcee5'
  on-primary-fixed: '#001f29'
  on-primary-fixed-variant: '#124d60'
  secondary-fixed: '#ffe084'
  secondary-fixed-dim: '#e7c34f'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#d1e7e4'
  tertiary-fixed-dim: '#b5cbc8'
  on-tertiary-fixed: '#0b1f1d'
  on-tertiary-fixed-variant: '#374a49'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-x-desktop: 64px
  margin-x-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The brand personality is playful, inviting, and modern, designed to appeal to both collectors and gift-shoppers. It utilizes a "Clean Playful" aesthetic—a mix of **Minimalism** and **Tactile** design. The UI leverages generous whitespace and a soft pastel base to create a sense of calm, while using bold typography and high-contrast navy accents to ensure clarity and professionalism.

The goal is to evoke a sense of joy and approachability. Visual weight is distributed through card-based layouts with soft shadows, creating a tangible, "shopable" feel that mirrors the physical nature of the products.

## Colors
This design system uses a refreshing and high-contrast palette to drive engagement:

- **Primary (Navy Blue):** Used for primary buttons, headings, and critical UI elements. It provides the "anchor" for the brand's reliability.
- **Secondary (Duck Gold):** Used for promotional banners and highlight actions. This color represents the brand's core product and is used sparingly to draw the eye.
- **Tertiary (Mint Frost):** The signature background color. It is a very light, desaturated teal that feels cleaner and more modern than pure white.
- **Neutral:** A deep slate used for body text and secondary labels to maintain readability without the harshness of pure black.

## Typography
The typography system relies exclusively on **Plus Jakarta Sans** for its friendly, geometric, and modern characteristics. 

- **Headlines:** Use heavy weights (Bold/ExtraBold) with slight negative letter spacing to create a punchy, impactful look for product names and marketing copy.
- **Body:** Uses a generous line height (1.5x - 1.6x) to ensure high legibility against the light mint background.
- **Hierarchy:** Contrast is achieved primarily through weight and color rather than drastic size changes, maintaining a "tight" and professional feel.

## Layout & Spacing
The layout follows a **Fluid Grid** philosophy within a contained maximum width.

- **Grid:** A 12-column grid is used for desktop, transitioning to a 2-column grid for tablets and a single-column stack for mobile.
- **Rhythm:** An 8px base unit governs all spacing. Vertical rhythm is maintained by using 24px (stack-md) for standard component spacing and 48px (stack-lg) to separate major page sections.
- **Margins:** Desktop views use wide horizontal margins to keep content centered and readable, creating a premium, "boutique" feel.

## Elevation & Depth
The design system utilizes **Tonal Layers** combined with **Ambient Shadows** to create a sense of approachability.

- **Level 0 (Floor):** The Tertiary Mint background.
- **Level 1 (Cards):** Pure white surfaces with a soft, diffused shadow (Blur: 20px, Opacity: 6%, Color: Navy Blue). This makes products appear to float gently.
- **Level 2 (Interaction):** Active states for buttons and cards may feature a slightly deeper shadow or a subtle scale-up effect (1.02x) to provide tactile feedback.
- **Depth Tints:** Shadows are never pure black; they are always tinted with a small percentage of the Primary Navy to keep the UI feeling cohesive and "airy."

## Shapes
The shape language is defined by friendly, **Rounded** corners. 

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Containers:** Large product cards and section banners (like the CTA club banner) use `rounded-xl` (1.5rem / 24px) to emphasize the playful nature of the brand.
- **Pill Accents:** Elements like "New" or "Limited Edition" chips use a fully rounded (pill) radius to distinguish them from functional buttons.

## Components
- **Buttons:** Primary buttons are Navy Blue with white text. They should have a subtle inner glow or top-border highlight to feel "pressed" or tactile. Secondary buttons (like "Shop Now") use the Gold accent to drive conversions.
- **Product Cards:** Feature a white background, rounded corners (1.5rem), and a central image. Content is bottom-aligned with the Navy primary color used for the CTA button within the card.
- **Chips/Badges:** Small, pill-shaped tags used for categorization. Use semi-transparent versions of the primary color or the gold accent for high-priority labels.
- **Input Fields:** Pure white backgrounds with a subtle 1px border in a lightened Navy. Focus states should use a 2px Gold outline to ensure accessibility.
- **Newsletter Banner:** A high-impact component using the Gold secondary color as a background, featuring a simplified layout to maximize sign-up conversions.