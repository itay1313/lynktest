import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HelpModal } from './HelpModal'
import { AnalyticsModal } from './AnalyticsModal'
import { SettingsModal } from './SettingsModal'
import { ProfileModal } from './ProfileModal'

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
  const [profileModalOpen, setProfileModalOpen] = useState(false)

  const navItems: NavItem[] = [
    {
      id: 'questions',
      label: 'Questions',
      path: '/',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 'analytics',
      label: 'Analytics',
      onClick: () => setAnalyticsModalOpen(true),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
      onClick: () => setSettingsModalOpen(true),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'help',
      label: 'Help',
      onClick: () => setHelpModalOpen(true),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'profile',
      label: 'Profile',
      onClick: () => setProfileModalOpen(true),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
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
                  w-14 h-14 rounded-xl
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
      <ProfileModal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} />
    </nav>
  )
}

export default BottomNavigation

