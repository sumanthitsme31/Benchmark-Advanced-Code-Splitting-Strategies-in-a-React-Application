import { useEffect, useRef } from 'react'
import { Chart, CategoryScale, LinearScale, LineController, LineElement, PointElement } from 'chart.js'

Chart.register(CategoryScale, LinearScale, LineController, LineElement, PointElement)

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const data = [8, 11, 7, 12, 10]

export default function QuickReportModal({ onClose }) {
  const chartRef = useRef(null)

  useEffect(() => {
    if (!chartRef.current) {
      return undefined
    }

    const chart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Quick Report',
            data,
            borderColor: '#2563eb',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })

    return () => chart.destroy()
  }, [])

  return (
    <div className="modal-backdrop" data-testid="quick-report-modal">
      <div className="modal-card">
        <h3>Quick Report</h3>
        <div className="chart-wrap">
          <canvas ref={chartRef} data-testid="quick-report-chart" />
        </div>
        <button type="button" onClick={onClose} data-testid="close-report-button">
          Close
        </button>
      </div>
    </div>
  )
}
