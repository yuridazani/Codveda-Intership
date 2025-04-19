import TaskItem from './TaskItem'

const TaskList = ({ tasks, toggleTask, deleteTask, editTask }) => {
  // Pisahkan tugas yang sudah selesai dan belum selesai
  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  if (tasks.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        backgroundColor: 'white',
        padding: '32px 16px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        color: '#6b7280'
      }}>
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#84cc16" 
          strokeWidth="1"
          style={{ margin: '0 auto 16px' }}
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <p style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px' }}>
          No eco-tasks yet! ♻️
        </p>
        <p style={{ fontSize: '14px' }}>
          Start by adding your first recycling goal above!
        </p>
      </div>
    );
  }

  return (
    <div>
      {activeTasks.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ 
            fontSize: '14px', 
            color: '#166534',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Active Tasks ({activeTasks.length})
          </h3>
          <div>
            {activeTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))}
          </div>
        </div>
      )}
      
      {completedTasks.length > 0 && (
        <div>
          <h3 style={{ 
            fontSize: '14px', 
            color: '#065f46',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Completed Tasks ({completedTasks.length})
          </h3>
          <div>
            {completedTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskList