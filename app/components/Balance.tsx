const Balance = () => {
  return (
    <div style={{
      color: 'var(--color-white)',
      textAlign: 'center',
    }}>

      <div style={{position: 'relative'}}>
        <span style={{
          fontSize: '4rem',
          fontWeight: '300',
        }}>9,000</span>
        <span>NGN</span>

        <button style={{
          position: 'absolute',
          content: '',
          top: '0',
          right: '0',
          background: 'var(--color-main)',
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600',
          borderRadius: '4px 16px 4px 4px'
          }}>+</button>
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