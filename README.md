# Shri Pant Krupa Paper Board — Website

Full B2B company website with admin dashboard for Shri Pant Krupa Paper Board, Kolhapur.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Routing | React Router v6 |
| Styling | Bootstrap 5 + Custom CSS |
| Icons | React Icons (Feather) |
| Database | Firebase Firestore |
| Images | Cloudinary |
| Fonts | Playfair Display + DM Sans |

---

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project: `pant-krupa-paperboard`
3. Enable **Firestore Database** (Start in test mode)
4. Add a **Web App** and copy your config
5. Open `src/services/firebase.js` and replace the config:

```js
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 3. Configure Cloudinary

1. Sign up at [Cloudinary](https://cloudinary.com)
2. Create folders:
   - `pant-krupa/products`
   - `pant-krupa/gallery`
   - `pant-krupa/blog`
   - `pant-krupa/banners`
3. Upload images and use the URLs in your admin panel

### 4. Update WhatsApp Number

In `src/components/WhatsAppButton.jsx`, replace:
```js
const WA_NUMBER = '919876543210'; // Replace with actual number
```

In `src/sections/IndustriesSection.jsx` (CTA section):
```js
const WA_NUMBER = '919876543210'; // Replace with actual number
```

### 5. Run Development Server
```bash
npm run dev
```

### 6. Build for Production
```bash
npm run build
```

---

## Pages & Routes

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Products | `/products` |
| Product Detail | `/products/:slug` |
| Industries | `/industries` |
| Blog | `/blog` |
| Blog Detail | `/blog/:slug` |
| Gallery | `/gallery` |
| Contact | `/contact` |
| **Admin Dashboard** | `/admin` |
| Admin Categories | `/admin/categories` |
| Admin Products | `/admin/products` |
| Admin Blog | `/admin/blog` |
| Admin Gallery | `/admin/gallery` |
| Admin Dealers | `/admin/dealers` |
| Admin Enquiries | `/admin/enquiries` |

---

## Firebase Collections

The following Firestore collections are used:

- `categories` — Product categories
- `products` — Product listings
- `blogs` — Blog posts
- `gallery` — Gallery images
- `dealers` — Dealer/distributor network
- `enquiries` — Website contact form submissions

---

## Deployment (Vercel)

1. Push code to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Deploy — Vite is auto-detected

---

## Company Info

**Shri Pant Krupa Paper Board**  
GAT NO 3, A-2, A/P Halsavade  
Kolhapur, Maharashtra – 416202  

Proprietor: **Omkar Shrikant Patil**  
Business: Paper Board Manufacturer / Trader

---

## Admin Panel Access

Navigate to `/admin` to access the admin dashboard.

> **Note**: For production, add Firebase Authentication to protect the admin panel.

---

## Future Features (Roadmap)

- Dealer login portal
- Quotation generator
- Inventory management system
- Order management
- Price management module
