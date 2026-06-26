
function StatCard({ label, value, onRefresh}) {
    return (
        <div className="stat-card">
            <p className="stat-label">{label}</p>
            <p className="stat-value">{value}</p>
            <button onClick={onRefresh}>Refresh</button>
        </div>
    )
}

export default StatCard