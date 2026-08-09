import { ROUTE_PATHS } from '../../routes/routePaths'

/** Primary public navigation links shared by the header and footer. */
export const publicNavLinks = [
  { label: 'Home', to: ROUTE_PATHS.home },
  { label: 'How It Works', to: ROUTE_PATHS.howItWorks },
  { label: 'About', to: ROUTE_PATHS.about },
] as const
