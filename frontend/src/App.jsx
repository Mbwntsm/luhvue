import { useState } from 'react'
import { SignedIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to the app</h1>
      <SignOutButton>
        <SignInButton mode='modal'>
          <button >
            Login
          </button>
        </SignInButton>
      </SignOutButton>

      <SignedIn>
        <SignOutButton></SignOutButton>
      </SignedIn>

      <UserButton/>
    </>

  )
}

export default App
