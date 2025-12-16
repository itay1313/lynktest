import React from 'react'

export interface TableColumn<T> {
  key: string
  header: string
  render?: (item: T) => React.ReactNode
  sortable?: boolean
}

export interface TableProps<T> {
  data: T[]
  columns: TableColumn<T>[]
  onRowClick?: (item: T) => void
  className?: string
}

/**
 * Table component - A reusable table component with customizable columns
 * 
 * @example
 * <Table
 *   data={questions}
 *   columns={columns}
 *   onRowClick={(question) => navigate(`/question/${question.id}`)}
 * />
 */
export function Table<T extends { id: string }>({
  data,
  columns,
  onRowClick,
  className = ''
}: TableProps<T>) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-border-glass">
        <thead className="backdrop-blur-xl bg-bg-glass">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider border-b border-border-glass"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="backdrop-blur-xl bg-bg-secondary divide-y divide-border-glass">
          {data.map((item) => (
            <tr
              key={item.id}
              onClick={() => onRowClick?.(item)}
              className={onRowClick ? 'hover:bg-bg-glass-hover hover:backdrop-blur-xl cursor-pointer transition-all duration-200 ease-in-out' : ''}
            >
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">
                  {column.render ? column.render(item) : String((item as Record<string, unknown>)[column.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

