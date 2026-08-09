import {
  Mail,
  MapPin,
  Lock,
  Bell,
  Shield,
  User,
  LogOut,
  Save,
  Eye,
  EyeOff,
} from 'lucide-react'
import { useState } from 'react'
import { Badge, Button, Card, CardBody, CardHeader, Input, TextArea } from '../../components/ui'

export function ProfilePage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Example profile data - frontend only
  const profileData = {
    fullName: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    role: 'Donor',
    location: 'Koramangala, Bengaluru',
    memberSince: '18 Aug 2024',
    status: 'Active',
    mobile: '+91 98765 43210',
    city: 'Bengaluru',
    state: 'Karnataka',
    pinCode: '560034',
  }

  return (
    <div className="space-y-8 lg:space-y-10">
      {/* Profile Overview */}
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
          <div className="flex size-24 items-center justify-center rounded-full bg-emerald-100 text-3xl font-semibold text-emerald-700">
            PS
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Example UI value
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
                {profileData.fullName}
              </h1>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Mail className="size-5 text-emerald-600" aria-hidden="true" />
                <span className="text-sm text-slate-600">{profileData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-emerald-600" aria-hidden="true" />
                <span className="text-sm text-slate-600">{profileData.location}</span>
              </div>
              <Badge variant="success">{profileData.role}</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-2 xl:gap-10">
        {/* Personal Information */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <User className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Section
                </p>
                <h2 className="text-xl font-semibold text-slate-900">Personal Information</h2>
              </div>
            </div>
          </CardHeader>
          <CardBody className="space-y-4">
            <p className="text-sm text-slate-600">
              This form is a visual frontend example. Changes will not be saved.
            </p>
            <div>
              <label className="block text-sm font-medium text-slate-700">Full Name</label>
              <Input
                type="text"
                defaultValue={profileData.fullName}
                className="mt-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email Address</label>
              <Input
                type="email"
                defaultValue={profileData.email}
                className="mt-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Mobile Number</label>
              <Input
                type="tel"
                defaultValue={profileData.mobile}
                className="mt-2"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">City</label>
                <Input
                  type="text"
                  defaultValue={profileData.city}
                  className="mt-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">State</label>
                <Input
                  type="text"
                  defaultValue={profileData.state}
                  className="mt-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">PIN Code</label>
              <Input
                type="text"
                defaultValue={profileData.pinCode}
                className="mt-2"
              />
            </div>
            <Button className="w-full sm:w-auto">
              <Save className="size-4" aria-hidden="true" />
              Save Changes
            </Button>
          </CardBody>
        </Card>

        {/* Address */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <MapPin className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Section
                </p>
                <h2 className="text-xl font-semibold text-slate-900">Address</h2>
              </div>
            </div>
          </CardHeader>
          <CardBody className="space-y-4">
            <p className="text-sm leading-6 text-slate-600">
              This address may eventually be used to coordinate donation pickups. All fields shown here
              are frontend-only example content.
            </p>
            <div>
              <label className="block text-sm font-medium text-slate-700">Street Address</label>
              <TextArea
                defaultValue="123 Donation Lane, Apartment 5B"
                className="mt-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Landmark</label>
              <Input
                type="text"
                defaultValue="Near Green Park Shopping Center"
                className="mt-2"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">City</label>
                <Input
                  type="text"
                  defaultValue="Bengaluru"
                  className="mt-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">State</label>
                <Input
                  type="text"
                  defaultValue="Karnataka"
                  className="mt-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">PIN Code</label>
              <Input
                type="text"
                defaultValue="560034"
                className="mt-2"
              />
            </div>
            <Button className="w-full sm:w-auto">
              <Save className="size-4" aria-hidden="true" />
              Update Address
            </Button>
          </CardBody>
        </Card>

        {/* Account Security */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Lock className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Section
                </p>
                <h2 className="text-xl font-semibold text-slate-900">Account Security</h2>
              </div>
            </div>
          </CardHeader>
          <CardBody className="space-y-4">
            <p className="text-sm text-slate-600">
              Password change is a visual form only. No validation or submission occurs.
            </p>
            <div>
              <label className="block text-sm font-medium text-slate-700">Current Password</label>
              <div className="relative mt-2">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 pr-10 text-sm font-normal transition-colors placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Enter current password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="size-4" aria-hidden="true" />
                  ) : (
                    <Eye className="size-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">New Password</label>
              <div className="relative mt-2">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 pr-10 text-sm font-normal transition-colors placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Enter new password"
                />
                <button
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  aria-label={showNewPassword ? 'Hide password' : 'Show password'}
                >
                  {showNewPassword ? (
                    <EyeOff className="size-4" aria-hidden="true" />
                  ) : (
                    <Eye className="size-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Confirm New Password</label>
              <div className="relative mt-2">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 pr-10 text-sm font-normal transition-colors placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Confirm new password"
                />
                <button
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="size-4" aria-hidden="true" />
                  ) : (
                    <Eye className="size-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
            <Button className="w-full sm:w-auto">
              <Lock className="size-4" aria-hidden="true" />
              Change Password
            </Button>
          </CardBody>
        </Card>

        {/* Preferences */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Bell className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Section
                </p>
                <h2 className="text-xl font-semibold text-slate-900">Preferences</h2>
              </div>
            </div>
          </CardHeader>
          <CardBody className="space-y-5">
            <p className="text-sm text-slate-600">
              These preference controls are visual examples only and do not trigger backend actions.
            </p>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                defaultChecked
                className="size-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <div>
                <p className="font-medium text-slate-900 group-hover:text-slate-700">
                  Email Notifications
                </p>
                <p className="text-sm text-slate-500">
                  Receive emails about important platform updates
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                defaultChecked
                className="size-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <div>
                <p className="font-medium text-slate-900 group-hover:text-slate-700">
                  Pickup Updates
                </p>
                <p className="text-sm text-slate-500">
                  Get notifications when pickups are scheduled or updated
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                defaultChecked
                className="size-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <div>
                <p className="font-medium text-slate-900 group-hover:text-slate-700">
                  Donation Status Updates
                </p>
                <p className="text-sm text-slate-500">
                  Track status changes on your donations
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="size-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <div>
                <p className="font-medium text-slate-900 group-hover:text-slate-700">
                  Platform Announcements
                </p>
                <p className="text-sm text-slate-500">
                  Receive newsletters and promotional content from ClosetToCare
                </p>
              </div>
            </label>
            <Button className="w-full sm:w-auto" variant="outline">
              <Save className="size-4" aria-hidden="true" />
              Save Preferences
            </Button>
          </CardBody>
        </Card>

        {/* Account Information */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Shield className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Information
                </p>
                <h2 className="text-xl font-semibold text-slate-900">Account Information</h2>
              </div>
            </div>
          </CardHeader>
          <CardBody className="space-y-5">
            <p className="text-sm text-slate-600">
              This account metadata is frontend-only example content and does not reflect real platform data.
            </p>
            <div className="space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Account Role</span>
                <Badge variant="success">{profileData.role}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Account Status</span>
                <Badge variant="success">{profileData.status}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Member Since</span>
                <span className="text-sm font-medium text-slate-900">{profileData.memberSince}</span>
              </div>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-amber-900">
                To manage your account, contact the ClosetToCare support team. Account deletion and role
                changes are not available through this interface.
              </p>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Logout Action */}
      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-semibold text-slate-900">Sign Out</h3>
            <p className="mt-1 text-sm text-slate-600">
              End your current session and return to the login page.
            </p>
          </div>
          <Button variant="outline">
            <LogOut className="size-4" aria-hidden="true" />
            Sign Out
          </Button>
        </div>
      </section>
    </div>
  )
}
