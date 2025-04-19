import { useState } from 'react'

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) {
      setError('Please enter an eco-task!')
      return
    }
    addTask(text)
    setText('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} style={{
      marginBottom: '24px',
      backgroundColor: 'white',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #d1fae5'
    }}>
      <h3 style={{
        fontSize: '16px',
        fontWeight: '500',
        marginBottom: '12px',
        color: '#166534',
        display: 'flex',
        alignItems: 'center'
      }}>
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#16a34a" 
          strokeWidth="2"
          style={{ marginRight: '6px' }}
        >
          <path d="M12 5v14"></path>
          <path d="M5 12h14"></path>
        </svg>
        Add New Eco-Task
      </h3>
      
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
            setError('')
          }}
          placeholder="Add a new eco-task..."
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #86efac',
            fontSize: '14px'
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#16a34a',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
          >
            <path d="M12 5v14"></path>
            <path d="M5 12h14"></path>
          </svg>
          Add Task
        </button>
      </div>
      
      {error && (
        <div style={{ 
          color: '#ef4444', 
          fontSize: '13px', 
          marginTop: '8px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            style={{ marginRight: '4px' }}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {error}
        </div>
      )}
    </form>
  )
}

export default TaskForm