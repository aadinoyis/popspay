'use client'
import { useSearchParams } from "next/navigation"
import { RoundSpinner } from "./Loader"
import { useEffect, useState } from "react"

const Accepted = () => {
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
        }}>Awwn!</h3>
      </div>

      <div style={{
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        color: 'var(--color-off)'
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
          <path d="M12 0C5.373 0 0 5.373 0 12c0 4.223 2.186 7.929 5.483 10.067a6.637 6.637 0 01-.475-2.487V16c0-1.654 1.346-3 3-3 .646 0 1.246.205 1.736.555l2.227-2.227c.536-.535 1.246-.828 2-.828s1.463.293 1.998.826c.209.209.379.444.51.693a2.812 2.812 0 012.337.806 2.831 2.831 0 01.193 3.79 2.797 2.797 0 01.592 3.595 2.403 2.403 0 01-.451.604l-2.022 2.022c4.059-1.924 6.874-6.047 6.874-10.838C24 5.373 18.627 0 12 0zm-2 10a1 1 0 01-1-1c0-1.054-.679-2-1-2s-1 .946-1 2a1 1 0 01-2 0c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 01-1 1zm8 0a1 1 0 01-1-1c0-1.054-.679-2-1-2s-1 .946-1 2a1 1 0 01-2 0c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 01-1 1z"></path>
          <path d="M13.97 12.5a.825.825 0 00-.585.242l-4.377 4.377V16a1 1 0 00-2 0v3.58c0 .811.186 1.625.612 2.316a4.34 4.34 0 003.722 2.102c1.11 0 2.219-.422 3.064-1.267l3.334-3.334c.069-.069.09-.107.092-.136a.818.818 0 00-.651-1.313.825.825 0 00-.585.242l-1.84 1.84-.985-.985 3.631-3.631a.829.829 0 00-1.17-1.171l-3.634 3.634-1.002-1.002 2.961-2.961a.829.829 0 00-.585-1.413z"></path>
        </svg>

        <span><strong>Request was accepted</strong></span>
      </div>
    </div>
  </div>
  )
}

const Declined = () => {
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
        }}>Ouch!</h3>
      </div>

      <div style={{
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        color: 'var(--color-off)'
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
          <path d="M12 0C5.373 0 0 5.373 0 12c0 .565.053 1.116.128 1.66.318-1.249 1.202-2.683 1.799-3.391a.754.754 0 011.151-.004C3.816 11.128 5 13.097 5 14.5A2.5 2.5 0 012.5 17a2.48 2.48 0 01-1.677-.658C2.565 20.82 6.906 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zM6 9a1 1 0 01-.274-1.962c.965-.275 1.977-.941 2.46-1.619a1 1 0 111.628 1.163c-.746 1.045-2.135 1.979-3.54 2.381a1.048 1.048 0 01-.275.038zm1 3.5a1.5 1.5 0 113.001.001A1.5 1.5 0 017 12.5zm8.802 6.097a.998.998 0 01-1.399.205C14.396 18.797 13.289 18 12 18s-2.396.797-2.407.805a.999.999 0 01-1.19-1.607C8.469 17.149 10.035 16 12 16s3.531 1.149 3.597 1.198a.998.998 0 01.205 1.398zM15.5 14a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0115.5 14zm3.461-5.726a1 1 0 01-1.236.688c-1.404-.401-2.793-1.336-3.54-2.381a1 1 0 011.628-1.163c.484.678 1.496 1.344 2.46 1.619a1 1 0 01.687 1.236z"></path>
        </svg>

        <span><strong>Request was rejected</strong></span>
      </div>
    </div>
  </div>
  )
}

const Sent = () => {
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
        }}>Done!</h3>
      </div>

      <div style={{
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        color: 'var(--color-off)'
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
            marginBottom: '2rem'
          }}
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 4.223 2.186 7.929 5.483 10.067a6.637 6.637 0 01-.475-2.487V16c0-1.654 1.346-3 3-3 .646 0 1.246.205 1.736.555l2.227-2.227c.536-.535 1.246-.828 2-.828s1.463.293 1.998.826c.209.209.379.444.51.693a2.812 2.812 0 012.337.806 2.831 2.831 0 01.193 3.79 2.797 2.797 0 01.592 3.595 2.403 2.403 0 01-.451.604l-2.022 2.022c4.059-1.924 6.874-6.047 6.874-10.838C24 5.373 18.627 0 12 0zm-2 10a1 1 0 01-1-1c0-1.054-.679-2-1-2s-1 .946-1 2a1 1 0 01-2 0c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 01-1 1zm8 0a1 1 0 01-1-1c0-1.054-.679-2-1-2s-1 .946-1 2a1 1 0 01-2 0c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 01-1 1z"></path>
          <path d="M13.97 12.5a.825.825 0 00-.585.242l-4.377 4.377V16a1 1 0 00-2 0v3.58c0 .811.186 1.625.612 2.316a4.34 4.34 0 003.722 2.102c1.11 0 2.219-.422 3.064-1.267l3.334-3.334c.069-.069.09-.107.092-.136a.818.818 0 00-.651-1.313.825.825 0 00-.585.242l-1.84 1.84-.985-.985 3.631-3.631a.829.829 0 00-1.17-1.171l-3.634 3.634-1.002-1.002 2.961-2.961a.829.829 0 00-.585-1.413z"></path>
        </svg>

        <span>You&apos;ve given NGN 2,000 to <strong>@aadinoyis</strong></span>
      </div>
    </div>
  </div>
  )
}

const Received = () => {
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
        }}>Awwn!</h3>
      </div>

      <div style={{
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        color: 'var(--color-off)'
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
            marginBottom: '2rem'
          }}
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 4.223 2.186 7.929 5.483 10.067a6.637 6.637 0 01-.475-2.487V16c0-1.654 1.346-3 3-3 .646 0 1.246.205 1.736.555l2.227-2.227c.536-.535 1.246-.828 2-.828s1.463.293 1.998.826c.209.209.379.444.51.693a2.812 2.812 0 012.337.806 2.831 2.831 0 01.193 3.79 2.797 2.797 0 01.592 3.595 2.403 2.403 0 01-.451.604l-2.022 2.022c4.059-1.924 6.874-6.047 6.874-10.838C24 5.373 18.627 0 12 0zm-2 10a1 1 0 01-1-1c0-1.054-.679-2-1-2s-1 .946-1 2a1 1 0 01-2 0c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 01-1 1zm8 0a1 1 0 01-1-1c0-1.054-.679-2-1-2s-1 .946-1 2a1 1 0 01-2 0c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 01-1 1z"></path>
          <path d="M13.97 12.5a.825.825 0 00-.585.242l-4.377 4.377V16a1 1 0 00-2 0v3.58c0 .811.186 1.625.612 2.316a4.34 4.34 0 003.722 2.102c1.11 0 2.219-.422 3.064-1.267l3.334-3.334c.069-.069.09-.107.092-.136a.818.818 0 00-.651-1.313.825.825 0 00-.585.242l-1.84 1.84-.985-.985 3.631-3.631a.829.829 0 00-1.17-1.171l-3.634 3.634-1.002-1.002 2.961-2.961a.829.829 0 00-.585-1.413z"></path>
        </svg>

        <span>You&apos;ve received NGN 2,000 from <strong>@aadinoyis</strong></span>
      </div>
    </div>
  </div>
  )
}

const NotifyDocker = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 9000);
  }, [])

  return (
    <>
    
    {/* <Declined/> */}
    {isLoading ? <RoundSpinner/> : <Accepted/>}
    
    {/* <Sent/> */}

    {/* <Received/> */}
    </>
  )
}

export default NotifyDocker