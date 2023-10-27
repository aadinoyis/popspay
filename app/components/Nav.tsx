import Image from "next/image"

const Nav = () => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '100%',
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
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600',
          borderRadius: '4px'
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="var(--color-white)"
          >
            <path d="M7 24H5c-2.757 0-5-2.243-5-5v-2a1 1 0 112 0v2c0 1.654 1.346 3 3 3h2a1 1 0 110 2zm17-5v-2a1 1 0 10-2 0v2c0 1.654-1.346 3-3 3h-2a1 1 0 100 2h2c2.757 0 5-2.243 5-5zm0-12V5c0-2.757-2.243-5-5-5h-2a1 1 0 100 2h2c1.654 0 3 1.346 3 3v2a1 1 0 102 0zM2 7V5c0-1.654 1.346-3 3-3h2a1 1 0 100-2H5C2.243 0 0 2.243 0 5v2a1 1 0 102 0zm16 3v4c0 1.654-1.346 3-3 3H9c-1.654 0-3-1.346-3-3v-4a3.003 3.003 0 012.953-2.999l.696-1.083A1.99 1.99 0 0111.331 5h1.338c.685 0 1.313.344 1.683.919l.695 1.082A3.002 3.002 0 0118 10zm-4 2a2 2 0 10-3.999-.001A2 2 0 0014 12z"></path>
          </svg>
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