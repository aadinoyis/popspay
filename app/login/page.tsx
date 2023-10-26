import dynamic from 'next/dynamic';
// import HankoAuth from '../middleware/HankoAuth';
const HankoAuth = dynamic(() => import('../components/HankoAuth'), { ssr: false })

export default function LoginPage() {
 return (
   <HankoAuth />
 );
}