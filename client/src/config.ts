// =====================================
// CONFIGURATION - Easy Setup
// =====================================
// Add your credentials below. Leave as is and update later.

export const config = {
  // EmailJS Configuration
  emailjs: {
    publicKey: "W5UGbJLqqTooUZHBV",
    serviceId: "service_ymndajk",
    reportTemplateId: "template_jnkxpve",
    paymentTemplateId: "template_payment_receive",
    contactTemplateId: "YOUR_CONTACT_TEMPLATE_ID",
    contactEmail: "autocredinspection@gmail.com"
  },

  // PayPal Configuration
  paypal: {
    clientId: "YOUR_PAYPAL_CLIENT_ID",
    currency: "USD"
  },

  // Polar Configuration
  polar: {
    publicKey: "YOUR_POLAR_PUBLIC_KEY",
    accessToken: "YOUR_POLAR_ACCESS_TOKEN"
  },

  // Report Price
  reportPrice: "10.00"
};

// =====================================
// HOW TO GET YOUR CREDENTIALS:
// =====================================
// 
// EMAILJS:
// 1. Go to https://www.emailjs.com/
// 2. Sign up and login
// 3. Create a new email service
// 4. Get your Public Key from Settings > API Keys
// 5. Copy your Service ID and Template ID
// 6. Update publicKey, serviceId, templateId above
//
// PAYPAL:
// 1. Go to https://developer.paypal.com/
// 2. Sign up and login
// 3. Create an app in Sandbox
// 4. Copy the Client ID
// 5. Update clientId above
//
// POLAR:
// 1. Go to https://polar.sh/
// 2. Sign up and login
// 3. Create an API token
// 4. Copy your Public Key and Access Token
// 5. Update publicKey and accessToken above
//
// =====================================
