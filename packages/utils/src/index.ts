// Utility functions for GIGECONOMY OS

import { format, parseISO, differenceInMinutes, addDays } from 'date-fns'

// ============================================
// CURRENCY & FORMATTING
// ============================================

export const formatCurrency = (amount: number, currency: string = 'IDR'): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('id-ID').format(num)
}

export const formatPercentage = (value: number, decimals: number = 1): string => {
  return `${value.toFixed(decimals)}%`
}

// ============================================
// DATE & TIME
// ============================================

export const formatDate = (date: Date | string, formatStr: string = 'PPP'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, formatStr)
}

export const formatTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, 'HH:mm')
}

export const formatDateTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  return format(dateObj, 'PPP HH:mm')
}

export const getTimeAgo = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date
  const minutes = differenceInMinutes(new Date(), dateObj)

  if (minutes < 1) return 'just now'
  if (minutes < 60) return `${minutes}m ago`

  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`

  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`

  const weeks = Math.floor(days / 7)
  if (weeks < 4) return `${weeks}w ago`

  const months = Math.floor(days / 30)
  return `${months}mo ago`
}

export const getDurationString = (minutes: number): string => {
  if (minutes < 60) return `${minutes}m`

  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`
}

// ============================================
// EARNINGS CALCULATIONS
// ============================================

export const calculateHourlyRate = (earnings: number, minutes: number): number => {
  if (minutes === 0) return 0
  return (earnings / minutes) * 60
}

export const calculateDailyProjection = (
  currentEarnings: number,
  currentMinutes: number,
  targetHours: number = 8
): number => {
  const hourlyRate = calculateHourlyRate(currentEarnings, currentMinutes)
  return hourlyRate * targetHours
}

export const calculateEfficiency = (
  actualEarnings: number,
  potentialEarnings: number
): number => {
  if (potentialEarnings === 0) return 0
  return (actualEarnings / potentialEarnings) * 100
}

// ============================================
// PLATFORM UTILITIES
// ============================================

export const getPlatformColor = (platformName: string): string => {
  const colors: Record<string, string> = {
    gojek: '#00AA13',
    grab: '#00B14F',
    maxim: '#FFD500',
    upwork: '#6FDA44',
    'projects.co.id': '#3B82F6',
  }
  return colors[platformName.toLowerCase()] || '#6B7280'
}

export const getPlatformIcon = (platformName: string): string => {
  // Returns emoji icon for now, can be replaced with actual icons
  const icons: Record<string, string> = {
    gojek: '🏍️',
    grab: '🚗',
    maxim: '🚕',
    upwork: '💼',
    'projects.co.id': '📊',
  }
  return icons[platformName.toLowerCase()] || '📱'
}

// ============================================
// VALIDATION
// ============================================

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidPhone = (phone: string): boolean => {
  // Indonesian phone number validation
  const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '')
}

// ============================================
// STATUS HELPERS
// ============================================

export const getStatusColor = (
  status: string
): 'success' | 'warning' | 'danger' | 'info' | 'neutral' => {
  const statusMap: Record<string, 'success' | 'warning' | 'danger' | 'info' | 'neutral'> = {
    completed: 'success',
    active: 'success',
    verified: 'success',
    'in-progress': 'info',
    pending: 'warning',
    processing: 'warning',
    failed: 'danger',
    expired: 'danger',
    cancelled: 'danger',
    unverified: 'neutral',
  }
  return statusMap[status.toLowerCase()] || 'neutral'
}

export const getStatusLabel = (status: string): string => {
  return status
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// ============================================
// DATA TRANSFORMATION
// ============================================

export const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((result, item) => {
    const groupKey = String(item[key])
    if (!result[groupKey]) {
      result[groupKey] = []
    }
    result[groupKey].push(item)
    return result
  }, {} as Record<string, T[]>)
}

export const sortBy = <T>(array: T[], key: keyof T, order: 'asc' | 'desc' = 'asc'): T[] => {
  return [...array].sort((a, b) => {
    const aVal = a[key]
    const bVal = b[key]

    if (aVal < bVal) return order === 'asc' ? -1 : 1
    if (aVal > bVal) return order === 'asc' ? 1 : -1
    return 0
  })
}

export const chunk = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

// ============================================
// LOCAL STORAGE HELPERS
// ============================================

export const storage = {
  get: <T>(key: string, defaultValue?: T): T | null => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue ?? null
    } catch {
      return defaultValue ?? null
    }
  },

  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Failed to save to localStorage:', error)
    }
  },

  remove: (key: string): void => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Failed to remove from localStorage:', error)
    }
  },

  clear: (): void => {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('Failed to clear localStorage:', error)
    }
  },
}

// ============================================
// ASYNC HELPERS
// ============================================

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const retry = async <T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  delay: number = 1000
): Promise<T> => {
  let lastError: Error

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error
      if (attempt < maxAttempts) {
        await sleep(delay * attempt)
      }
    }
  }

  throw lastError!
}
