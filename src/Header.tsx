import { ReactNode } from "react"


type goalsProps = {
    image:{
        src: string,
        alt:string
    },
    children:ReactNode
}

const Header = ({image,children}:goalsProps) => {
   
  return (
    <>
        <div>
        <img src={image.src} alt={image.alt} height="100px" width="100px"/>
        </div>
       <div>
       {children}
       </div>
    </>
  )
}

export default Header;