# AutoCred Inspection Design Guidelines

## Design Approach
**Reference-Based Design**: Exact structural and behavioral replica of autokinspection.com with professional pure red theme treatment. Maintain identical section order, spacing, animations, and UX flow with only color scheme and brand name modifications.

## Color Theme - Professional Pure Red Palette
- **Primary Red**: #FF0000 (main CTAs, accents, highlights)
- **Hover Red**: #CC0000 (button hovers, interactive states)
- **Accent Red**: #FF3333 (secondary accents, borders, icons)
- **Background**: Clean white (#FFFFFF)
- **Secondary Background**: Light gray (#F9FAFB, #F3F4F6)
- **Text Primary**: Dark gray/charcoal (#111827, #1F2937)
- **Text Secondary**: Medium gray (#6B7280)
- **Borders**: Light gray (#E5E7EB, #D1D5DB)
- **Shadows**: Subtle soft shadows (0 1px 3px rgba(0,0,0,0.1))

## Typography Hierarchy
Match autokinspection.com exactly:
- **Hero Headline**: Large, bold, impactful (48-64px desktop, 32-40px mobile)
- **Section Headers**: Bold, clear hierarchy (32-40px desktop, 24-32px mobile)
- **Subheadings**: Medium weight (20-24px)
- **Body Text**: Clean, readable (16-18px)
- **Form Labels**: Clear, professional (14-16px)
- **Font Stack**: Modern sans-serif (DM Sans or similar)

## Layout System
**Tailwind spacing units**: 4, 6, 8, 12, 16, 20, 24, 32

- Section vertical padding: py-16 to py-24
- Container max-width: max-w-7xl
- Component spacing: gap-8, gap-12 for grids
- Form field spacing: space-y-4 to space-y-6

## Page Structure (Exact Section Order)

### 1. Sticky Navigation Bar
- Fixed top position, white background with subtle shadow on scroll
- **Left**: Logo placeholder - "AutoCred Inspection" in modern red typography with red accent
- **Right**: Navigation menu (Home, Services, About Us, Contact)
- **Mobile**: Hamburger menu with smooth slide-in drawer
- Red accent on active/hover nav items

### 2. Hero Section
- Full-width layout with professional car image (sedan/SUV)
- **Headline**: "Get a Clear Picture Before You Buy"
- **Subtext**: "Protect yourself from buying a used car with hidden problems..."
- **CTAs**: Two buttons side-by-side
  - Primary: "Get Report" (solid red #FF0000, white text, blurred background)
  - Secondary: "Learn More" (outlined red, red text, blurred background)
- Smooth fade + slide entry animation
- Hero image: Professional car photography, prominently displayed

### 3. Service Tagline Section
- Center-aligned content
- **Heading**: "AutoCred Inspection Service"
- **Subtext**: "we ensure your car is in perfect condition"
- Car inspection image with white background, subtle shadow

### 4. VIN Report Form Section
- **Heading**: "Get Your Report now"
- White card with elevated shadow
- **Fields** (exact order):
  1. First Name
  2. Last Name
  3. Email
  4. Car VIN Number (17 alphanumeric validation)
- Submit button: Red background (#FF0000), white text
- **Note**: Form is static/non-functional (no email submission)

### 5. Global Service Areas
- **Heading**: "Where We Provide Service"
- **Subheading**: "Serving Customers Across the World"
- **Content**: Horizontal animated flag carousel (continuous scroll)
- Countries: France, USA, Canada, Australia, UK, New Zealand
- Rectangular flag images with smooth animation

### 6. About Us Section
- Two-column layout (desktop) / stacked (mobile)
- **Left**: Professional car inspection image
- **Right**: Content block
  - **Heading**: "About Us"
  - **Subheading**: "Your Trusted Car Inspection Experts"
  - Body copy about service quality
  - Red CTA button: "Get Your Report"

### 7. Our History Section
- **Heading**: "Our History"
- **Subheading**: "Our Journey Through Excellence"
- Two-column card layout:
  - **Vision** card: Icon + heading + description
  - **Mission** card: Icon + heading + description
- Cards: White background, light shadows, red accents on icons

### 8. Why Choose Us Section
- Light gray background section
- **Heading**: "WHY CHOOSE US"
- **Subheading**: "Expertise. Trust. Reliability."
- Professional officer/inspector image integrated
- Three pillars with red icons:
  - **Expertise**: "Benefit from our knowledgeable team"
  - **Trustworthy Information**: "Rely on accurate data"
  - **Dependable Support**: "Count on us for consistent assistance"

### 9. Contact Us Section
- **Heading**: "Contact Us"
- Two-column layout:
  - **Left**: "Get in Touch" + email address + quick response message
  - **Right**: Contact form (First Name, Last Name, Email, VIN, Message)
- Form fields: Light borders, red focus states
- Submit button: Red background
- **Note**: Form is static (no submission)

### 10. Trust Badges Section
- Centered horizontal logo layout
- **Caption**: "The AutoCred Inspection Report includes information from industry's most trusted data providers"
- Logos: NMVTIS, Kelley Blue Book, J.D. Power, NADA
- Grayscale or subtle color treatment

### 11. Disclaimer Section
- Light gray background (#F9FAFB)
- Professional typography
- Content about service, no refund policy, delivery times
- Text: Dark gray on light background

## Component Specifications

### Buttons
- **Primary CTA**: Red background (#FF0000), white text, rounded-lg, px-8 py-3, shadow-md
- **Secondary CTA**: Outlined red border (#FF0000), red text, rounded-lg, px-8 py-3
- **Hover**: Darker red (#CC0000), smooth 200ms transition
- **Blurred backgrounds** when placed over images

### Form Fields
- Light gray borders (#D1D5DB)
- Red focus ring (#FF0000)
- Padding: p-3 to p-4
- Border radius: rounded-lg
- Error states: Red border with message below

### Cards
- White background (#FFFFFF)
- Shadow: shadow-md to shadow-lg
- Border radius: rounded-xl
- Padding: p-6 to p-8
- Optional light border: border border-gray-200

## Images Required

### Hero Section
Large professional car image - modern sedan or SUV in clean environment, high-quality photography

### Service Section
Car inspection scene or mechanic working professionally

### About Us
Professional automotive inspection or quality car image for left column

### Why Choose Us
Professional automotive inspector or officer image

### Flags
Rectangular flag images for France, USA, Canada, Australia, UK, New Zealand

### Trust Badges
Official logos for NMVTIS, Kelley Blue Book, J.D. Power, NADA

## Animations & Interactions
- Section fade-ins on scroll (Framer Motion)
- Hero elements slide + fade entry
- Flag carousel continuous horizontal scroll
- Button hover transitions (200-300ms)
- Form field focus animations
- Smooth scroll behavior throughout
- Subtle, professional - no flashy effects

## Responsive Behavior
- **Desktop**: Full multi-column layouts, max-w-7xl containers
- **Tablet**: Two-column adaptations, reduced spacing
- **Mobile**: Single column stack, hamburger navigation, full-width cards
- Breakpoints: sm, md, lg, xl (Tailwind defaults)

## Critical Requirements
- NO payment integration (remove all PayPal code)
- NO email integration (remove all EmailJS code)
- Logo placeholder initially: Modern "AutoCred Inspection" typography with red accent
- All forms are static/non-functional
- Professional, trust-building aesthetic
- Fast loading, optimized performance