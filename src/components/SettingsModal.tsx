import { X, Moon, Sun } from 'lucide-react'
import { createPortal } from 'react-dom'
import { Button } from '../design-system/Button'
import { Card } from '../design-system/Card'
import { Toggle } from '../design-system/Toggle'
import { useTheme } from '../contexts/ThemeContext'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme()

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
          <h2 className="text-h2 font-semibold text-[var(--color-text-primary)]">Settings</h2>
          <button
            onClick={onClose}
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Theme Toggle */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-[var(--color-bg-glass-hover)] border border-[var(--color-border-glass)]">
            <div className="flex items-center gap-3">
              {theme === 'dark' ? (
                <Moon className="h-5 w-5 text-[var(--color-accent-primary)]" />
              ) : (
                <Sun className="h-5 w-5 text-[var(--color-accent-primary)]" />
              )}
              <div>
                <h3 className="font-semibold text-[var(--color-text-primary)]">Theme</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {theme === 'dark' ? 'Dark mode' : 'Light mode'}
                </p>
              </div>
            </div>
            <Toggle
              checked={theme === 'dark'}
              onChange={() => toggleTheme()}
              ariaLabel="Toggle theme"
            />
          </div>
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

