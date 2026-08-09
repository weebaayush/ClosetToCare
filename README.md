# ClosetToCare
### A frontend donation and reuse platform connecting donors, NGOs, and administrators.

---

## 📋 Project Overview
ClosetToCare is designed to streamline the donation of clothes and household items. The platform addresses the waste and coordination problems associated with unused goods by directly connecting people who want to give with the NGOs that can distribute them to beneficiaries.

The platform provides three custom, role-based workflows:
- **Donor Experience**: Enables donors to manage active donations and organize new donation listings.
- **NGO Experience**: Enables NGO coordinators to review incoming requests, arrange pickup schedules, and track history.
- **Admin Experience**: Provides administrators with system-wide oversight of users, NGOs, and platform activities.

---

## ⚡ Project Status
- **Frontend Implementation**: 100% complete and fully verified.
- **State & Data Scope**: The application operates entirely on the frontend, using curated mock datasets to demonstrate all key workflows, status transitions, and role actions.
- **Backend Integration**: Real authentication, persistent databases, and live APIs are outside the current scope of this frontend demonstration.

---

## ✨ Features

### Public Website
- **Landing Page**: Fully responsive landing page with action-oriented CTAs.
- **How It Works**: Standard step-by-step documentation detailing the donation lifecycle.
- **About**: Profile on ClosetToCare's mission, values, and community impact.
- **404 Fallback**: Wildcard error catcher route and user-friendly fallback view.

### Authentication UI (Frontend Only)
- **Login**: Credential-entry screen allowing access into donor, NGO, or admin dashboards.
- **Register**: Registration flow for donors and NGOs.
- **Forgot Password**: Password recovery setup linked directly from the login screen.

### Donor Module
- **Dashboard**: Quick overview of donation drafts, items awaiting scheduling, and recent activity.
- **Donation Management**: Status tracking of all donation items.
- **New Donation Flow**: A 4-step wizard interface:
  1. *Items*: Input categories, item descriptions, and quantity.
  2. *Pickup Details*: Enter contact number, address, and city.
  3. *Schedule*: Choose pickup date and time slots.
  4. *Review*: Confirm details before submission.
- **Profile & Settings**: View and modify mock profile details, address, preferences, and password settings.

### NGO Module
- **Dashboard**: Overview metrics for pending requests, scheduled collections, and beneficiaries supported.
- **Incoming Requests**: Accept or decline new donation requests.
- **Pickup Management**: Coordinate scheduled, on-the-way, collected, or rescheduled pickups.
- **Collection History**: Logged list of completed historical deliveries.
- **Profile & Settings**: Profile page displaying NGO particulars and settings.

### Admin Module
- **Dashboard**: Platform coordination statistics, registered counts, and audit activity feeds.
- **NGO Management**: Manage and review NGO verifications.
- **Donation Management**: Centralized oversight of all platform donation statuses.
- **User Management**: Direct moderation of registered donor, NGO, and administrator accounts.
- **Profile & Settings**: Personal administrator settings panel.

---

## 🏷️ Donation & Pickup Status Model
The UI implements a cohesive terminology structure to model the lifecycle of donations and pickups:

| Lifecycle Category | Supported Statuses |
| :--- | :--- |
| **Donation Lifecycle** | `Started` \| `Coordinating` \| `Received` \| `Completed` |
| **Pickup Lifecycle** | `Scheduled` \| `On the Way` \| `Collected` \| `Reschedule Required` |
| **NGO Verification** | `Verified` \| `Pending Review` \| `Suspended` |
| **User Account Status** | `Active` \| `Pending` \| `Suspended` |

---

## 🧰 Tech Stack
- **Core Library**: React 19 (v19.2.6)
- **Programming Language**: TypeScript (v6.0.2)
- **Build Tool**: Vite 8 (v8.0.12)
- **Styling Framework**: Tailwind CSS 4 (v4.3.1)
- **Routing Engine**: React Router 7 (v7.18.1)
- **Icons**: lucide-react (v1.25.0)
- **Code Linter**: ESLint (v10.3.0)

---

## 📁 Project Folder Structure
```text
src/
├── App.tsx
├── index.css
├── main.tsx
├── components/
│   ├── common/
│   │   ├── PlaceholderPage.tsx
│   │   └── index.ts
│   ├── layout/
│   │   ├── Brand.tsx
│   │   ├── PublicFooter.tsx
│   │   ├── PublicNav.tsx
│   │   └── index.ts
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── TextArea.tsx
│       └── index.ts
├── layouts/
│   ├── AppLayout.tsx
│   ├── AuthLayout.tsx
│   ├── DashboardLayout.tsx
│   └── PublicLayout.tsx
├── pages/
│   ├── admin/
│   ├── auth/
│   ├── donor/
│   ├── ngo/
│   ├── profile/
│   └── public/
└── routes/
    ├── appRoutes.tsx
    ├── protectedRoute.tsx
    └── routePaths.ts
```

---

## 🧭 Routes Overview

### Public Routes
- `/` — Home / Landing Page
- `/how-it-works` — Platform Guide
- `/about` — About ClosetToCare
- `*` — 404 Fallback page

### Authentication Routes
- `/auth/login` — Sign In Page
- `/auth/register` — Account Registration
- `/auth/forgot-password` — Password Recovery

### Donor Dashboard Routes
- `/donor/dashboard` — Donor Overview Panel
- `/donor/donations` — Donation History List
- `/donor/donations/new` — 4-Step Donation Flow
- `/donor/profile` — Donor Profile Settings

### NGO Dashboard Routes
- `/ngo/dashboard` — NGO Workspace Overview
- `/ngo/donations` — Incoming Requests Review
- `/ngo/pickups` — Pickup Coordination List
- `/ngo/history` — Collection Delivery Records
- `/ngo/profile` — NGO Profile Settings

### Admin Dashboard Routes
- `/admin/dashboard` — Main Administration Panel
- `/admin/ngos` — NGO Verification Management
- `/admin/donations` — Platform Donation Oversight
- `/admin/users` — User Account Moderation
- `/admin/profile` — Admin Profile Settings

---

## 🚀 Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/weebaayush/ClosetToCare.git
   cd ClosetToCare
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Launch the development server:
   ```bash
   npm run dev
   ```

### Quality Verification
- Run code quality linter checks:
  ```bash
  npm run lint
  ```
- Build production assets:
  ```bash
  npm run build
  ```

---

## 🧪 Available Scripts
- `npm run dev` — Launches the Vite local dev server.
- `npm run build` — Compiles and builds production-optimized assets.
- `npm run lint` — Checks codebase consistency and style patterns with ESLint.
- `npm run preview` — Previews production build results locally.

---

## 📱 Responsive Design
The platform provides native adaptive support across mobile, tablet, and desktop viewports. Dashboard headers implement a responsive mobile navigation drawer that collapses behind an accessible hamburger menu icon on smaller screens, keeping interaction clear and eliminating horizontal scrollbar breaks.

---

## ⚙️ Frontend-Only Architecture Note
All interactions, inputs, and buttons are designed for frontend demonstration. Form submissions, account updates, preference modifications, and status changes are UI-only and do not persist to a database. The modular structure of routing, layout wrappers, and view pages makes it easy to replace mock data states with real API data calls in the future.

---

## 🖼️ Screenshots
*(Screenshots section can be populated as visual assets are generated)*
- **Public Home Placeholder**
- **Donor Dashboard Placeholder**
- **New Donation Flow Placeholder**
- **NGO Dashboard Placeholder**
- **Admin Dashboard Placeholder**

---

## 🔮 Future Scope
- **Real User Authentication**: Implement user token generation and route protection.
- **Backend API Integration**: Connect to a live backend endpoint.
- **Persistent Storage**: Save donor, NGO, and administrator listings to a relational database.
- **Map & GPS Integration**: Real-time volunteer coordinate plotting on pickup maps.
- **Notification Services**: Trigger SMS/Email notifications on coordination events.
