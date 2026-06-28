import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StatCard from './StatCard'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import { ThemeContext } from './ThemeContext.jsx'

function App() {
  const [stats, setStats] =useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDark, setIsDark] = useState(false)


  
    {
  useEffect(() => {
    setTimeout(() => {
      setStats([
        { id: 1, label: 'Total Users', value: 1204 },
        { id: 2, label: 'Revenue', value: 8940},
        { id: 3, label: 'Active Sessions', value: 312}, 
      ]) 
      setIsLoading(false)
    }, 1000)
  }, [])

  const chartData = [
    { day: 'Mon', users: 980 },
    { day: 'Tue', users: 1100 }, 
    { day: 'Wed', users: 1050 },
    { day: 'Thu', users: 1203 },
    { day: 'Fri', users: 1300 },
  ]


  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
    <div>
      <h1>PulseBoard</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
        <StatCard
          label="Total Users"
          value={stats.find(s => s.id === 1).value}
          onRefresh={() => setStats(stats.map(stat =>
          stat.id === 1 ? { ...stat, value: Math.floor(Math.random() * 2000) } : stat
        ))}
    />
    <StatCard
      label="Total Revenue"
      value={stats.find(s => s.id === 2).value}
      onRefresh={() => setStats(stats.map(stat =>
        stat.id === 2 ? { ...stat, value: Math.floor(Math.random() * 2000) } : stat
      ))}
    />
    <StatCard
      label="Total Active Sessions"
      value={stats.find(s => s.id === 3).value}
      onRefresh={() => setStats(stats.map(stat =>
        stat.id === 3 ? { ...stat, value: Math.floor(Math.random() * 500) } : stat
      ))}
    />
    <LineChart width={500} height={300} data={chartData}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="users" stroke="#8884d8" />
    </LineChart>
  </>
  )}
    </div>
    </ThemeContext.Provider>
  )
}

}


export default App
