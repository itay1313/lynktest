import { X, Moon, Sun } from 'lucide-react'
import { Button } from '../design-system/Button'
import { Card } from '../design-system/Card'
import { useTheme } from '../contexts/ThemeContext'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[var(--color-bg-overlay)] backdrop-blur-sm"
        onClick={onClose}
      />
      
      <Card className="relative z-10 max-w-2xl w-full backdrop-blur-2xl bg-[var(--color-bg-glass)] border-[var(--color-border-glass)]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Settings</h2>
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
            <button
              onClick={toggleTheme}
              className={`
                relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                ${theme === 'dark' ? 'bg-[var(--color-accent-primary)]' : 'bg-[var(--color-border-primary)]'}
                focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)] focus:ring-offset-2
              `}
              aria-label="Toggle theme"
            >
              <span
                className={`
                  inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                  ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}
                `}
              />
            </button>
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
}

