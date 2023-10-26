
const PayDocker = () => {

  return (
    <>    
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      }}>
      <div className='inp_bar' style={{
        borderTopLeftRadius: 'var(--radius)',
        borderTopRightRadius: 'var(--radius)',
        }}>
        
        <button className='icon_circle'>
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
          >
            <circle cx="256" cy="128" r="128"></circle>
            <path d="M256 298.667c-105.99.118-191.882 86.01-192 192C64 502.449 73.551 512 85.333 512h341.333c11.782 0 21.333-9.551 21.333-21.333-.117-105.99-86.009-191.883-191.999-192z"></path>
          </svg>
        </button>

        <input type="text" name="recepient" id="recepient" placeholder="username or email"/>


        <button style={{marginRight: '.7rem'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 24 24"
            fill="var(--color-off)"
          >
            <path d="M22.5 18a1.5 1.5 0 01-1.061-.44l-7.671-7.671a2.5 2.5 0 00-3.536 0L2.57 17.551A1.5 1.5 0 01.449 15.43l7.662-7.662a5.505 5.505 0 017.778 0l7.672 7.672A1.5 1.5 0 0122.5 18z"></path>
          </svg>
        </button>
      </div>

      <div className='inp_bar' style={{
        borderBottomLeftRadius: 'var(--radius)',
        borderBottomRightRadius: 'var(--radius)',
        }}>
        <button className='icon_circle'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path d="M22.5 10.5H22v-9c0-.83-.67-1.5-1.5-1.5S19 .67 19 1.5v9h-6.18L6.95 1.24A2.672 2.672 0 003.93.11 2.667 2.667 0 002 2.69v7.81h-.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H2v9c0 .83.67 1.5 1.5 1.5S5 23.33 5 22.5v-9h6.18l5.87 9.26a2.672 2.672 0 003.02 1.13A2.667 2.667 0 0022 21.31V13.5h.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zM5 10.5V3.76l4.27 6.74H5zm14 9.74l-4.27-6.74H19v6.74z"></path>
          </svg>
        </button>

        <input type="text" name="amount" id="amount" placeholder="00.00"/>
        
        <button className='btn_pri'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path d="M13.595 23.999c-.229 0-.455-.021-.674-.061-1.467-.267-2.947-1.463-2.947-3.532v-6.394H3.595c-2.071.001-3.267-1.48-3.534-2.948-.267-1.467.331-3.273 2.268-4.003L18.723.268c1.473-.555 3.047-.216 4.136.874a3.829 3.829 0 01.886 4.105l-6.83 16.457c-.611 1.621-2.011 2.295-3.319 2.295z"></path>
          </svg>
        </button>
      </div>
    </div>
    </>
  )
}

export default PayDocker