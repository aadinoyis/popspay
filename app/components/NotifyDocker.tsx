
const Accepted = () => {
  return (
    <div className="docker">
    <div className="docker_box">
      <div style={{
        marginBottom: '3rem'
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
            width: '4rem',
            height: '4rem',
            fill: 'var(--color-off)',
            marginBottom: '1rem'
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

const Rejected = () => {
  return (
    <div className="docker">
    <div className="docker_box">
      <div style={{
        marginBottom: '3rem'
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
            width: '4rem',
            height: '4rem',
            fill: 'var(--color-off)',
            marginBottom: '1rem'
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
        marginBottom: '3rem'
        }}>
        <h3 style={{
          color: 'var(--color-white)',
          fontSize: '1.4rem',
          textAlign: 'center',
        }}>Yay!</h3>
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
        width: '4rem',
        height: '4rem',
        fill: 'var(--color-off)',
        marginBottom: '1rem'
      }}
    >
      <path d="M1.875 9a1 1 0 01-.992-.876l-.875-7A.997.997 0 011.124.008l7 .875A1 1 0 019 1.875C9 5.071 5.071 9 1.875 9zM21 18h-6.091c.056.157.091.324.091.5 0 .827-.673 1.5-1.5 1.5H10a1 1 0 110-2h2.222c-.135-.28-.222-.614-.222-1s.087-.72.222-1H10a1 1 0 110-2h3.5c.827 0 1.5.673 1.5 1.5 0 .176-.035.343-.091.5H21a1 1 0 10-.721-1.693 1 1 0 11-1.439-1.389A3.017 3.017 0 0121 12c1.305 0 2.407.843 2.819 2.009.111-.655.181-1.323.181-2.009 0-6.627-5.373-12-12-12-.539 0-1.066.048-1.586.117.364.498.586 1.103.586 1.758 0 2.67-1.906 5.573-4.378 7.371.047.038.101.064.141.111.358.424.755.641 1.179.643h.007c.451 0 .946-.249 1.295-.651a1.001 1.001 0 011.512 1.31C10.027 11.5 8.979 12 7.949 12H7.93c-.711-.004-1.756-.242-2.694-1.35a.974.974 0 01-.202-.448c-1.036.503-2.115.798-3.159.798-.655 0-1.26-.222-1.758-.586A12.02 12.02 0 000 12c0 6.627 5.373 12 12 12 4.645 0 8.665-2.644 10.66-6.504A2.985 2.985 0 0121 18zm-7.617-8.76a1.003 1.003 0 011.41.117c.358.424.755.641 1.179.643h.007c.451 0 .946-.249 1.295-.651a1.001 1.001 0 011.512 1.31C18.057 11.5 17.009 12 15.979 12h-.019c-.711-.004-1.756-.242-2.694-1.35a1.002 1.002 0 01.117-1.41z"></path>
    </svg>

        <span><strong>Transaction successful</strong></span>
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
        marginBottom: '3rem'
        }}>
        <h3 style={{
          color: 'var(--color-white)',
          fontSize: '1.4rem',
          textAlign: 'center',
        }}>Oops!</h3>
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
        width: '4rem',
        height: '4rem',
        fill: 'var(--color-off)',
        marginBottom: '1rem'
      }}
    >
      <path d="M12 0c-1.784 0-3.471.4-4.993 1.098C7.55 2.135 8 3.351 8 4.5 8 6.981 5.981 9 3.5 9A4.45 4.45 0 01.7 7.994 11.948 11.948 0 000 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zM5 12a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1zm10.802 6.597a.998.998 0 01-1.399.205C14.396 18.797 13.289 18 12 18s-2.396.797-2.407.805a.999.999 0 01-1.19-1.607C8.469 17.149 10.035 16 12 16s3.531 1.149 3.597 1.198a.998.998 0 01.205 1.398zM18 13h-4a1 1 0 110-2h4a1 1 0 110 2zM2.927.269A.754.754 0 014.078.265C4.816 1.129 6 3.097 6 4.5a2.5 2.5 0 11-5 0C1 3.129 2.189 1.142 2.927.269z"></path>
    </svg>

        <span><strong>Transaction declined, user not found</strong></span>
      </div>
    </div>
  </div>
  )
}
const NotifyDocker = ({ status }: any) => {

  return (
    <>
      {status == 'accepted' && <Accepted />}
      {status == 'rejected' && <Rejected />}
      {status == 'sent' && <Sent />}
      {status == 'declined' && <Declined />}
    </>
  );
};

export default NotifyDocker