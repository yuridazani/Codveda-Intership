import { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('eco-tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('eco-tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    if (!text.trim()) return
    setTasks([{
      id: Date.now(),
      text,
      completed: false,
      date: new Date().toLocaleString('id-ID', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      })
    }, ...tasks])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ))
  }

  // Hitung jumlah tugas yang sudah selesai
  const completedCount = tasks.filter(task => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div style={{
      backgroundColor: '#f0fdf4',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <Header />
      <main style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px 16px'
      }}>
        <TaskForm addTask={addTask} />
        
        {tasks.length > 0 && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
            backgroundColor: 'white',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Completed: <strong>{completedCount}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Pending: <strong>{pendingCount}</strong></span>
            </div>
          </div>
        )}
        
        <TaskList 
          tasks={tasks} 
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
        
        {tasks.length > 0 && (
          <div style={{
            marginTop: '20px',
            textAlign: 'center',
            fontSize: '13px',
            color: '#059669'
          }}>
            <p>Keep up your eco-friendly habits! 🌱</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App