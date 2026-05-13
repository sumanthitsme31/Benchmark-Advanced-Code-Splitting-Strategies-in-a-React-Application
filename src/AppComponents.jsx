import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardWithModal from './pages/DashboardWithModal'
import Analytics from './pages/Analytics'
import Editor from './pages/Editor'
import Settings from './pages/Settings'

export default function AppComponents() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardWithModal />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
