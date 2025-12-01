import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { LayoutGrid, Shield, Users, Menu, X } from 'lucide-react'

const Layout = () => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-dark-50 text-dark-900">
      {/* Top Navigation */}
      <header className="bg-dark-100 border-b border-dark-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3" onClick={closeMobileMenu}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gradient">GIGECONOMY OS</h1>
                <p className="text-xs text-dark-500">Your Economic Command Center</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-bold text-gradient">GEO</h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/marketplace"
                icon={<LayoutGrid className="w-5 h-5" />}
                label="Marketplace"
                active={isActive('/marketplace')}
              />
              <NavLink
                to="/support"
                icon={<Shield className="w-5 h-5" />}
                label="Support"
                active={isActive('/support')}
              />
              <NavLink
                to="/collective"
                icon={<Users className="w-5 h-5" />}
                label="Collective"
                active={isActive('/collective')}
              />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-dark-200 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-dark-700" />
              ) : (
                <Menu className="w-6 h-6 text-dark-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2">
              <MobileNavLink
                to="/marketplace"
                icon={<LayoutGrid className="w-5 h-5" />}
                label="Marketplace"
                active={isActive('/marketplace')}
                onClick={closeMobileMenu}
              />
              <MobileNavLink
                to="/support"
                icon={<Shield className="w-5 h-5" />}
                label="Support"
                active={isActive('/support')}
                onClick={closeMobileMenu}
              />
              <MobileNavLink
                to="/collective"
                icon={<Users className="w-5 h-5" />}
                label="Collective"
                active={isActive('/collective')}
                onClick={closeMobileMenu}
              />
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark-100 border-t border-dark-200 mt-12 md:mt-20">
        <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="text-center text-dark-500 text-xs md:text-sm">
            <p>Built with purpose. Coded with urgency. Deployed for survival.</p>
            <p className="mt-2">© 2024 GIGECONOMY OS - The Operating System for the Post-Employment Era</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const NavLink = ({ to, icon, label, active }: { to: string; icon: React.ReactNode; label: string; active: boolean }) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
      active
        ? 'bg-primary-600 text-white'
        : 'text-dark-600 hover:bg-dark-200 hover:text-dark-900'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </Link>
)

const MobileNavLink = ({
  to,
  icon,
  label,
  active,
  onClick
}: {
  to: string
  icon: React.ReactNode
  label: string
  active: boolean
  onClick: () => void
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
      active
        ? 'bg-primary-600 text-white'
        : 'text-dark-700 hover:bg-dark-200'
    }`}
  >
    {icon}
    <span className="font-semibold text-base">{label}</span>
  </Link>
)

export default Layout
