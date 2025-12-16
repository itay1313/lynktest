import { X } from 'lucide-react'
import { Button } from '../design-system/Button'
import { Card } from '../design-system/Card'

interface HelpModalProps {
  isOpen: boolean
  onClose: () => void
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[var(--color-bg-overlay)] backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative z-10 max-w-2xl w-full backdrop-blur-2xl bg-bg-glass border-border-glass max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">AI Question Log</h2>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="space-y-4 text-text-secondary">
          <p className="text-lg">
            View and manage all questions asked to the AI system
          </p>
          
          <div className="space-y-3">
            <h3 className="text-text-primary font-semibold text-lg">Features:</h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>View all questions asked to the AI system</li>
              <li>Filter questions by timestamp (start and end date)</li>
              <li>Search across questions, users, and responses</li>
              <li>Sort questions by any column</li>
              <li>Click on any question to view full details</li>
            </ul>
          </div>
          
          <div className="pt-4 border-t border-border-glass">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
            >
              Got it
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

