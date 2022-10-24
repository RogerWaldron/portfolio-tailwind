import Link from "next/link"

import { useMyContext } from "../../context/ContextProvider"
import { navData } from "../../config/data"

import Socials from "../Socials"

type NavLinkProps = {
  page: string
  selectedPage: string
  setSelectedPage: (v: string) => void
}

const NavLink = ({page, selectedPage, setSelectedPage}: NavLinkProps) => {
  return (
    <li>
      <Link href={`#${page}`}>
        <a className="text-xl font-semibold text-neutral-700 hover:text-neutral-400">{page}</a>
      </Link>
    </li>
  )
}

const Nav = () => {
  const myContext = useMyContext()
  return (
    <nav className="w-full py-6 ">
      <div className="flex items-center justify-between w-5/6 mx-auto">
        <h4 className="text-3xl font-bold">RW</h4>
        <div className="flex items-center justify-end space-x-8">
          { navData.map((item, index) => (
            <ul key={item.page} >       
              <NavLink
                page={item.page} 
                selectedPage={myContext.selectedPage} 
                setSelectedPage={myContext.setSelectedPage} 
              />
            </ul>
            ))
          }
        </div>
        <Socials />
      </div>
    </nav>
  )
};

export default Nav;
