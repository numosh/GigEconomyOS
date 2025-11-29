// Core Types for GIGECONOMY OS

// ============================================
// LAYER 1: MARKETPLACE TYPES
// ============================================

export interface Platform {
  id: string
  name: string
  type: 'transport' | 'freelance' | 'delivery' | 'services'
  isActive: boolean
  apiEndpoint?: string
}

export interface Gig {
  id: string
  platformId: string
  title: string
  description: string
  earnings: number
  duration: number // in minutes
  location?: {
    lat: number
    lng: number
    address: string
  }
  status: 'available' | 'assigned' | 'in-progress' | 'completed' | 'cancelled'
  scheduledTime?: Date
  completedTime?: Date
}

export interface WorkerReputation {
  workerId: string
  overallScore: number // 0-100
  totalGigs: number
  platformScores: {
    [platformId: string]: {
      score: number
      completedGigs: number
      rating: number
    }
  }
  blockchainHash?: string // For blockchain-based reputation
}

export interface ScheduleOptimization {
  workerId: string
  date: Date
  suggestedGigs: Gig[]
  projectedEarnings: number
  projectedHours: number
  efficiencyScore: number
}

// ============================================
// LAYER 2: SUPPORT SYSTEM TYPES
// ============================================

export interface Insurance {
  id: string
  workerId: string
  type: 'per-gig' | 'daily' | 'monthly'
  coverage: {
    accident: number
    medical: number
    liability: number
  }
  premium: number
  status: 'active' | 'expired' | 'claimed'
  expiryDate?: Date
}

export interface InstantPayment {
  id: string
  workerId: string
  gigId: string
  amount: number
  fee: number
  status: 'pending' | 'processing' | 'completed' | 'failed'
  requestedAt: Date
  completedAt?: Date
}

export interface FinancialProfile {
  workerId: string
  monthlyIncome: {
    current: number
    average: number
    trend: 'up' | 'down' | 'stable'
  }
  expenses: {
    fixed: number
    variable: number
  }
  savings: number
  emergencyFund: number
  budgetHealth: 'good' | 'warning' | 'critical'
}

export interface MentalHealthSupport {
  workerId: string
  accessedAt: Date
  resourceType: 'article' | 'community' | 'counseling'
  anonymous: boolean
}

// ============================================
// LAYER 3: COLLECTIVE POWER TYPES
// ============================================

export interface Union {
  id: string
  name: string
  memberCount: number
  foundedAt: Date
  description: string
  focus: 'transport' | 'freelance' | 'all'
}

export interface UnionMember {
  workerId: string
  unionId: string
  joinedAt: Date
  isActive: boolean
  votingPower: number
}

export interface Campaign {
  id: string
  unionId: string
  title: string
  description: string
  goal: string
  targetPlatform?: string
  status: 'active' | 'successful' | 'failed' | 'closed'
  voteCount: number
  createdAt: Date
}

export interface PlatformRate {
  platformId: string
  service: string
  rate: number
  unit: 'per-km' | 'per-hour' | 'per-delivery' | 'fixed'
  location: string
  updatedAt: Date
  trend: {
    direction: 'up' | 'down' | 'stable'
    percentage: number
  }
}

export interface LegalCase {
  id: string
  workerId: string
  platformId: string
  type: 'unfair-deactivation' | 'payment-dispute' | 'discrimination' | 'other'
  description: string
  status: 'open' | 'in-progress' | 'won' | 'lost' | 'settled'
  fundingGoal: number
  fundingCurrent: number
  createdAt: Date
  resolvedAt?: Date
}

// ============================================
// SHARED/CORE TYPES
// ============================================

export interface Worker {
  id: string
  email: string
  name: string
  phone: string
  profilePicture?: string
  createdAt: Date
  verificationStatus: 'unverified' | 'pending' | 'verified'
  platforms: {
    [platformId: string]: {
      connected: boolean
      username?: string
      connectedAt?: Date
    }
  }
}

export interface Notification {
  id: string
  workerId: string
  type: 'gig' | 'payment' | 'insurance' | 'union' | 'system'
  title: string
  message: string
  isRead: boolean
  createdAt: Date
  actionUrl?: string
}

export interface Analytics {
  workerId: string
  period: 'daily' | 'weekly' | 'monthly' | 'yearly'
  metrics: {
    totalEarnings: number
    totalHours: number
    avgHourlyRate: number
    gigsCompleted: number
    platformBreakdown: {
      [platformId: string]: {
        earnings: number
        hours: number
        gigs: number
      }
    }
  }
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
  timestamp: Date
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}
