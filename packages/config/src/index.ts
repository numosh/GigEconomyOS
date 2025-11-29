// Configuration constants for GIGECONOMY OS

// ============================================
// API CONFIGURATION
// ============================================

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
} as const

export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    VERIFY: '/api/auth/verify',
  },

  // Layer 1: Marketplace
  MARKETPLACE: {
    PLATFORMS: '/api/marketplace/platforms',
    GIGS: '/api/marketplace/gigs',
    SCHEDULE: '/api/marketplace/schedule',
    REPUTATION: '/api/marketplace/reputation',
    OPTIMIZE: '/api/marketplace/optimize',
  },

  // Layer 2: Support
  SUPPORT: {
    INSURANCE: '/api/support/insurance',
    INSTANT_PAY: '/api/support/instant-pay',
    FINANCIAL: '/api/support/financial',
    WELLNESS: '/api/support/wellness',
  },

  // Layer 3: Collective
  COLLECTIVE: {
    UNIONS: '/api/collective/unions',
    CAMPAIGNS: '/api/collective/campaigns',
    RATES: '/api/collective/rates',
    LEGAL: '/api/collective/legal',
  },

  // Shared
  WORKERS: '/api/workers',
  NOTIFICATIONS: '/api/notifications',
  ANALYTICS: '/api/analytics',
} as const

// ============================================
// APP CONFIGURATION
// ============================================

export const APP_CONFIG = {
  NAME: 'GIGECONOMY OS',
  DESCRIPTION: 'The Operating System for the Post-Employment Era',
  VERSION: '0.1.0',
  SUPPORT_EMAIL: 'support@gigeconomy-os.com',
  DOCS_URL: 'https://docs.gigeconomy-os.com',
} as const

// ============================================
// FEATURE FLAGS
// ============================================

export const FEATURES = {
  // Layer 1
  MARKETPLACE_AGGREGATOR: false,
  AI_SCHEDULING: false,
  BLOCKCHAIN_REPUTATION: false,

  // Layer 2
  MICRO_INSURANCE: false,
  INSTANT_PAY: false,
  FINANCIAL_TOOLS: false,
  MENTAL_HEALTH: false,

  // Layer 3
  DIGITAL_UNION: false,
  RATE_TRANSPARENCY: false,
  LEGAL_DEFENSE: false,

  // Shared
  NOTIFICATIONS: false,
  ANALYTICS: false,
} as const

// ============================================
// PLATFORM CONFIGURATION
// ============================================

export const PLATFORMS = {
  GOJEK: {
    id: 'gojek',
    name: 'Gojek',
    type: 'transport' as const,
    color: '#00AA13',
    icon: '🏍️',
  },
  GRAB: {
    id: 'grab',
    name: 'Grab',
    type: 'transport' as const,
    color: '#00B14F',
    icon: '🚗',
  },
  MAXIM: {
    id: 'maxim',
    name: 'Maxim',
    type: 'transport' as const,
    color: '#FFD500',
    icon: '🚕',
  },
  UPWORK: {
    id: 'upwork',
    name: 'Upwork',
    type: 'freelance' as const,
    color: '#6FDA44',
    icon: '💼',
  },
  PROJECTS_CO_ID: {
    id: 'projects-co-id',
    name: 'Projects.co.id',
    type: 'freelance' as const,
    color: '#3B82F6',
    icon: '📊',
  },
} as const

// ============================================
// INSURANCE CONFIGURATION
// ============================================

export const INSURANCE_CONFIG = {
  PER_GIG: {
    BASE_PREMIUM: 500, // IDR
    COVERAGE: {
      ACCIDENT: 10000000, // 10 million IDR
      MEDICAL: 5000000, // 5 million IDR
      LIABILITY: 3000000, // 3 million IDR
    },
  },
  DAILY: {
    BASE_PREMIUM: 3000, // IDR
    COVERAGE: {
      ACCIDENT: 50000000,
      MEDICAL: 20000000,
      LIABILITY: 10000000,
    },
  },
  MONTHLY: {
    BASE_PREMIUM: 75000, // IDR
    COVERAGE: {
      ACCIDENT: 100000000,
      MEDICAL: 50000000,
      LIABILITY: 25000000,
    },
  },
} as const

// ============================================
// PAYMENT CONFIGURATION
// ============================================

export const PAYMENT_CONFIG = {
  INSTANT_PAY: {
    MIN_AMOUNT: 10000, // 10,000 IDR
    MAX_AMOUNT: 5000000, // 5,000,000 IDR
    FEE_PERCENTAGE: 2.5, // 2.5%
    MIN_FEE: 500, // 500 IDR
    PROCESSING_TIME: '15 minutes',
  },
} as const

// ============================================
// NOTIFICATION CONFIGURATION
// ============================================

export const NOTIFICATION_CONFIG = {
  TYPES: {
    GIG: 'gig',
    PAYMENT: 'payment',
    INSURANCE: 'insurance',
    UNION: 'union',
    SYSTEM: 'system',
  },
  PREFERENCES: {
    EMAIL: true,
    PUSH: true,
    SMS: false,
  },
} as const

// ============================================
// ANALYTICS CONFIGURATION
// ============================================

export const ANALYTICS_CONFIG = {
  PERIODS: ['daily', 'weekly', 'monthly', 'yearly'] as const,
  REFRESH_INTERVAL: 60000, // 1 minute
  CHART_COLORS: {
    PRIMARY: '#0ea5e9',
    SUCCESS: '#10b981',
    WARNING: '#f59e0b',
    DANGER: '#ef4444',
    INFO: '#3b82f6',
  },
} as const

// ============================================
// RATE LIMITS
// ============================================

export const RATE_LIMITS = {
  API_CALLS_PER_MINUTE: 60,
  GIGS_PER_DAY: 50,
  INSTANT_PAY_PER_DAY: 5,
} as const

// ============================================
// VALIDATION RULES
// ============================================

export const VALIDATION = {
  PASSWORD: {
    MIN_LENGTH: 8,
    REQUIRE_UPPERCASE: true,
    REQUIRE_LOWERCASE: true,
    REQUIRE_NUMBER: true,
    REQUIRE_SPECIAL: true,
  },
  PHONE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 15,
    PATTERN: /^(\+62|62|0)[0-9]{9,12}$/,
  },
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 100,
  },
} as const

// ============================================
// UI CONFIGURATION
// ============================================

export const UI_CONFIG = {
  THEME: {
    DEFAULT: 'dark' as const,
    OPTIONS: ['light', 'dark'] as const,
  },
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 20,
    PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
  },
  TOAST: {
    DURATION: 5000, // 5 seconds
    POSITION: 'top-right' as const,
  },
  DEBOUNCE_DELAY: 300, // milliseconds
} as const

// ============================================
// ERROR MESSAGES
// ============================================

export const ERROR_MESSAGES = {
  NETWORK: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION: 'Please check your input and try again.',
  TIMEOUT: 'Request timed out. Please try again.',
} as const

// ============================================
// SUCCESS MESSAGES
// ============================================

export const SUCCESS_MESSAGES = {
  LOGIN: 'Successfully logged in!',
  REGISTER: 'Account created successfully!',
  UPDATE: 'Updated successfully!',
  DELETE: 'Deleted successfully!',
  SUBMIT: 'Submitted successfully!',
} as const
