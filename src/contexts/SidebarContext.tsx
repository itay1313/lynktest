import React, { useState, ReactNode } from 'react'
import { SidebarContext } from './sidebarContextConfig'

interface SidebarProviderProps {
  children: ReactNode
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem('sidebarCollapsed')
    return saved ? JSON.parse(saved) : false
  })

  const toggleSidebar = () => {
    setIsCollapsed((prev: boolean) => {
      const newValue = !prev
      localStorage.setItem('sidebarCollapsed', JSON.stringify(newValue))
      return newValue
    })
  }

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

