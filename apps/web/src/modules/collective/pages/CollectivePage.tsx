import { useState } from 'react'
import { Users, TrendingUp, Scale, TrendingDown, Minus, CheckCircle, Vote, AlertCircle, DollarSign } from 'lucide-react'
import { mockUnions, mockCampaigns, mockRates, mockLegalCases } from '@shared/data/mockData'
import { useToast } from '@shared/hooks/useToast'

const CollectivePage = () => {
  const { showToast, ToastContainer } = useToast()
  const [votedCampaigns, setVotedCampaigns] = useState<string[]>(['campaign-001']) // Pre-voted
  const [joinedUnions, setJoinedUnions] = useState<string[]>(['union-001', 'union-002']) // Pre-joined
  const [donatedCases, setDonatedCases] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getTrendIcon = (direction: 'up' | 'down' | 'stable') => {
    if (direction === 'up') return <TrendingUp className="w-4 h-4 text-success" />
    if (direction === 'down') return <TrendingDown className="w-4 h-4 text-danger" />
    return <Minus className="w-4 h-4 text-dark-600" />
  }

  const getTrendColor = (direction: 'up' | 'down' | 'stable') => {
    if (direction === 'up') return 'text-success'
    if (direction === 'down') return 'text-danger'
    return 'text-dark-600'
  }

  const handleVote = async (campaignId: string, campaignTitle: string) => {
    setIsProcessing(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setVotedCampaigns(prev => [...prev, campaignId])
    setIsProcessing(false)
    showToast(`Vote untuk "${campaignTitle}" berhasil!`, 'success')
  }

  const handleJoinUnion = async (unionId: string, unionName: string) => {
    setIsProcessing(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setJoinedUnions(prev => [...prev, unionId])
    setIsProcessing(false)
    showToast(`Berhasil bergabung dengan ${unionName}!`, 'success')
  }

  const handleDonate = async (caseId: string, caseTitle: string) => {
    setIsProcessing(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setDonatedCases(prev => [...prev, caseId])
    setIsProcessing(false)
    showToast(`Donasi Rp 50.000 untuk "${caseTitle}" berhasil!`, 'success')
  }

  const getActiveCampaigns = () => mockCampaigns.filter(c => c.status === 'active')
  const getJoinedUnionsData = () => mockUnions.filter(u => joinedUnions.includes(u.id))

  return (
    <div className="space-y-8">
      <ToastContainer />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Collective Power</h1>
          <p className="text-dark-600">LAYER 3: The Voice - Bersama kita punya kekuatan untuk bernegosiasi</p>
        </div>
      </div>

      {/* Union Membership Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <Users className="w-8 h-8 text-primary-500" />
          </div>
          <h3 className="text-2xl font-bold">{getJoinedUnionsData().length}</h3>
          <p className="text-dark-600 text-sm">Serikat yang Diikuti</p>
          <p className="text-xs text-dark-500 mt-1">
            Total anggota: {getJoinedUnionsData().reduce((sum, u) => sum + u.memberCount, 0).toLocaleString()}
          </p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <Vote className="w-8 h-8 text-warning" />
          </div>
          <h3 className="text-2xl font-bold">{getActiveCampaigns().length}</h3>
          <p className="text-dark-600 text-sm">Kampanye Aktif</p>
          <p className="text-xs text-dark-500 mt-1">
            {votedCampaigns.length} sudah kamu vote
          </p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <Scale className="w-8 h-8 text-success" />
          </div>
          <h3 className="text-2xl font-bold">{mockCampaigns.filter(c => c.status === 'successful').length}</h3>
          <p className="text-dark-600 text-sm">Kampanye Berhasil</p>
          <p className="text-xs text-dark-500 mt-1">
            {Math.round((mockCampaigns.filter(c => c.status === 'successful').length / mockCampaigns.length) * 100)}% success rate
          </p>
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Kampanye Aktif - Suara Kamu Penting!</h2>
        <div className="space-y-4">
          {getActiveCampaigns().map((campaign) => {
            const hasVoted = votedCampaigns.includes(campaign.id)

            return (
              <div
                key={campaign.id}
                className={`p-6 border-2 rounded-xl ${
                  hasVoted
                    ? 'border-primary-500 bg-primary-500/5'
                    : 'border-warning bg-warning/5'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-primary-500">{campaign.union}</span>
                      <span className="text-sm text-dark-600">→</span>
                      <span className="text-sm font-semibold text-dark-600">{campaign.targetPlatform}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
                    <p className="text-dark-600 text-sm mb-4">{campaign.description}</p>
                  </div>
                  {hasVoted ? (
                    <div className="flex items-center space-x-2 text-success">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-bold text-sm">VOTED</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 text-warning">
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-bold text-sm">VOTE NOW</span>
                    </div>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold">
                      {campaign.votes.toLocaleString()} / {campaign.targetVotes.toLocaleString()} suara
                    </span>
                    <span className={`font-bold ${campaign.progress >= 100 ? 'text-success' : 'text-warning'}`}>
                      {campaign.progress}%
                    </span>
                  </div>
                  <div className="h-3 bg-dark-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        campaign.progress >= 100
                          ? 'bg-gradient-to-r from-success to-success'
                          : 'bg-gradient-to-r from-warning to-warning'
                      }`}
                      style={{ width: `${Math.min(campaign.progress, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Action */}
                <div className="flex items-center justify-between pt-4 border-t border-dark-200">
                  <div className="text-sm text-dark-600">
                    Deadline: {new Date(campaign.deadline).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                  {!hasVoted && (
                    <button
                      className={`text-sm py-2 px-6 rounded-lg font-semibold transition-all ${
                        isProcessing
                          ? 'bg-primary-400 text-white cursor-wait'
                          : 'bg-primary-600 hover:bg-primary-700 text-white'
                      }`}
                      onClick={() => !isProcessing && handleVote(campaign.id, campaign.title)}
                      disabled={isProcessing}
                    >
                      <Vote className="w-4 h-4 inline mr-2" />
                      {isProcessing ? 'Processing...' : 'Vote Sekarang'}
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Successful Campaign */}
        {mockCampaigns.some(c => c.status === 'successful') && (
          <div className="mt-6">
            <h3 className="font-bold mb-4 text-success">✓ Kampanye Berhasil</h3>
            {mockCampaigns
              .filter(c => c.status === 'successful')
              .map((campaign) => (
                <div
                  key={campaign.id}
                  className="p-4 bg-success/10 border border-success rounded-lg mb-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">{campaign.title}</h4>
                      <p className="text-sm text-dark-600 mb-2">{campaign.description}</p>
                      {campaign.result && (
                        <div className="p-3 bg-success/20 rounded-lg">
                          <p className="text-sm font-semibold text-success">✓ {campaign.result}</p>
                        </div>
                      )}
                    </div>
                    <div className="ml-4 text-right">
                      <div className="text-2xl font-bold text-success">{campaign.progress}%</div>
                      <p className="text-xs text-dark-600">{campaign.votes.toLocaleString()} suara</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Rate Transparency Dashboard */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">
          <TrendingUp className="w-6 h-6 inline mr-2 text-primary-500" />
          Transparansi Tarif Platform
        </h2>
        <p className="text-dark-600 mb-6">
          Data real-time untuk membandingkan tarif antar platform. Gunakan info ini untuk memilih platform dengan bayaran terbaik!
        </p>

        <div className="space-y-3">
          {mockRates.map((rate, index) => (
            <div
              key={index}
              className="p-5 bg-dark-50 border border-dark-200 rounded-lg hover:border-primary-500 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-24">
                    <h4 className="font-bold">{rate.platform}</h4>
                    <p className="text-xs text-dark-600">{rate.service}</p>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-2xl font-bold text-primary-500">
                        {formatCurrency(rate.rate)}
                      </span>
                      <span className="text-sm text-dark-600">/{rate.unit}</span>
                      <span className="text-xs text-dark-500">+ base {formatCurrency(rate.baseFare)}</span>
                    </div>

                    {/* Trend */}
                    <div className="flex items-center space-x-2">
                      {getTrendIcon(rate.trend.direction)}
                      <span className={`text-sm font-semibold ${getTrendColor(rate.trend.direction)}`}>
                        {rate.trend.percentage !== 0 && (
                          <>
                            {rate.trend.percentage > 0 ? '+' : ''}
                            {rate.trend.percentage}%
                          </>
                        )}
                        {rate.trend.percentage === 0 && 'Stabil'}
                      </span>
                      <span className="text-xs text-dark-600">sejak {rate.trend.since}</span>
                    </div>
                  </div>

                  {/* Comparison Bar */}
                  <div className="w-48">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-dark-600">vs Gojek</span>
                      <span className={`text-xs font-bold ${
                        rate.comparison >= 100 ? 'text-success' :
                        rate.comparison >= 95 ? 'text-warning' : 'text-danger'
                      }`}>
                        {rate.comparison}%
                      </span>
                    </div>
                    <div className="h-2 bg-dark-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          rate.comparison >= 100 ? 'bg-success' :
                          rate.comparison >= 95 ? 'bg-warning' : 'bg-danger'
                        }`}
                        style={{ width: `${rate.comparison}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-dark-200 flex items-center justify-between">
                <p className="text-xs text-dark-600">
                  Lokasi: {rate.location} • Update: {new Date(rate.lastUpdated).toLocaleDateString('id-ID')}
                </p>
                {rate.comparison < 95 && (
                  <span className="text-xs px-2 py-1 bg-danger/20 text-danger rounded-full font-semibold">
                    TARIF RENDAH
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/30 rounded-lg">
          <p className="text-sm text-dark-700">
            💡 <strong>Tip:</strong> Gunakan data ini untuk campaign! Jika ada platform yang terus menurunkan tarif tanpa alasan,
            kita bisa kolektif menuntut transparansi dan perbaikan.
          </p>
        </div>
      </div>

      {/* Union Directory */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Serikat Pekerja</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockUnions.map((union) => {
            const isJoined = joinedUnions.includes(union.id)

            return (
              <div
                key={union.id}
                className={`p-5 border-2 rounded-xl transition-all ${
                  isJoined
                    ? 'border-success bg-success/5'
                    : 'border-dark-200 hover:border-primary-500'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold mb-1">{union.name}</h3>
                    <p className="text-sm text-dark-600">{union.description}</p>
                  </div>
                  {isJoined && (
                    <div className="flex items-center space-x-1 text-success">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-xs font-bold">JOINED</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary-500">{union.memberCount.toLocaleString()}</div>
                    <div className="text-xs text-dark-600">Anggota</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary-500">{union.campaigns}</div>
                    <div className="text-xs text-dark-600">Kampanye</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-success">{union.successRate}%</div>
                    <div className="text-xs text-dark-600">Berhasil</div>
                  </div>
                </div>

                <button
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                    isJoined
                      ? 'bg-success/20 text-success cursor-default'
                      : isProcessing
                      ? 'bg-primary-400 text-white cursor-wait'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                  onClick={() => !isJoined && !isProcessing && handleJoinUnion(union.id, union.name)}
                  disabled={isJoined || isProcessing}
                >
                  {isJoined ? '✓ Member Aktif' : isProcessing ? 'Processing...' : 'Gabung Serikat'}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Legal Defense Fund */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">
          <Scale className="w-6 h-6 inline mr-2 text-primary-500" />
          Dana Bantuan Hukum
        </h2>
        <p className="text-dark-600 mb-6">
          Perlindungan legal untuk pekerja yang mengalami deaktivasi tidak adil atau sengketa pembayaran.
        </p>

        <div className="space-y-4">
          {mockLegalCases.map((legalCase) => {
            const hasDonated = donatedCases.includes(legalCase.id)

            return (
              <div
                key={legalCase.id}
                className="p-5 bg-dark-50 border border-dark-200 rounded-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-danger/20 text-danger rounded font-semibold uppercase">
                        {legalCase.type.replace(/-/g, ' ')}
                      </span>
                      <span className="text-xs px-2 py-1 bg-dark-300 text-dark-700 rounded font-semibold">
                        {legalCase.platform}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{legalCase.title}</h3>
                    <p className="text-sm text-dark-600 mb-3">{legalCase.description}</p>
                    {legalCase.lawyer && (
                      <p className="text-xs text-primary-500">Ditangani: {legalCase.lawyer}</p>
                    )}
                  </div>
                </div>

                {/* Funding Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold">Dana Terkumpul</span>
                    <span className={`font-bold ${legalCase.progress >= 100 ? 'text-success' : 'text-warning'}`}>
                      {formatCurrency(legalCase.fundingCurrent)} / {formatCurrency(legalCase.fundingGoal)}
                    </span>
                  </div>
                  <div className="h-3 bg-dark-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-700"
                      style={{ width: `${legalCase.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-dark-600 mt-1">{legalCase.supporters} pendukung</p>
                </div>

                {/* Status & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-dark-200">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                      legalCase.status === 'won' ? 'bg-success/20 text-success' :
                      legalCase.status === 'in-progress' ? 'bg-warning/20 text-warning' :
                      'bg-dark-300 text-dark-700'
                    }`}>
                      {legalCase.status === 'won' ? 'MENANG' :
                       legalCase.status === 'in-progress' ? 'PROSES' : legalCase.status.toUpperCase()}
                    </span>
                    {legalCase.result && (
                      <p className="text-xs text-success mt-2">✓ {legalCase.result}</p>
                    )}
                  </div>
                  {legalCase.status === 'in-progress' && legalCase.progress < 100 && (
                    <button
                      className={`text-sm py-2 px-6 rounded-lg font-semibold transition-all ${
                        hasDonated
                          ? 'bg-success/20 text-success cursor-default'
                          : isProcessing
                          ? 'bg-primary-400 text-white cursor-wait'
                          : 'bg-primary-600 hover:bg-primary-700 text-white'
                      }`}
                      onClick={() => !hasDonated && !isProcessing && handleDonate(legalCase.id, legalCase.title)}
                      disabled={hasDonated || isProcessing}
                    >
                      <DollarSign className="w-4 h-4 inline mr-1" />
                      {hasDonated ? '✓ Donated' : isProcessing ? 'Processing...' : 'Donasi'}
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CollectivePage
