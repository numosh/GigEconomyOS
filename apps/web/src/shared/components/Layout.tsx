import { Outlet, Link, useLocation } from 'react-router-dom'
import { LayoutGrid, Shield, Users } from 'lucide-react'

const Layout = () => {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-dark-50 text-dark-900">
      {/* Top Navigation */}
      <header className="bg-dark-100 border-b border-dark-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">GIGECONOMY OS</h1>
                <p className="text-xs text-dark-500">Your Economic Command Center</p>
              </div>
            </Link>

            <nav className="flex items-center space-x-1">
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark-100 border-t border-dark-200 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-dark-500 text-sm">
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

export default Layout
