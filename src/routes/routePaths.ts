export const ROUTE_PATHS = {
  home: '/',
  howItWorks: '/how-it-works',
  about: '/about',
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
  },
  donor: {
    dashboard: '/donor/dashboard',
    donations: '/donor/donations',
    newDonation: '/donor/donations/new',
    profile: '/donor/profile',
  },
  ngo: {
    dashboard: '/ngo/dashboard',
    donations: '/ngo/donations',
    pickups: '/ngo/pickups',
    history: '/ngo/history',
    profile: '/ngo/profile',
  },
  admin: {
    dashboard: '/admin/dashboard',
    ngos: '/admin/ngos',
    donations: '/admin/donations',
    users: '/admin/users',
    profile: '/admin/profile',
  },
} as const
