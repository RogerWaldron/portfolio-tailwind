import { Children, PropsWithChildren, useState, createContext, useContext } from "react"
type Props = PropsWithChildren<{}>

type MyContextType = {
  selectedPage: string
  setSelectedPage: (v: string) => void
}

const MyContext = createContext<null  | MyContextType>(null)
export const MyContextProvider = ({ children }: Props) => {
  const [selectedPage, setSelectedPage] = useState("home")

  return <MyContext.Provider value={{selectedPage, setSelectedPage}}>{children}</MyContext.Provider>
}

export const useMyContext = () => {
  const myContext = useContext(MyContext)

  if (!myContext) throw new Error("You need to use this hook inside a context provider")

  return myContext
}

