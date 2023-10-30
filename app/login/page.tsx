import dynamic from 'next/dynamic';
const HankoAuth = dynamic(() => import('../utils/HankoAuth'), { ssr: false })


export default function LoginPage() {
 return (
  <div className='auth'>
    <div style={{
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
    }}>
      <HankoAuth />
    </div>
  </div>
 );
}