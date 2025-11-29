import { useState } from 'react'
import { TrendingUp, Zap, MapPin, Clock, DollarSign, Star } from 'lucide-react'
import { mockGigs, mockSchedule, mockReputation, mockPlatforms } from '@shared/data/mockData'
import { useToast } from '@shared/hooks/useToast'

const MarketplacePage = () => {
  const { showToast, ToastContainer } = useToast()
  const [acceptedGigs, setAcceptedGigs] = useState<string[]>([])
  const [loadingGig, setLoadingGig] = useState<string | null>(null)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const formatTime = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
  }

  const getPlatformInfo = (platformId: string) => {
    return mockPlatforms.find(p => p.id === platformId)
  }

  const handleAcceptGig = async (gigId: string, gigTitle: string) => {
    setLoadingGig(gigId)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setAcceptedGigs(prev => [...prev, gigId])
    setLoadingGig(null)
    showToast(`Gig "${gigTitle}" berhasil diterima!`, 'success')
  }

  return (
    <div className="space-y-8">
      <ToastContainer />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Universal Gig Marketplace</h1>
          <p className="text-dark-600">LAYER 1: The Engine - Maksimalkan penghasilan kamu di semua platform</p>
        </div>
      </div>

      {/* Reputation Score */}
      <div className="card bg-gradient-to-r from-primary-600/10 to-primary-800/10 border-primary-600/30">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-dark-700 mb-1">Reputasi Cross-Platform</h3>
            <div className="flex items-center space-x-4">
              <div className="text-5xl font-bold text-primary-500">{mockReputation.overallScore}</div>
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  <Star className="w-5 h-5 text-warning fill-warning" />
                  <span className="font-bold">{mockReputation.platformScores.gojek.rating}</span>
                  <span className="text-dark-600 text-sm">rating rata-rata</span>
                </div>
                <p className="text-sm text-dark-600">{mockReputation.totalGigs.toLocaleString()} gigs selesai</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            {mockReputation.badges.map((badge) => (
              <div key={badge.name} className="text-center p-3 bg-dark-100 rounded-lg border border-dark-200">
                <div className="text-3xl mb-1">{badge.icon}</div>
                <p className="text-xs font-semibold">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Optimized Schedule */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <Zap className="w-6 h-6 text-warning mr-2" />
              Jadwal Optimal AI untuk Hari Ini
            </h2>
            <p className="text-dark-600 mt-1">
              Proyeksi: {formatCurrency(mockSchedule.projectedEarnings)} dalam {mockSchedule.projectedHours} jam
              <span className="ml-2 text-success font-semibold">({mockSchedule.efficiency}% efisiensi)</span>
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {mockSchedule.optimized.map((item, index) => {
            const platform = getPlatformInfo(item.platform)
            return (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-dark-50 border border-dark-200 rounded-lg hover:border-primary-500 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{platform?.icon}</div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock className="w-4 h-4 text-dark-600" />
                      <span className="font-bold">{item.time}</span>
                    </div>
                    <p className="text-sm font-semibold">{item.activity}</p>
                    <p className="text-xs text-dark-600 mt-1">{item.reason}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-success">{formatCurrency(item.estimatedEarnings)}</p>
                  <p className="text-xs text-dark-600">estimasi</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Available Gigs */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Gigs Tersedia Sekarang</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {mockGigs.filter(g => g.status === 'available').map((gig) => {
            const platform = getPlatformInfo(gig.platform)
            const isAccepted = acceptedGigs.includes(gig.id)
            const isLoading = loadingGig === gig.id

            return (
              <div
                key={gig.id}
                className={`p-5 border rounded-lg transition-all ${
                  isAccepted
                    ? 'bg-success/10 border-success'
                    : 'bg-dark-50 border-dark-200 hover:border-primary-500 cursor-pointer'
                } group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{platform?.icon}</span>
                    <span className="text-sm font-semibold text-dark-600">{platform?.name}</span>
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    isAccepted
                      ? 'bg-success/20 text-success'
                      : 'bg-success/20 text-success'
                  }`}>
                    {isAccepted ? 'ACCEPTED' : 'AVAILABLE'}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-2 group-hover:text-primary-500 transition-colors">
                  {gig.title}
                </h3>

                <div className="space-y-2 mb-4">
                  {gig.location && (
                    <div className="flex items-center text-sm text-dark-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {gig.location}
                    </div>
                  )}
                  {gig.distance && (
                    <div className="flex items-center text-sm text-dark-600">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {gig.distance} • {gig.duration} menit
                    </div>
                  )}
                  {gig.scheduledTime && (
                    <div className="flex items-center text-sm text-dark-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Mulai {formatTime(gig.scheduledTime)}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-dark-200">
                  <div className="flex items-center text-xl font-bold text-success">
                    <DollarSign className="w-5 h-5" />
                    {formatCurrency(gig.earnings)}
                  </div>
                  <button
                    className={`text-sm py-1.5 px-4 rounded-lg font-semibold transition-all ${
                      isAccepted
                        ? 'bg-dark-300 text-dark-600 cursor-not-allowed'
                        : isLoading
                        ? 'bg-primary-400 text-white cursor-wait'
                        : 'bg-primary-600 hover:bg-primary-700 text-white'
                    }`}
                    onClick={() => !isAccepted && !isLoading && handleAcceptGig(gig.id, gig.title)}
                    disabled={isAccepted || isLoading}
                  >
                    {isLoading ? 'Processing...' : isAccepted ? 'Accepted' : 'Ambil Gig'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Gigs in Progress */}
      {mockGigs.some(g => g.status === 'in-progress') && (
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Gigs Sedang Dikerjakan</h2>
          <div className="space-y-4">
            {mockGigs.filter(g => g.status === 'in-progress').map((gig) => {
              const platform = getPlatformInfo(gig.platform)
              return (
                <div
                  key={gig.id}
                  className="p-5 bg-primary-500/10 border border-primary-500 rounded-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{platform?.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg">{gig.title}</h3>
                        <p className="text-sm text-dark-600">{platform?.name}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
                      IN PROGRESS
                    </span>
                  </div>

                  {gig.description && (
                    <p className="text-sm text-dark-600 mb-3">{gig.description}</p>
                  )}

                  {gig.skills && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {gig.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-dark-200 text-dark-700 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-primary-500/30">
                    <div className="text-xl font-bold text-success">
                      {formatCurrency(gig.earnings)}
                    </div>
                    {gig.deadline && (
                      <div className="text-sm text-dark-600">
                        Deadline: {new Date(gig.deadline).toLocaleDateString('id-ID')}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default MarketplacePage
