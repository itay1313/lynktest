import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HelpModal } from './HelpModal'
import { AnalyticsModal } from './AnalyticsModal'
import { SettingsModal } from './SettingsModal'
import { QuestionsIcon, AnalyticsIcon, SettingsIcon, HelpIcon } from '../design-system/icons'

interface NavItem {
  id: string
  label: string
  path?: string
  icon: React.ReactNode
  onClick?: () => void
}

const BottomNavigation = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [helpModalOpen, setHelpModalOpen] = useState(false)
  const [analyticsModalOpen, setAnalyticsModalOpen] = useState(false)
  const [settingsModalOpen, setSettingsModalOpen] = useState(false)

  const navItems: NavItem[] = [
    {
      id: 'questions',
      label: 'Questions',
      path: '/',
      icon: <QuestionsIcon className="w-5 h-5" />
    },
    {
      id: 'analytics',
      label: 'Analytics',
      onClick: () => setAnalyticsModalOpen(true),
      icon: <AnalyticsIcon className="w-5 h-5" />
    },
    {
      id: 'settings',
      label: 'Settings',
      onClick: () => setSettingsModalOpen(true),
      icon: <SettingsIcon className="w-5 h-5" />
    },
    {
      id: 'help',
      label: 'Help',
      onClick: () => setHelpModalOpen(true),
      icon: <HelpIcon className="w-5 h-5" />
    }
  ]

  const isActive = (item: NavItem) => {
    if (item.path) {
      if (item.path === '/') {
        return location.pathname === '/' || location.pathname.startsWith('/question')
      }
      return location.pathname.startsWith(item.path)
    }
    return false
  }

  const handleItemClick = (item: NavItem) => {
    if (item.onClick) {
      item.onClick()
    } else if (item.path) {
      navigate(item.path)
    }
  }

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="backdrop-blur-2xl bg-bg-glass border border-border-glass rounded-2xl px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const active = isActive(item)
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`
                  relative flex flex-col items-center justify-center
                  w-12 h-12 rounded-xl
                  transition-all duration-200
                  ${active 
                    ? 'bg-bg-glass-hover border-2 border-accent-primary shadow-lg backdrop-blur-xl' 
                    : 'bg-bg-glass border-2 border-border-glass hover:bg-bg-glass-hover hover:border-accent-primary/50 backdrop-blur-lg'
                  }
                `}
                title={item.label}
              >
                <div className={`${active ? 'text-accent-primary' : 'text-text-secondary'}`}>
                  {item.icon}
                </div>
                {active && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-primary rounded-full"></div>
                )}
              </button>
            )
          })}
        </div>
      </div>
      
      {/* Modals */}
      <HelpModal isOpen={helpModalOpen} onClose={() => setHelpModalOpen(false)} />
      <AnalyticsModal isOpen={analyticsModalOpen} onClose={() => setAnalyticsModalOpen(false)} />
      <SettingsModal isOpen={settingsModalOpen} onClose={() => setSettingsModalOpen(false)} />
    </nav>
  )
}

export default BottomNavigation

