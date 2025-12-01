import { TrendingUp, DollarSign, Clock, Target, User } from 'lucide-react'
import { mockStats, mockWorker, mockPlatforms } from '@shared/data/mockData'

const Dashboard = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-8">
      {/* Hero Section with Worker Info */}
      <section className="text-center py-6 md:py-8">
        <div className="flex items-center justify-center mb-4 space-x-2 md:space-x-4">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          <div className="text-left">
            <h2 className="text-xl md:text-2xl font-bold">Selamat datang, {mockWorker.name}!</h2>
            <p className="text-sm md:text-base text-dark-600">{mockWorker.location}</p>
          </div>
        </div>
        <p className="text-sm md:text-lg text-dark-600 max-w-3xl mx-auto px-4">
          Command center kamu untuk mengoptimalkan penghasilan, melindungi diri, dan membangun kekuatan kolektif.
        </p>
      </section>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<DollarSign className="w-6 h-6" />}
          label="Penghasilan Hari Ini"
          value={formatCurrency(mockStats.todayEarnings)}
          change="+12.5%"
          positive={true}
        />
        <StatCard
          icon={<Clock className="w-6 h-6" />}
          label="Jam Kerja Hari Ini"
          value={`${mockStats.todayHours}h`}
          change="+1.5h"
          positive={true}
        />
        <StatCard
          icon={<Target className="w-6 h-6" />}
          label="Gigs Aktif"
          value={mockStats.activeGigs.toString()}
          change="3 available"
          positive={true}
        />
        <StatCard
          icon={<TrendingUp className="w-6 h-6" />}
          label="Efisiensi"
          value={`${mockStats.efficiency}%`}
          change="vs target 80%"
          positive={true}
        />
      </div>

      {/* Platform Earnings Breakdown */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Penghasilan per Platform (Hari Ini)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="p-4 bg-dark-50 border border-dark-200 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{platform.icon}</span>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    platform.isConnected
                      ? 'bg-success/20 text-success'
                      : 'bg-dark-300 text-dark-600'
                  }`}
                >
                  {platform.isConnected ? 'Connected' : 'Disconnected'}
                </span>
              </div>
              <h3 className="font-bold mb-1">{platform.name}</h3>
              <p className="text-xl font-bold text-primary-500">
                {formatCurrency(platform.earnings.today)}
              </p>
              <p className="text-xs text-dark-600 mt-1">
                Bulan ini: {formatCurrency(platform.earnings.thisMonth)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Three Layers Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
        <LayerCard
          layer="1"
          title="Universal Marketplace"
          description="Optimize your gig schedule across all platforms. Maximize earnings with AI-powered scheduling."
          icon="🚀"
          link="/marketplace"
        />
        <LayerCard
          layer="2"
          title="Support System"
          description="Protect yourself with micro-insurance, instant pay, and financial planning tools."
          icon="🛡️"
          link="/support"
        />
        <LayerCard
          layer="3"
          title="Collective Power"
          description="Join forces with other workers. Transparent rates, digital union, legal defense."
          icon="✊"
          link="/collective"
        />
      </div>
    </div>
  )
}

const StatCard = ({ icon, label, value, change, positive }: {
  icon: React.ReactNode
  label: string
  value: string
  change: string
  positive: boolean
}) => (
  <div className="card">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-dark-200 rounded-lg text-primary-500">{icon}</div>
      <span className={`text-sm font-medium ${positive ? 'text-success' : 'text-danger'}`}>
        {change}
      </span>
    </div>
    <h3 className="text-3xl font-bold mb-1">{value}</h3>
    <p className="text-dark-600 text-sm">{label}</p>
  </div>
)

const LayerCard = ({ layer, title, description, icon, link }: {
  layer: string
  title: string
  description: string
  icon: string
  link: string
}) => (
  <a href={link} className="card hover:border-primary-600 transition-all group cursor-pointer">
    <div className="flex items-start space-x-4">
      <div className="text-4xl">{icon}</div>
      <div className="flex-1">
        <div className="text-xs text-primary-500 font-semibold mb-1">LAYER {layer}</div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        <p className="text-dark-600 text-sm">{description}</p>
      </div>
    </div>
  </a>
)

export default Dashboard
