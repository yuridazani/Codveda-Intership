import { useState } from 'react'

const TaskItem = ({ task, toggleTask, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(task.text)

  const handleEdit = () => {
    if (isEditing) {
      if (!editedText.trim()) return
      editTask(task.id, editedText)
    }
    setIsEditing(!isEditing)
  }

  // Kecilkan ukuran ikon dan perbaiki tampilan checkbox
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 mb-2" style={{
      borderLeftColor: task.completed ? '#86efac' : '#22c55e',
      backgroundColor: task.completed ? '#f0fdf4' : 'white',
      opacity: task.completed ? 0.85 : 1,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          {/* Checkbox yang lebih kecil dan visual */}
          <button
            onClick={() => toggleTask(task.id)}
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              border: '2px solid',
              borderColor: task.completed ? '#22c55e' : '#86efac',
              backgroundColor: task.completed ? '#22c55e' : 'transparent',
              marginRight: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: 0
            }}
          >
            {task.completed && (
              <svg 
                width="10" 
                height="10" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </button>
          
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              style={{
                flex: 1,
                padding: '4px',
                borderBottom: '1px solid #86efac',
                outline: 'none'
              }}
              autoFocus
            />
          ) : (
            <span style={{ 
              flex: 1,
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#6b7280' : '#1f2937'
            }}>
              {task.text}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {/* Tombol edit yang lebih kecil */}
          <button
            onClick={handleEdit}
            style={{
              padding: '4px',
              borderRadius: '4px',
              backgroundColor: 'transparent',
              color: isEditing ? '#16a34a' : '#9ca3af',
              cursor: 'pointer',
              border: 'none'
            }}
          >
            {isEditing ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            )}
          </button>
          
          {/* Tombol hapus yang lebih kecil */}
          <button
            onClick={() => deleteTask(task.id)}
            style={{
              padding: '4px',
              borderRadius: '4px',
              backgroundColor: 'transparent',
              color: '#f87171',
              cursor: 'pointer',
              border: 'none'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18"></path>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '8px', 
        fontSize: '12px', 
        color: '#6b7280',
        display: 'flex',
        alignItems: 'center' 
      }}>
        <svg 
          width="12" 
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          style={{ marginRight: '4px' }}
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        {task.date}
      </div>
    </div>
  )
}

export default TaskItem