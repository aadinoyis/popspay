import dynamic from 'next/dynamic';
// import HankoAuth from '../middleware/HankoAuth';
const HankoAuth = dynamic(() => import('../components/HankoAuth'), { ssr: false })

export default function LoginPage() {
 return (
  <div style={{
    padding: '1rem',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div style={{
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
    }}>
      <HankoAuth />
    </div>
  </div>
 );
}