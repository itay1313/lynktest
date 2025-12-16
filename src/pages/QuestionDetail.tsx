import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Button, Badge, H1, H2, H4, Body } from '../design-system'
import { mockQuestions } from '../data/mockData'
import BottomNavigation from '../components/BottomNavigation'
import { Sidebar } from '../components/Sidebar'
import { useSidebar } from '../contexts/SidebarContext'
import { FilterOptions } from '../types'

const QuestionDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { isCollapsed } = useSidebar()
  const question = mockQuestions.find((q) => q.id === id)
  const [filterOptions] = useState<FilterOptions>({})
  const [searchQuery] = useState('')

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const formatResponseTime = (ms: number) => {
    if (ms < 1000) {
      return `${ms} milliseconds`
    }
    return `${(ms / 1000).toFixed(2)} seconds`
  }

  const getResponseTimeBadgeVariant = (ms: number) => {
    if (ms < 500) return 'success'
    if (ms < 1000) return 'info'
    if (ms < 2000) return 'warning'
    return 'error'
  }

  if (!question) {
    return (
      <div className="min-h-screen bg-bg-primary flex">
        <Sidebar
          searchQuery={searchQuery}
          onSearchChange={() => {}}
          filterOptions={filterOptions}
          onFilterChange={() => {}}
          onClearFilters={() => {}}
          totalQuestions={mockQuestions.length}
          filteredCount={mockQuestions.length}
        />
        <div className={`flex-1 transition-all duration-300 ease-in-out ${isCollapsed ? 'lg:ml-16' : 'lg:ml-80'} flex items-center justify-center`}>
          <Card className="max-w-md bg-bg-tertiary border-border-primary">
            <div className="text-center">
              <H2 className="mb-4">Question Not Found</H2>
              <Body className="text-text-secondary mb-6">
                The question you're looking for doesn't exist or has been removed.
              </Body>
              <Button 
                onClick={() => navigate('/')}
              >
                Back to Questions Log
              </Button>
            </div>
          </Card>
        </div>
        <BottomNavigation />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-primary flex">
      {/* Left Sidebar */}
      <Sidebar
        searchQuery={searchQuery}
        onSearchChange={() => {}}
        filterOptions={filterOptions}
        onFilterChange={() => {}}
        onClearFilters={() => {}}
        totalQuestions={mockQuestions.length}
        filteredCount={mockQuestions.length}
      />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isCollapsed ? 'lg:ml-16' : 'lg:ml-80'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
          <div className="mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/')}
              className="mb-4"
            >
              ← Back to Questions Log
            </Button>
            <H1 serif italic>Question Details</H1>
          </div>

          <div className="space-y-6">
            <Card className="bg-bg-tertiary border-border-primary">
              <div className="space-y-6">
                <div>
                  <H4 className="text-text-secondary uppercase tracking-wide mb-2">
                    Question
                  </H4>
                  <Body className="text-lg text-text-primary">{question.questionText}</Body>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border-primary">
                  <div>
                    <H4 className="text-text-secondary uppercase tracking-wide mb-2">
                      User
                    </H4>
                    <Body className="text-base text-text-primary">{question.userName}</Body>
                    <Body className="text-sm text-text-tertiary mt-1">ID: {question.userId}</Body>
                  </div>

                  <div>
                    <H4 className="text-text-secondary uppercase tracking-wide mb-2">
                      Timestamp
                    </H4>
                    <Body className="text-base text-text-primary">{formatDate(question.timestamp)}</Body>
                  </div>
                </div>

                <div className="pt-6 border-t border-border-primary">
                  <H4 className="text-text-secondary uppercase tracking-wide mb-2">
                    Response Time
                  </H4>
                  <div className="flex items-center gap-2">
                    <Badge variant={getResponseTimeBadgeVariant(question.responseTime)}>
                      {formatResponseTime(question.responseTime)}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-bg-tertiary border-border-primary">
              <div>
                <H2 className="text-text-secondary uppercase tracking-wide mb-4">
                  AI Response
                </H2>
                <div className="prose max-w-none">
                  <Body className="text-base text-text-primary whitespace-pre-wrap leading-relaxed">
                    {question.fullResponse}
                  </Body>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}

export default QuestionDetail

