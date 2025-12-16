import { X } from 'lucide-react'
import { Button } from '../design-system/Button'
import { Card } from '../design-system/Card'

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[var(--color-bg-overlay)] backdrop-blur-sm"
        onClick={onClose}
      />
      
      <Card className="relative z-10 max-w-2xl w-full backdrop-blur-2xl bg-bg-glass border-border-glass">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Profile</h2>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="text-text-secondary">
          <p>Profile settings coming soon...</p>
        </div>
        
        <div className="pt-4 mt-4 border-t border-border-glass">
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </Card>
    </div>
  )
}

