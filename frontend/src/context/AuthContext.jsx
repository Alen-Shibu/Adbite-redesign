import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  // We don't store the token — the httpOnly cookie is managed by the browser.
  // We just track whether the user has logged in during this session.
  const [isAuth, setIsAuth] = useState(
    () => sessionStorage.getItem('adbite_authed') === 'true'
  )

  const login  = () => { sessionStorage.setItem('adbite_authed', 'true');  setIsAuth(true)  }
  const logout = () => { sessionStorage.removeItem('adbite_authed');        setIsAuth(false) }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
