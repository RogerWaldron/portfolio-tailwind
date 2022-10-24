import Nav from "../Nav"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="fixed top-0 left-0 z-40 flex items-center w-full">
      <div className="container flex items-center justify-between h-full mx-auto">
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div>
          
        </div>
        
      </div>
    </header>
  )
}

export default Header