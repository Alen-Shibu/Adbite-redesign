# Adbite — Indoor Brand Marketing Platform

A full-stack redesign of [adbite.in](https://info.adbite.in/), a Kerala-based indoor advertising platform. The project includes a public-facing marketing website and a protected admin CMS for managing district-level venue data across Kerala.

**Live:** [adbite.vercel.app](https://adbite.vercel.app) &nbsp;|&nbsp; **Admin Portal:** `/admin`

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, Vite, CSS Modules |
| Backend | Node.js, Express 5 |
| Database | MongoDB, Mongoose |
| Auth | JWT, bcryptjs, HTTP-only cookies |
| Map | Leaflet.js + Esri satellite tiles |
| Deployment | Vercel (frontend), Render (backend) |

---

## Features

### Public Site
- Responsive marketing site with hero, services, locations, and contact sections
- Leaflet.js interactive map — clicking a venue flies the camera to its coordinates with a HUD overlay showing the active node
- District accordion list synced to live MongoDB data; venue selection updates map pins in real time
- Smooth-scroll bottom tab bar navigation on mobile

### Admin CMS (`/admin-panel`)
- JWT authentication via HTTP-only cookies; `ProtectedRoute` and `PublicRoute` guards handle redirects
- Full CRUD for districts and their nested venues (name, lat/lng)
- Search/filter, accordion expand, create/edit/delete modals
- Responsive: table view on desktop, card list on mobile

---

## Project Structure

```
adbite/
├── backend/
│   └── src/
│       ├── config/       # MongoDB connection
│       ├── controllers/  # auth, location
│       ├── middlewares/  # JWT protect
│       ├── models/       # Admin, Location (with nested Venue)
│       ├── routes/
│       └── seed.js       # Seeds admin credentials from .env
└── frontend/
    └── src/
        ├── api/          # Axios instance
        ├── components/
        │   └── adminComponents/   # CMS, Navbar, modals
        ├── pages/        # HomePage, LoginPage, AdminPage
        ├── sections/     # Hero, Services, Location, Contact
        └── styles/
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB URI

### Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_password
```

```bash
npm run dev          # start dev server
node src/seed.js     # seed admin credentials (run once)
```

### Frontend

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

```bash
npm run dev
```

---

## API Reference

| Method | Route | Auth | Description |
|---|---|---|---|
| `POST` | `/api/auth/login` | — | Admin login, sets JWT cookie |
| `GET` | `/api/auth/verify` | ✓ | Verify session |
| `GET` | `/api/locations` | — | Get all districts + venues |
| `POST` | `/api/locations` | ✓ | Create district |
| `PUT` | `/api/locations/:id` | ✓ | Update district |
| `DELETE` | `/api/locations/:id` | ✓ | Delete district |

---

## Notes

The backend is hosted on Render's free tier. Cold starts can take up to 45 seconds — the loading screen on the admin panel accounts for this with a progress indicator and elapsed timer.

---

*Built by [Alen Shibu](https://alenshibu.vercel.app)*