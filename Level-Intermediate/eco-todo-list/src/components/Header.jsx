const Header = () => (
  <header style={{
    backgroundColor: '#16a34a',
    color: 'white',
    padding: '12px 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="2"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </div>
        <div>
          <h1 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            margin: 0
          }}>
            EcoRecycle
            <span style={{
              fontSize: '12px',
              fontWeight: 'normal',
              backgroundColor: 'rgba(255,255,255,0.2)',
              padding: '2px 6px',
              borderRadius: '4px',
              marginLeft: '6px'
            }}>
              Task Manager
            </span>
          </h1>
          <div style={{
            fontSize: '11px',
            opacity: 0.8
          }}>
            Organize your eco-friendly activities
          </div>
        </div>
      </div>
    </div>
  </header>
)
  
export default Header