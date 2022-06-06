import {Header, Footer} from "components/global"


interface LayoutInterface {
  children: React.ReactNode
}

function Layout({ children }: LayoutInterface) {
  return (
    <div className="font-manrope" >
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
