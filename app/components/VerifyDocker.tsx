
const Verify = () => {
  return (
    <div className="docker">
      <div className="docker_box">
        <div style={{
          marginBottom: '2rem'
          }}>
          <h3 style={{
            color: 'var(--color-white)',
            fontSize: '1.4rem',
            textAlign: 'center',
          }}>Verify</h3>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '.5rem',
          color: 'var(--color-off)',
          marginBottom: '2rem',
        }}>
          <input type="number" name="passcode" id="passcode" className="passcode_inp"/>
          <input type="number" name="passcode" id="passcode" className="passcode_inp"/>
          <input type="number" name="passcode" id="passcode" className="passcode_inp"/>
          <input type="number" name="passcode" id="passcode" className="passcode_inp"/>
        </div>

        <div style={{
          display: 'grid',
          placeItems: 'center',
          color: 'var(--color-off)'
        }}>
          <span><strong>Enter your 4 digit code</strong></span>
        </div>
      </div>
    </div>
  )
}

export default Verify