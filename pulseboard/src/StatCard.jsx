import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'



function StatCard({ label, value, onRefresh}) {
    const { isDark } = useContext(ThemeContext)
    return (
        <div className={isDark ? 'stat-card dark' : 'stat-card'}>
            <p className="stat-label">{label}</p>
            <p className="stat-value">{value}</p>
            <button onClick={onRefresh}>Refresh</button>
        </div>
    )
}

export default StatCard