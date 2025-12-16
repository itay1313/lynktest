import { X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { Button } from '../design-system/Button'
import { Card } from '../design-system/Card'

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
      <div
        className="absolute inset-0 bg-[var(--color-bg-overlay)] backdrop-blur-sm"
        onClick={onClose}
      />
      
      <Card 
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-auto backdrop-blur-2xl bg-[var(--color-bg-glass)] border-[var(--color-border-glass)] mx-auto"
        onClick={(e) => e?.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-h2 font-semibold text-[var(--color-text-primary)]">Profile</h2>
          <button
            onClick={onClose}
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="text-[var(--color-text-secondary)]">
          <p>Profile settings coming soon...</p>
        </div>
        
        <div className="pt-6 mt-6 border-t border-[var(--color-border-glass)]">
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="border-[var(--color-border-glass)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-glass-hover)]"
          >
            Close
          </Button>
        </div>
      </Card>
    </div>
  )

  return createPortal(modalContent, document.body)
}

