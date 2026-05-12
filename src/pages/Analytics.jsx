import { useEffect, useRef } from 'react'
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Legend, Title, Tooltip } from 'chart.js'

Chart.register(CategoryScale, LinearScale, BarController, BarElement, Legend, Title, Tooltip)

const labels = ['Q1', 'Q2', 'Q3', 'Q4']
const points = [120, 190, 170, 230]

export default function Analytics() {
  const chartRef = useRef(null)

  useEffect(() => {
    if (!chartRef.current) {
      return undefined
    }

    const chart = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Revenue',
            data: points,
            backgroundColor: '#22c55e',
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
    <section data-testid="analytics-page">
      <h2 data-testid="analytics-title">Analytics</h2>
      <div className="chart-wrap">
        <canvas ref={chartRef} data-testid="analytics-chart" />
      </div>
    </section>
  )
}
