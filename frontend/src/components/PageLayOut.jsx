
import NavBar from "../components/NavBar"
import MainFooter from "../components/MainFooter"
import { Children } from "react"
import "../styles/PageLayOut.css"

function PageLayOut({ children  }){
    return (
        <div className="page-layout">
            <nav><NavBar/></nav>
            <main>{children}</main>
            <footer><MainFooter/></footer>
        </div>
    )
}

export default PageLayOut