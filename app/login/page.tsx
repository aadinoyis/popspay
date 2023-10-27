import dynamic from 'next/dynamic';
// import HankoAuth from '../middleware/HankoAuth';
const HankoAuth = dynamic(() => import('../components/HankoAuth'), { ssr: false })

export default function LoginPage() {
 return (
  <div style={{
    borderRadius: 'var(--radius)',
    overflow: 'hidden',
    padding: '2rem',
  }}>

    <HankoAuth />
  </div>
 );
}