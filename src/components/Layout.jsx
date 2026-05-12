import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Dashboard', testId: 'nav-dashboard' },
  { to: '/analytics', label: 'Analytics', testId: 'nav-analytics' },
  { to: '/editor', label: 'Editor', testId: 'nav-editor' },
  { to: '/settings', label: 'Settings', testId: 'nav-settings' },
]

export default function Layout({ children }) {
  return (
    <div className="app-shell" data-testid="app-shell">
      <header>
        <h1 data-testid="app-title">Code Splitting Benchmark</h1>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} data-testid={link.testId}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
