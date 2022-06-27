import React from 'react'
import { useAuth } from '../../contexts/auth-context';

export default function Home() {
  const auth = useAuth();

  const logoutHandler = () => {
    auth.logoutHandler();  
  };
  return (
    <div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}
