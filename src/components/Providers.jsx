'use client'
import { ThemeProvider } from 'next-themes';

function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default Providers