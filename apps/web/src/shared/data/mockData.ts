// Mock Data for GIGECONOMY OS - Realistic Indonesian Worker Data

export const mockWorker = {
  id: 'worker-001',
  name: 'Budi Santoso',
  email: 'budi.santoso@email.com',
  phone: '+628123456789',
  joinedDate: '2024-01-15',
  location: 'Jakarta Selatan',
  profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi',
}

// LAYER 1: MARKETPLACE DATA
export const mockPlatforms = [
  {
    id: 'gojek',
    name: 'Gojek',
    type: 'transport',
    isConnected: true,
    color: '#00AA13',
    icon: '🏍️',
    earnings: {
      today: 125000,
      thisWeek: 850000,
      thisMonth: 3200000,
    },
  },
  {
    id: 'grab',
    name: 'Grab',
    type: 'transport',
    isConnected: true,
    color: '#00B14F',
    icon: '🚗',
    earnings: {
      today: 95000,
      thisWeek: 620000,
      thisMonth: 2400000,
    },
  },
  {
    id: 'upwork',
    name: 'Upwork',
    type: 'freelance',
    isConnected: true,
    color: '#6FDA44',
    icon: '💼',
    earnings: {
      today: 450000,
      thisWeek: 2100000,
      thisMonth: 8500000,
    },
  },
  {
    id: 'maxim',
    name: 'Maxim',
    type: 'transport',
    isConnected: false,
    color: '#FFD500',
    icon: '🚕',
    earnings: {
      today: 0,
      thisWeek: 0,
      thisMonth: 0,
    },
  },
]

export const mockGigs = [
  {
    id: 'gig-001',
    platform: 'gojek',
    title: 'GoRide: Senayan - Kemang',
    type: 'transport',
    earnings: 25000,
    distance: '8.5 km',
    duration: 25,
    status: 'available',
    scheduledTime: new Date(Date.now() + 1000 * 60 * 30).toISOString(), // 30 min from now
    location: 'Senayan, Jakarta Selatan',
    rating: 4.8,
  },
  {
    id: 'gig-002',
    platform: 'grab',
    title: 'GrabCar: Sudirman - BSD',
    type: 'transport',
    earnings: 85000,
    distance: '28 km',
    duration: 55,
    status: 'available',
    scheduledTime: new Date(Date.now() + 1000 * 60 * 45).toISOString(),
    location: 'Sudirman, Jakarta Pusat',
    rating: 4.9,
  },
  {
    id: 'gig-003',
    platform: 'upwork',
    title: 'Website Design - E-commerce Landing Page',
    type: 'freelance',
    earnings: 1500000,
    duration: 480, // 8 hours
    status: 'in-progress',
    deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3).toISOString(), // 3 days
    description: 'Design modern e-commerce landing page with Figma',
    skills: ['UI/UX', 'Figma', 'Web Design'],
  },
  {
    id: 'gig-004',
    platform: 'gojek',
    title: 'GoFood: KFC Delivery to Menteng',
    type: 'delivery',
    earnings: 18000,
    distance: '3.2 km',
    duration: 15,
    status: 'available',
    scheduledTime: new Date(Date.now() + 1000 * 60 * 15).toISOString(),
    location: 'Senopati, Jakarta Selatan',
  },
  {
    id: 'gig-005',
    platform: 'upwork',
    title: 'Logo Design for Tech Startup',
    type: 'freelance',
    earnings: 800000,
    duration: 240, // 4 hours
    status: 'available',
    deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(),
    description: 'Create modern, minimalist logo for AI startup',
    skills: ['Logo Design', 'Illustrator', 'Branding'],
  },
]

export const mockSchedule = {
  optimized: [
    {
      time: '07:00 - 09:00',
      activity: 'GoRide Peak Hours',
      platform: 'gojek',
      estimatedEarnings: 120000,
      reason: 'Jam sibuk pagi - demand tinggi',
    },
    {
      time: '09:30 - 12:00',
      activity: 'Upwork Design Project',
      platform: 'upwork',
      estimatedEarnings: 600000,
      reason: 'High-value freelance task',
    },
    {
      time: '12:00 - 14:00',
      activity: 'GoFood Lunch Rush',
      platform: 'gojek',
      estimatedEarnings: 95000,
      reason: 'Jam makan siang - banyak order',
    },
    {
      time: '14:30 - 17:00',
      activity: 'GrabCar Long Distance',
      platform: 'grab',
      estimatedEarnings: 180000,
      reason: 'Perjalanan jarak jauh, nilai tinggi',
    },
    {
      time: '17:30 - 20:00',
      activity: 'GoRide Evening Peak',
      platform: 'gojek',
      estimatedEarnings: 150000,
      reason: 'Jam pulang kantor - demand tinggi',
    },
  ],
  projectedEarnings: 1145000,
  projectedHours: 10.5,
  efficiency: 87, // percentage
}

export const mockReputation = {
  overallScore: 92,
  totalGigs: 1247,
  platformScores: {
    gojek: { score: 95, rating: 4.9, completedGigs: 687 },
    grab: { score: 89, rating: 4.7, completedGigs: 423 },
    upwork: { score: 94, rating: 4.8, completedGigs: 137 },
  },
  badges: [
    { name: 'Top Performer', icon: '⭐', description: 'Rating 4.8+ selama 6 bulan' },
    { name: 'Speed Demon', icon: '⚡', description: '95% on-time completion' },
    { name: 'Customer Favorite', icon: '❤️', description: '500+ positive reviews' },
  ],
  verificationStatus: 'verified',
  blockchainHash: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
}

// LAYER 2: SUPPORT DATA
export const mockInsurance = {
  active: {
    type: 'daily',
    coverage: {
      accident: 50000000,
      medical: 20000000,
      liability: 10000000,
    },
    premium: 3000,
    validUntil: new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString(), // 18 hours from now
    claims: 0,
  },
  plans: [
    {
      id: 'per-gig',
      name: 'Per-Gig Insurance',
      premium: 500,
      coverage: {
        accident: 10000000,
        medical: 5000000,
        liability: 3000000,
      },
      description: 'Perlindungan untuk satu perjalanan saja',
      popular: false,
    },
    {
      id: 'daily',
      name: 'Daily Protection',
      premium: 3000,
      coverage: {
        accident: 50000000,
        medical: 20000000,
        liability: 10000000,
      },
      description: 'Perlindungan seharian penuh',
      popular: true,
    },
    {
      id: 'monthly',
      name: 'Monthly Premium',
      premium: 75000,
      coverage: {
        accident: 100000000,
        medical: 50000000,
        liability: 25000000,
      },
      description: 'Perlindungan maksimal sebulan',
      popular: false,
    },
  ],
  history: [
    {
      date: '2024-11-29',
      type: 'daily',
      premium: 3000,
      status: 'active',
    },
    {
      date: '2024-11-28',
      type: 'daily',
      premium: 3000,
      status: 'completed',
    },
  ],
}

export const mockInstantPay = {
  availableBalance: 670000,
  pendingEarnings: 1250000,
  totalEarned: 14200000,
  fee: 2.5, // percentage
  minAmount: 10000,
  maxAmount: 5000000,
  processingTime: '15 menit',
  history: [
    {
      id: 'pay-001',
      amount: 500000,
      fee: 12500,
      total: 487500,
      status: 'completed',
      requestedAt: '2024-11-28 14:23',
      completedAt: '2024-11-28 14:35',
      method: 'GoPay',
    },
    {
      id: 'pay-002',
      amount: 350000,
      fee: 8750,
      total: 341250,
      status: 'completed',
      requestedAt: '2024-11-27 18:45',
      completedAt: '2024-11-27 18:58',
      method: 'OVO',
    },
  ],
}

export const mockFinancial = {
  monthlyIncome: {
    current: 14200000,
    average: 12800000,
    trend: 'up' as const,
    percentage: 10.9,
  },
  expenses: {
    fixed: 5000000, // Kost, pulsa, dll
    variable: 3200000, // Makan, bensin, dll
    total: 8200000,
  },
  savings: 3500000,
  emergencyFund: 8000000,
  targetEmergencyFund: 15000000,
  budgetHealth: 'good' as const,
  monthlyBreakdown: [
    { month: 'Jun', income: 11200000, expenses: 7800000 },
    { month: 'Jul', income: 12500000, expenses: 8100000 },
    { month: 'Aug', income: 11800000, expenses: 7900000 },
    { month: 'Sep', income: 13200000, expenses: 8300000 },
    { month: 'Oct', income: 12800000, expenses: 8000000 },
    { month: 'Nov', income: 14200000, expenses: 8200000 },
  ],
}

// LAYER 3: COLLECTIVE DATA
export const mockUnions = [
  {
    id: 'union-001',
    name: 'Serikat Driver Jakarta',
    memberCount: 24567,
    focus: 'transport',
    description: 'Komunitas driver Gojek, Grab, dan Maxim di Jakarta',
    founded: '2023-03-15',
    isJoined: true,
    campaigns: 12,
    successRate: 67,
  },
  {
    id: 'union-002',
    name: 'Freelancer Indonesia United',
    memberCount: 8934,
    focus: 'freelance',
    description: 'Serikat pekerja freelance digital Indonesia',
    founded: '2023-08-20',
    isJoined: true,
    campaigns: 8,
    successRate: 75,
  },
  {
    id: 'union-003',
    name: 'Food Delivery Workers Alliance',
    memberCount: 15203,
    focus: 'delivery',
    description: 'Aliansi kurir makanan se-Indonesia',
    founded: '2023-06-10',
    isJoined: false,
    campaigns: 15,
    successRate: 60,
  },
]

export const mockCampaigns = [
  {
    id: 'campaign-001',
    title: 'Naikkan Base Fare GoRide Minimum Rp 12.000',
    description: 'Kampanye untuk menaikkan tarif dasar GoRide dari Rp 10.000 menjadi Rp 12.000 untuk jarak 0-3km',
    union: 'Serikat Driver Jakarta',
    targetPlatform: 'Gojek',
    status: 'active',
    votes: 18234,
    targetVotes: 25000,
    progress: 73,
    deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString(),
    hasVoted: true,
  },
  {
    id: 'campaign-002',
    title: 'Stop Deaktivasi Sepihak Tanpa Alasan Jelas',
    description: 'Menuntut transparansi dan due process sebelum akun driver dinonaktifkan',
    union: 'Serikat Driver Jakarta',
    targetPlatform: 'Grab',
    status: 'active',
    votes: 22156,
    targetVotes: 20000,
    progress: 110,
    deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3).toISOString(),
    hasVoted: false,
  },
  {
    id: 'campaign-003',
    title: 'Asuransi Gratis untuk Semua Driver',
    description: 'Platform wajib menyediakan asuransi kecelakaan gratis untuk driver',
    union: 'Serikat Driver Jakarta',
    targetPlatform: 'All Platforms',
    status: 'successful',
    votes: 45678,
    targetVotes: 30000,
    progress: 152,
    resolvedAt: '2024-11-15',
    result: 'Gojek setuju menyediakan asuransi dasar gratis mulai Januari 2025',
  },
]

export const mockRates = [
  {
    platform: 'Gojek',
    service: 'GoRide',
    rate: 2800,
    unit: 'per-km',
    location: 'Jakarta Selatan',
    baseFare: 10000,
    lastUpdated: '2024-11-29',
    trend: {
      direction: 'down' as const,
      percentage: -5.2,
      since: '2024-10-15',
    },
    comparison: 100, // baseline
  },
  {
    platform: 'Grab',
    service: 'GrabBike',
    rate: 2600,
    unit: 'per-km',
    location: 'Jakarta Selatan',
    baseFare: 9000,
    lastUpdated: '2024-11-29',
    trend: {
      direction: 'down' as const,
      percentage: -7.8,
      since: '2024-10-15',
    },
    comparison: 93, // 7% lower than Gojek
  },
  {
    platform: 'Maxim',
    service: 'MaximBike',
    rate: 2400,
    unit: 'per-km',
    location: 'Jakarta Selatan',
    baseFare: 8000,
    lastUpdated: '2024-11-29',
    trend: {
      direction: 'stable' as const,
      percentage: 0,
      since: '2024-10-15',
    },
    comparison: 86, // 14% lower than Gojek
  },
  {
    platform: 'Gojek',
    service: 'GoCar',
    rate: 3500,
    unit: 'per-km',
    location: 'Jakarta Selatan',
    baseFare: 15000,
    lastUpdated: '2024-11-29',
    trend: {
      direction: 'stable' as const,
      percentage: 0,
      since: '2024-10-15',
    },
    comparison: 100,
  },
]

export const mockLegalCases = [
  {
    id: 'case-001',
    title: 'Akun Gojek Dinonaktifkan Tanpa Pemberitahuan',
    worker: 'Andi Wijaya',
    platform: 'Gojek',
    type: 'unfair-deactivation',
    description: 'Akun dinonaktifkan tiba-tiba tanpa email atau notifikasi. Sudah email CS tapi tidak ada respon 2 minggu.',
    status: 'in-progress',
    fundingGoal: 5000000,
    fundingCurrent: 3250000,
    progress: 65,
    supporters: 127,
    filedAt: '2024-11-15',
    lawyer: 'Tim Legal YLBHI Jakarta',
  },
  {
    id: 'case-002',
    title: 'Payment Dispute - Grab Tidak Bayar Bonus Bulan Oktober',
    worker: 'Budi Santoso',
    platform: 'Grab',
    type: 'payment-dispute',
    description: 'Sudah capai target bonus Rp 2.5 juta tapi tidak dibayarkan. Ada bukti screenshot.',
    status: 'won',
    fundingGoal: 3000000,
    fundingCurrent: 3000000,
    progress: 100,
    supporters: 89,
    filedAt: '2024-10-25',
    resolvedAt: '2024-11-20',
    result: 'Grab membayar bonus + kompensasi Rp 500.000',
  },
]

// STATS SUMMARY
export const mockStats = {
  todayEarnings: mockPlatforms.reduce((sum, p) => sum + p.earnings.today, 0),
  weeklyEarnings: mockPlatforms.reduce((sum, p) => sum + p.earnings.thisWeek, 0),
  monthlyEarnings: mockPlatforms.reduce((sum, p) => sum + p.earnings.thisMonth, 0),
  todayHours: 7.5,
  activeGigs: mockGigs.filter(g => g.status === 'available' || g.status === 'in-progress').length,
  totalGigs: mockReputation.totalGigs,
  avgRating: 4.8,
  efficiency: mockSchedule.efficiency,
}
