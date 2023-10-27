const Balance = ({onclick}:any) => {
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
          fontSize: '2.7rem',
          fontWeight: '300',
        }}>10,000.00</span>

        <button onClick={onclick} style={{
          color: 'var(--color-off)',
          width: '100%',
          display: 'flex',
          marginTop: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600',
          borderRadius: '4px',
          gap: '2rem',
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <span>ADD FUNDS  </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 24 24"
                fill="var(--color-main)"
              >
                <path d="M0 12A12 12 0 1012 0 12.013 12.013 0 000 12zm14.535-5.707l3.586 3.586a3 3 0 010 4.243l-3.586 3.585-.025.024a1 1 0 11-1.389-1.438L16.414 13 6 13.007a1 1 0 110-2L16.413 11l-3.292-3.293a1 1 0 111.414-1.414z"></path>
              </svg>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <span>WIDTHRAW FUNDS  </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 24 24"
                fill="var(--color-main)"
              >
                <path d="M0 12A12 12 0 1012 0 12.013 12.013 0 000 12zm14.535-5.707l3.586 3.586a3 3 0 010 4.243l-3.586 3.585-.025.024a1 1 0 11-1.389-1.438L16.414 13 6 13.007a1 1 0 110-2L16.413 11l-3.292-3.293a1 1 0 111.414-1.414z"></path>
              </svg>
            </div>
            {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 24 24"
        fill="var(--color-white)"
      >
        <path d="M22.5 15.5H4.267l1.612-1.64a1.5 1.5 0 10-2.14-2.1L.993 14.552a3.515 3.515 0 000 4.9l2.746 2.793a1.5 1.5 0 002.14-2.1L4.267 18.5H22.5a1.5 1.5 0 000-3zM1.5 8.5h18.233l-1.612 1.64a1.5 1.5 0 102.14 2.1l2.746-2.793a3.515 3.515 0 000-4.9l-2.746-2.789a1.5 1.5 0 00-2.14 2.1L19.733 5.5H1.5a1.5 1.5 0 000 3z"></path>
      </svg> */}
          </button>
      </div>


      {/* <button style={{
        textTransform: 'uppercase',
        color: 'var(--color-off)',
        letterSpacing: '4px',
        fontWeight: '600',
        marginTop: '1rem',
      }}>
        <span>Withdraw</span>
      </button> */}
    </div>
  )
}

export default Balance