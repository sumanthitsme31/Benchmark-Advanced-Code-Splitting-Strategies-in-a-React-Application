import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const Dashboard = lazy(() => import('./pages/DashboardWithModal'))
const Analytics = lazy(() => import('./pages/Analytics'))
const Editor = lazy(() => import('./pages/Editor'))
const Settings = lazy(() => import('./pages/Settings'))

export default function AppLibSplit() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<p data-testid="route-loading">Loading page...</p>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}
