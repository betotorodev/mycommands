import { Navbar } from "./navbar"

export const Layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      {children}
      <footer style={{position: 'relative'}}>
        <Navbar />
      </footer>
    </>
  )
}
