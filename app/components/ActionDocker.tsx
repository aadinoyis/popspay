import Link from "next/link"

const ActionDocker = () => {
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
          }}>Ask/Give?</h3>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}>
          <Link href={"?n=notify"}>
          <button style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            color: 'var(--color-off)',
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              style={{
                width: '2.7rem',
                height: '2.7rem',
                fill: 'var(--color-off)',
                marginBottom: '.5rem'
              }}
            >
              <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zM7 9h3a1 1 0 010 2H7a1 1 0 010-2zm10.666 6.746A9.454 9.454 0 0112 18a9.454 9.454 0 01-5.666-2.254 1 1 0 011.332-1.492A7.509 7.509 0 0012 16a7.508 7.508 0 004.336-1.748 1 1 0 011.33 1.494zM16 11c-1.105 0-2 0-2-1a2 2 0 014 0c0 1-.895 1-2 1z"></path>
            </svg>

            
            <span style={{letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700'}}>Ask</span>
          </button>
          </Link>

          <Link href={"?n=verify"}>
          <button style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            color: 'var(--color-off)',
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              x="0"
              y="0"
              enableBackground="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              style={{
                width: '2.7rem',
                height: '2.7rem',
                fill: 'var(--color-off)',
                marginBottom: '.5rem'
              }}
            >
              <path d="M256 .824C114.678.977.153 115.502 0 256.824c12.8 339.2 499.2 339.072 512 0-.153-141.322-114.678-255.847-256-256zM106.667 240.419c5.291-112.747 122.731-112.683 128 0 0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333 0-22.485-14.507-42.667-21.333-42.667-6.827 0-21.333 20.181-21.333 42.667 0 11.782-9.551 21.333-21.333 21.333s-21.335-9.551-21.335-21.333zm270.208 101.248c-68.354 62.783-173.395 62.783-241.749 0-8.789-7.847-9.554-21.333-1.707-30.123s21.333-9.554 30.123-1.707c52.098 48.544 132.862 48.544 184.96 0 8.973-7.636 22.437-6.552 30.073 2.421 7.392 8.687 6.644 21.652-1.699 29.43v-.021zM384 261.752c-11.782 0-21.333-9.551-21.333-21.333 0-22.485-14.507-42.667-21.333-42.667S320 217.933 320 240.419c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333 0-40.363 26.283-85.333 64-85.333s64 44.971 64 85.333c-.001 11.782-9.552 21.333-21.334 21.333z"></path>
            </svg>

            <span style={{letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700'}}>Give</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ActionDocker