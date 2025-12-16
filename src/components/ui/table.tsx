import * as React from "react"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className = "", ...props }, ref) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)
  const [showLeftIndicator, setShowLeftIndicator] = React.useState(false)
  const [showRightIndicator, setShowRightIndicator] = React.useState(true)

  React.useEffect(() => {
    const updateIndicators = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        setShowLeftIndicator(scrollLeft > 10)
        setShowRightIndicator(scrollLeft < scrollWidth - clientWidth - 10)
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      updateIndicators()
      container.addEventListener('scroll', updateIndicators)
      window.addEventListener('resize', updateIndicators)
      
      return () => {
        container.removeEventListener('scroll', updateIndicators)
        window.removeEventListener('resize', updateIndicators)
      }
    }
  }, [])

  return (
    <div className="relative w-full">
      {/* Scroll indicators for mobile */}
      {showLeftIndicator && (
        <div className="md:hidden absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-bg-secondary via-bg-secondary/80 to-transparent pointer-events-none z-10 transition-opacity duration-300" />
      )}
      {showRightIndicator && (
        <div className="md:hidden absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-bg-secondary via-bg-secondary/80 to-transparent pointer-events-none z-10 transition-opacity duration-300" />
      )}
      
      <div 
        ref={scrollContainerRef}
        className="relative w-full overflow-x-auto table-scroll md:mx-0 md:px-0"
      >
        <div className="inline-block min-w-full align-middle">
          <table
            ref={ref}
            className={`w-full caption-bottom text-sm sm:min-w-[640px] md:min-w-full ${className}`}
            {...props}
          />
        </div>
      </div>
    </div>
  )
})
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className = "", ...props }, ref) => (
  <thead ref={ref} className={`bg-bg-tertiary [&_tr]:border-none ${className}`} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className = "", ...props }, ref) => (
  <tbody
    ref={ref}
    className={`bg-bg-secondary [&_tr:last-child]:border-b-0 mobile-flex-col gap-6 sm:gap-0 ${className}`}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className = "", ...props }, ref) => (
  <tr
    ref={ref}
    className={`border-b border-border-primary transition-colors active:bg-bg-tertiary touch-manipulation mobile-flex-row ${className}`}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className = "", ...props }, ref) => (
  <th
    ref={ref}
    className={`py-3 px-0 sm:px-4 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider border-b border-border-primary whitespace-nowrap touch-manipulation ${className}`}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className = "", ...props }, ref) => (
  <td
    ref={ref}
    className={`px-3 sm:px-4 py-3.5 sm:py-4 text-sm text-text-primary min-w-[120px] touch-manipulation ${className}`}
    {...props}
  />
))
TableCell.displayName = "TableCell"

export {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
}

