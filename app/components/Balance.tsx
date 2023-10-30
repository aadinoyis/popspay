const Balance = ({balance}:any) => {
  return (
    <div style={{
      color: 'var(--color-white)',
      textAlign: 'center',
      maxWidth: '100%',
    }}>

      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        }}>
        <span style={{
          
          fontWeight: '600',
        }}>NGN</span> 
        <span style={{
          fontSize: '3.2rem',
          fontWeight: '600',
        }}>{balance}.00</span>

        <div style={{
          color: 'var(--color-off)',
          width: '100%',
          display: 'flex',
          marginTop: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          gap: '2rem',
          }}>
            <button style={{display: 'flex', alignItems: 'center', gap: '1rem', letterSpacing: '2px', fontWeight: '600', color: 'var(--color-off)',}}>
              <span>WIDTHRAW</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 24 24"
                style={{fill: 'var(--color-main)', width: '1.4rem', height: '1.4rem'}}
              >
                <path d="M0 12A12 12 0 1012 0 12.013 12.013 0 000 12zm14.535-5.707l3.586 3.586a3 3 0 010 4.243l-3.586 3.585-.025.024a1 1 0 11-1.389-1.438L16.414 13 6 13.007a1 1 0 110-2L16.413 11l-3.292-3.293a1 1 0 111.414-1.414z"></path>
              </svg>
            </button>

            <button style={{display: 'flex', alignItems: 'center', gap: '1rem',letterSpacing: '2px', fontWeight: '600', color: 'var(--color-off)',}}>
              <span>FUND</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 24 24"
                style={{fill: 'var(--color-main)', width: '1.4rem', height: '1.4rem'}}
              >
                <path d="M0 12A12 12 0 1012 0 12.013 12.013 0 000 12zm14.535-5.707l3.586 3.586a3 3 0 010 4.243l-3.586 3.585-.025.024a1 1 0 11-1.389-1.438L16.414 13 6 13.007a1 1 0 110-2L16.413 11l-3.292-3.293a1 1 0 111.414-1.414z"></path>
              </svg>
            </button>            
          </div>
      </div>
    </div>
  )
}

export default Balance