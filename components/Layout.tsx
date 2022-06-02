import Header from "./Header"

interface LayoutInterface {
  children: React.ReactNode
}

function Layout({ children }: LayoutInterface) {
  return (
    <div className="font-manrope" >
      <Header />
      {children}
    </div>
  )
}

export default Layout
