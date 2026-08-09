import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../layouts/AppLayout'
import { AuthLayout } from '../layouts/AuthLayout'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { PublicLayout } from '../layouts/PublicLayout'
import {
  AdminDashboardPage,
  DonationOversightPage,
  NgoManagementPage,
  UserManagementPage,
} from '../pages/admin'
import { ForgotPasswordPage, LoginPage, RegisterPage } from '../pages/auth'
import {
  DonationManagementPage,
  DonorDashboardPage,
  NewDonationPage,
} from '../pages/donor'
import { CollectionHistoryPage, DonationRequestsPage, NgoDashboardPage, PickupManagementPage } from '../pages/ngo'
import { ProfilePage } from '../pages/profile'
import { AboutPage, HomePage, HowItWorksPage, NotFoundPage } from '../pages/public'
import { ProtectedRoute } from './protectedRoute'
import { ROUTE_PATHS } from './routePaths'

const donorNavItems = [
  { label: 'Dashboard', to: ROUTE_PATHS.donor.dashboard },
  { label: 'Donations', to: ROUTE_PATHS.donor.donations },
  { label: 'New Donation', to: ROUTE_PATHS.donor.newDonation },
  { label: 'Profile', to: ROUTE_PATHS.donor.profile },
]

const ngoNavItems = [
  { label: 'Dashboard', to: ROUTE_PATHS.ngo.dashboard },
  { label: 'Incoming Requests', to: ROUTE_PATHS.ngo.donations },
  { label: 'Pickup Management', to: ROUTE_PATHS.ngo.pickups },
  { label: 'Collection History', to: ROUTE_PATHS.ngo.history },
  { label: 'Profile', to: ROUTE_PATHS.ngo.profile },
]

const adminNavItems = [
  { label: 'Dashboard', to: ROUTE_PATHS.admin.dashboard },
  { label: 'NGO Management', to: ROUTE_PATHS.admin.ngos },
  { label: 'Donation Management', to: ROUTE_PATHS.admin.donations },
  { label: 'User Management', to: ROUTE_PATHS.admin.users },
  { label: 'Profile', to: ROUTE_PATHS.admin.profile },
]

export const appRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          { path: ROUTE_PATHS.home, element: <HomePage /> },
          { path: ROUTE_PATHS.howItWorks, element: <HowItWorksPage /> },
          { path: ROUTE_PATHS.about, element: <AboutPage /> },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: ROUTE_PATHS.auth.login, element: <LoginPage /> },
          { path: ROUTE_PATHS.auth.register, element: <RegisterPage /> },
          { path: ROUTE_PATHS.auth.forgotPassword, element: <ForgotPasswordPage /> },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <DashboardLayout sectionLabel="Donor" navItems={donorNavItems} />,
            children: [
              { path: ROUTE_PATHS.donor.dashboard, element: <DonorDashboardPage /> },
              { path: ROUTE_PATHS.donor.donations, element: <DonationManagementPage /> },
              { path: ROUTE_PATHS.donor.newDonation, element: <NewDonationPage /> },
              { path: ROUTE_PATHS.donor.profile, element: <ProfilePage /> },
            ],
          },
          {
            element: <DashboardLayout sectionLabel="NGO" navItems={ngoNavItems} />,
            children: [
              { path: ROUTE_PATHS.ngo.dashboard, element: <NgoDashboardPage /> },
              { path: ROUTE_PATHS.ngo.donations, element: <DonationRequestsPage /> },
              { path: ROUTE_PATHS.ngo.pickups, element: <PickupManagementPage /> },
              { path: ROUTE_PATHS.ngo.history, element: <CollectionHistoryPage /> },
              { path: ROUTE_PATHS.ngo.profile, element: <ProfilePage /> },
            ],
          },
          {
            element: <DashboardLayout sectionLabel="Admin" navItems={adminNavItems} />,
            children: [
              { path: ROUTE_PATHS.admin.dashboard, element: <AdminDashboardPage /> },
              { path: ROUTE_PATHS.admin.ngos, element: <NgoManagementPage /> },
              { path: ROUTE_PATHS.admin.donations, element: <DonationOversightPage /> },
              { path: ROUTE_PATHS.admin.users, element: <UserManagementPage /> },
              { path: ROUTE_PATHS.admin.profile, element: <ProfilePage /> },
            ],
          },
        ],
      },
    ],
  },
])
