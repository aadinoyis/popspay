import Image from "next/image"

const Nav = () => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div>
        <span style={{color: 'var(--color-white)'}}>P O P S </span>
        <span style={{color: 'var(--color-main)'}}>P A Y</span>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
        }}>
        <button style={{
          background: 'var(--color-main)',
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600',
          borderRadius: '4px 16px 4px 4px'
          }}>
            +
        </button>

        <button style={{
          background: 'var(--color-white)',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '1px solid var(--color-off)'
          }}>
            <Image src={'/images/medium-shot-girl-relaxing-outdoors.jpg'} alt="user" width={1000} height={1000} style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}/>
        </button>
      </div>
    </div>
  )
}

export default Nav