import { useState } from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Dashboard } from './routes/Dashboard';
import Home from './routes/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignedOut>
        <Dashboard />
      </SignedOut>
      <SignedIn>
        <Home />
      </SignedIn>
    </>
  )
}

export default App
