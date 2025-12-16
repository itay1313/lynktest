import { useParams, useNavigate } from 'react-router-dom'
import { Card, Button, Badge } from '../design-system'
import { mockQuestions } from '../data/mockData'
import BottomNavigation from '../components/BottomNavigation'

const QuestionDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const question = mockQuestions.find((q) => q.id === id)

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
      <div className="min-h-screen bg-bg-primary relative flex items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-[var(--color-bg-overlay)]"></div>
        <Card className="max-w-md relative z-10 backdrop-blur-2xl bg-bg-glass border-border-glass">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Question Not Found
            </h2>
            <p className="text-text-secondary mb-6">
              The question you're looking for doesn't exist or has been removed.
            </p>
            <Button 
              onClick={() => navigate('/')}
            >
              Back to Questions Log
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-primary relative bg-hero-image bg-cover bg-center bg-no-repeat">
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-[var(--color-bg-overlay)]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="mb-4"
          >
            ← Back to Questions Log
          </Button>
          <h1 className="text-3xl font-bold text-text-primary">Question Details</h1>
        </div>

        <div className="space-y-6">
          <Card className="backdrop-blur-2xl bg-bg-glass border-border-glass">
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-medium text-text-secondary uppercase tracking-wide mb-2">
                  Question
                </h2>
                <p className="text-lg text-text-primary">{question.questionText}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border-glass">
                <div>
                  <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wide mb-2">
                    User
                  </h3>
                  <p className="text-base text-text-primary">{question.userName}</p>
                  <p className="text-sm text-text-tertiary mt-1">ID: {question.userId}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wide mb-2">
                    Timestamp
                  </h3>
                  <p className="text-base text-text-primary">{formatDate(question.timestamp)}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border-glass">
                <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wide mb-2">
                  Response Time
                </h3>
                <div className="flex items-center gap-2">
                  <Badge variant={getResponseTimeBadgeVariant(question.responseTime)}>
                    {formatResponseTime(question.responseTime)}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="backdrop-blur-2xl bg-bg-glass border-border-glass">
            <div>
              <h2 className="text-sm font-medium text-text-secondary uppercase tracking-wide mb-4">
                AI Response
              </h2>
              <div className="prose max-w-none">
                <p className="text-base text-text-primary whitespace-pre-wrap leading-relaxed">
                  {question.fullResponse}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}

export default QuestionDetail

