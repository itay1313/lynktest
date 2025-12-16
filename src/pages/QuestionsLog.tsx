import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button, H1, Body } from '../design-system'
import { Question, FilterOptions } from '../types'
import { mockQuestions } from '../data/mockData'
import BottomNavigation from '../components/BottomNavigation'
import { DataTable } from '../components/DataTable'
import { Sidebar } from '../components/Sidebar'
import { useSidebar } from '../contexts/useSidebar'
import { type ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

const QuestionsLog = () => {
  const navigate = useNavigate()
  const { isCollapsed } = useSidebar()
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({})
  const [searchQuery, setSearchQuery] = useState('')

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatResponseTime = (ms: number) => {
    if (ms < 1000) {
      return `${ms}ms`
    }
    return `${(ms / 1000).toFixed(2)}s`
  }


  const filteredQuestions = useMemo(() => {
    let filtered = [...mockQuestions]

    // Filter by date range
    if (filterOptions.startDate) {
      filtered = filtered.filter(
        (q) => new Date(q.timestamp) >= new Date(filterOptions.startDate!)
      )
    }
    if (filterOptions.endDate) {
      filtered = filtered.filter(
        (q) => new Date(q.timestamp) <= new Date(filterOptions.endDate!)
      )
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (q) =>
          q.questionText.toLowerCase().includes(query) ||
          q.userName.toLowerCase().includes(query) ||
          q.fullResponse.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [filterOptions, searchQuery])

  const columns: ColumnDef<Question>[] = [
    {
      accessorKey: 'questionText',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="h-8 p-0 flex items-center flex-row"
          >
            Question
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => (
        <div className="max-w-xs sm:max-w-md">
          <p className="text-text-primary font-medium break-words line-clamp-2 sm:line-clamp-none">
            {row.getValue('questionText')}
          </p>
        </div>
      ),
    },
    {
      accessorKey: 'timestamp',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="h-8 p-0 flex items-center flex-row"
          >
            Timestamp
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const timestamp = row.getValue('timestamp') as string
        return <span className="text-text-primary">{formatDate(timestamp)}</span>
      },
      sortingFn: (rowA, rowB) => {
        const dateA = new Date(rowA.getValue('timestamp') as string).getTime()
        const dateB = new Date(rowB.getValue('timestamp') as string).getTime()
        return dateA - dateB
      },
    },
    {
      accessorKey: 'responseTime',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="h-8 p-0 flex items-center flex-row"
          >
            Response Time
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const responseTime = row.getValue('responseTime') as number
        return (
          <span className="text-text-primary font-mono">
            {formatResponseTime(responseTime)}
          </span>
        )
      },
    },
    {
      accessorKey: 'userName',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="h-8 p-0 flex items-center flex-row"
          >
            User
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const userName = row.getValue('userName') as string
        return <span className="text-text-primary">{userName}</span>
      },
    },
  ]

  const handleRowClick = (question: Question) => {
    navigate(`/question/${question.id}`)
  }

  return (
    <div className="min-h-screen bg-bg-primary flex">
      {/* Left Sidebar */}
      <Sidebar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filterOptions={filterOptions}
        onFilterChange={setFilterOptions}
        onClearFilters={() => {
          setFilterOptions({})
          setSearchQuery('')
        }}
        totalQuestions={mockQuestions.length}
        filteredCount={filteredQuestions.length}
      />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isCollapsed ? 'lg:ml-16' : 'lg:ml-80'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
          <div className="mb-8">
            <H1 serif italic className="mb-2">
              AI Question Log
            </H1>
            <Body className="text-text-secondary">
              View and manage all questions asked to the AI system
            </Body>
          </div>

          <Card className="bg-bg-tertiary border-border-primary overflow-hidden">
            {filteredQuestions.length > 0 ? (
              <DataTable
                columns={columns}
                data={filteredQuestions}
                onRowClick={handleRowClick}
              />
            ) : (
              <div className="text-center py-12">
                <p className="text-text-secondary text-lg">No questions found matching your filters.</p>
              </div>
            )}
          </Card>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}

export default QuestionsLog
