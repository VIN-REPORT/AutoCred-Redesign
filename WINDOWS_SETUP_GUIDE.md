# AutoCred Inspection - Windows Developer Setup Guide

## Quick Start for Windows Users

### Prerequisites
- **Node.js 18+** - Download from https://nodejs.org/
- **Git** (optional but recommended) - Download from https://git-scm.com/
- **VS Code** (optional) - Download from https://code.visualstudio.com/

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev:client
```

The site will open at: **http://localhost:5000**

### Step 3: Available Scripts
```bash
npm run dev:client       # Start development server
npm run build           # Build for production
npm run preview         # Preview production build locally
```

### Troubleshooting

#### Port 5000 Already in Use
```bash
# Kill the process using port 5000
# Windows Command Prompt:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

#### npm not recognized
- Restart your terminal/PowerShell after installing Node.js
- Or reinstall Node.js

#### Module not found errors
```bash
rm -r node_modules
npm install
```

### Project Structure
```
client/
├── src/
│   ├── pages/          # Page files
│   │   └── home.tsx    # Main page
│   ├── components/     # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── ReportForm.tsx
│   │   ├── GlobalReach.tsx
│   │   ├── About.tsx
│   │   ├── History.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Pricing.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── config.ts       # API credentials (EmailJS, PayPal, Polar)
│   └── main.tsx
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
└── tailwind.config.ts  # Tailwind CSS configuration

```

### Configuration

Edit `client/src/config.ts` to add:
1. **EmailJS Credentials** (for contact forms)
2. **PayPal Client ID** (for payments)
3. **Polar API Key** (optional payment provider)

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

### Production Build
```bash
npm run build
# Output will be in dist/ folder
```

### Support
For issues, check:
1. Console errors (F12 → Console tab)
2. Network requests (F12 → Network tab)
3. Ensure all dependencies are installed: `npm install`

---

**Happy coding!** 🚀
