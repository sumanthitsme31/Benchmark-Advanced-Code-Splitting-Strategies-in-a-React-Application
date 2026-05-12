import { lazy, Suspense, useState, useTransition } from 'react'

const QuickReportModal = lazy(() => import('../components/QuickReportModal'))

export default function DashboardWithModal() {
  const [showModal, setShowModal] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleOpen = () => {
    startTransition(() => {
      setShowModal(true)
    })
  }

  return (
    <section data-testid="dashboard-page">
      <h2 data-testid="dashboard-title">Dashboard</h2>
      <p data-testid="dashboard-description">Open the report modal to trigger component-level splitting.</p>
      <button type="button" onClick={handleOpen} data-testid="view-report-button" disabled={isPending}>
        {isPending ? <span data-testid="button-loading-indicator">Loading...</span> : 'View Quick Report'}
      </button>
      {showModal ? (
        <Suspense fallback={<p data-testid="modal-loading">Loading report...</p>}>
          <QuickReportModal onClose={() => setShowModal(false)} />
        </Suspense>
      ) : null}
    </section>
  )
}
