# AutoCheckPro Design Guidelines

## Design Approach
Complete structural and behavioral replica of autokinspection.com with white/light theme treatment. Maintain identical section order, spacing, animations, and UX flow with only brand name, pricing, and color scheme modifications.

## Color Theme
**White/Light Theme Palette:**
- Primary Background: Clean white (#FFFFFF)
- Secondary Background: Light gray (#F9FAFB, #F3F4F6)
- Text Primary: Dark gray/charcoal (#111827, #1F2937)
- Text Secondary: Medium gray (#6B7280)
- Accent: Professional blue or trust-building color for CTAs
- Borders: Light gray (#E5E7EB, #D1D5DB)
- Shadows: Subtle soft shadows for depth (0 1px 3px rgba(0,0,0,0.1))

## Typography
Match autokinspection.com hierarchy exactly:
- Hero Headline: Large, bold, impactful (48-64px desktop)
- Section Headers: Bold, clear hierarchy (32-40px)
- Subheadings: Medium weight (20-24px)
- Body Text: Clean, readable (16-18px)
- Form Labels: Clear, professional (14-16px)

## Layout & Spacing
**Tailwind spacing units: 4, 6, 8, 12, 16, 20, 24, 32**

Section vertical padding: py-16 to py-24
Container max-width: max-w-7xl
Component spacing: gap-8, gap-12 for grids
Form field spacing: space-y-4 to space-y-6

## Page Structure (Exact Replica Order)

### 1. Hero Section
- Full-width light gradient background
- Centered headline: "Get a Clear Picture Before You Buy"
- Subtext: "Protect yourself from buying a used car with hidden problems..."
- Two CTAs side-by-side: "Get Report" (primary), "Learn More" (secondary)
- Car image prominently displayed (sedan/SUV professional photography)
- Smooth fade + slide entry animation

### 2. Service Tagline Section
- "AutoCheckPro Service" heading
- "we ensure your car is in perfect condition" subtext
- Car inspection image with white background, subtle shadow

### 3. VIN Report Form ("Get Your Report now")
- White card with light shadow elevation
- Field order (strict): First Name, Last Name, Email, Car VIN Number
- VIN validation: exactly 17 alphanumeric characters, live validation
- Submit button below fields
- Professional form styling with light borders, focus states

### 4. Where We Provide Service
- "Serving Customers Across the World" headline
- Animated horizontal flag carousel (continuous scroll)
- Countries: France, USA, Canada, Australia, UK, New Zealand
- Rectangular flag images with subtle animation
- White background with flags clearly visible

### 5. About Us Section
- Two-column layout: car image left, content right
- "Your Trusted Car Inspection Experts" headline
- Body copy about AutoCheckPro service quality
- "Get Your Report" CTA button at end
- White background with professional spacing

### 6. Our History Section
- "Our Journey Through Excellence" headline
- Two cards: Vision and Mission
- Cards on white with light shadows, equal width
- Professional icon or visual element per card

### 7. Why Choose Us
- "Expertise. Trust. Reliability." headline
- Officer/professional image on left or integrated
- Three pillars displayed clearly:
  - Expertise: "Benefit from our knowledgeable team"
  - Trustworthy Information: "Rely on accurate data"
  - Dependable Support: "Count on us for consistent assistance"
- Light gray background section for visual separation

### 8. Pricing Section
- "AutoCheckPro Plan" headline
- Single pricing card on white with shadow
- **Price: $20 USD** (prominent display)
- Feature checklist with checkmarks:
  - 1 Vehicle Report
  - Vehicle Specification
  - DMV Title History
  - Safety Recall Status
  - Online Listing History
  - Junk & Salvage Information
  - Accident Information
- Professional card elevation and spacing

### 9. Contact Us Section
- Two-column layout
- Left: Contact information, email address
- Right: Contact form (First Name, Last Name, Email, VIN, Message)
- White background with form fields having light borders

### 10. Trust Badges Section
- Logos: NMVTIS, Kelley Blue Book, J.D. Power, NADA
- Horizontal centered layout
- Grayscale or subtle color logos on white background
- Caption about data providers and specialists

### 11. Disclaimer Section
- Light background (#F9FAFB)
- Professional typography
- Text about NMVTIS licensing and marketing approach

## Components

### Forms
- Light borders (#D1D5DB)
- Focus state: blue ring or accent color
- Padding: p-3 to p-4
- Border radius: rounded-lg
- Error states: red border with error message below
- Success states: green border for validation

### Buttons
Primary CTA: Solid background with accent color, white text, rounded-lg, px-8 py-3
Secondary CTA: Light background or outlined, accent border/text
Hover: Slight brightness change, smooth transition
Blurred background when over images in hero

### Cards
White background (#FFFFFF)
Subtle shadow: shadow-md to shadow-lg
Border radius: rounded-xl
Padding: p-6 to p-8
Light border optional: border border-gray-200

### Flag Carousel
Horizontal scrolling animation (continuous loop)
Each flag in rectangular frame
Smooth, slow animation speed
Flags clearly visible on white background

## Animations & Interactions
Match autokinspection.com timing exactly:
- Section fade-ins on scroll (subtle, smooth)
- Hero elements slide + fade entry
- Smooth scroll behavior
- Form field focus animations
- Button hover transitions (200-300ms)
- Flag carousel continuous horizontal scroll
- No flashy or cheap effects

Use: Framer Motion or GSAP for scroll animations, CSS for interactions

## Images

### Hero Section
Large professional car image (sedan/SUV/truck variety)
High-quality photography with clean background
Positioned prominently in hero, not as background

### Service Section
Car inspection or mechanic working on vehicle
Professional, clean imagery

### About Us
Professional car or inspection scene
Left-aligned in two-column layout

### Why Choose Us
Professional officer/inspector image or automotive professional
Positioned to support trust messaging

### Flags
Real flag images (SVG or PNG), rectangular format
Countries: France, USA, Canada, Australia, UK, New Zealand

### Trust Badges
Official-looking logos for NMVTIS, Kelley Blue Book, J.D. Power, NADA
Grayscale or subtle color treatment on white

## Delivery Time Messaging
Display clearly in pricing or post-form:
- "Maximum delivery time: 6 hours"
- "Most reports delivered within 10-15 minutes"
Professional typography, trust-focused placement

## Terms & Conditions
Include clearly (footer or dedicated section):
- "No refunds after 1 hour of purchase"
- Digital service disclaimer
- Informational use only

## Responsive Behavior
Match original breakpoints:
- Mobile: Stack all columns, full-width cards
- Tablet: Two-column where appropriate
- Desktop: Full multi-column layouts
Maintain identical mobile/desktop adaptations from original

## Technical Notes
- NO emojis anywhere
- EmailJS and PayPal credentials as placeholders only
- Real flag images, trust badges, vehicle photography
- Production-ready, SEO-optimized
- Fast loading performance