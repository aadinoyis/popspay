import dynamic from 'next/dynamic';
const HankoAuth = dynamic(() => import('../components/HankoAuth'), { ssr: false })


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