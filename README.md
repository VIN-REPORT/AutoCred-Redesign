# AutoCred Inspection Website

Professional vehicle inspection and history report service built with React, TypeScript, and Tailwind CSS.

## Features

✅ **Modern Design**
- Pure red (#FF0000) professional theme
- Smooth animations with AOS and Framer Motion
- Fully responsive (mobile, tablet, desktop)
- Beautiful UI components

✅ **Core Sections**
- Hero section with CTA
- 6 service cards with hover effects
- 2-step report form with payment flow
- Global reach map with country flags
- About/History/Why Choose Us sections
- Pricing display ($10 USD)
- Contact form with EmailJS integration
- Professional footer

✅ **Payment Integration**
- PayPal button (ready for integration)
- Polar payment option
- Secure payment flow simulation

✅ **Forms & Communication**
- Report form (Name, Email, VIN)
- Contact form
- EmailJS integration for notifications
- Client data capture with validation

## Quick Start

### Installation
```bash
npm install
npm run dev:client
```

Visit **http://localhost:5000**

### For Windows Users
See [WINDOWS_SETUP_GUIDE.md](WINDOWS_SETUP_GUIDE.md) for detailed setup instructions.

## Configuration

Add your credentials in `client/src/config.ts`:

```typescript
export const config = {
  emailjs: {
    publicKey: "YOUR_KEY",
    serviceId: "YOUR_SERVICE_ID", 
    templateId: "YOUR_TEMPLATE_ID",
    contactEmail: "autocredinspection@gmail.com"
  },
  paypal: {
    clientId: "YOUR_PAYPAL_CLIENT_ID"
  },
  polar: {
    publicKey: "YOUR_POLAR_PUBLIC_KEY"
  },
  reportPrice: "10.00"
};
```

## Project Structure

```
client/src/
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── ReportForm.tsx   # Form & payment logic
│   ├── GlobalReach.tsx
│   ├── About.tsx
│   ├── History.tsx
│   ├── WhyChooseUs.tsx
│   ├── Pricing.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── pages/
│   └── home.tsx         # Main page composition
├── config.ts            # Configuration
└── index.css            # Global styles
```

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **AOS** - Scroll animations
- **EmailJS** - Email notifications
- **Vite** - Build tool
- **Wouter** - Routing

## Available Scripts

```bash
npm run dev:client       # Start development server
npm run build           # Build for production
npm run preview         # Preview production build
```

## Features Summary

### Report Form
- Collects: First Name, Last Name, Email, VIN
- Sends data via EmailJS to admin
- 2-step process: Form → Payment
- Validation included

### Payment Options
- **PayPal** - Full integration ready
- **Polar** - Alternative payment method
- $10 USD fixed price

### Contact Form
- Captures inquiries
- Sends via EmailJS
- Professional notifications

### Responsive Design
- **Mobile**: Optimized for small screens
- **Tablet**: Adaptive layouts
- **Desktop**: Full-featured experience

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - AutoCred Inspection © 2024

## Support

For setup help, see [WINDOWS_SETUP_GUIDE.md](WINDOWS_SETUP_GUIDE.md)
