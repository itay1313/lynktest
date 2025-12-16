export interface Question {
  id: string
  questionText: string
  timestamp: string
  responseTime: number // in milliseconds
  userId: string
  userName: string
  fullResponse: string
}

export type SortOrder = 'asc' | 'desc'

export interface FilterOptions {
  startDate?: string
  endDate?: string
}

