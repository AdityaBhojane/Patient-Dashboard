import { useAuthStore } from '@/store/authStore'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = useAuthStore((state)=>state.token);
  const navigate = useNavigate()
 
  useEffect(()=>{
    if(!token){
      navigate('/signin')
    }
  },[navigate, token])

  return (
    <>
      {children}
    </>
  )
}
