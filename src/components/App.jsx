import { createRoot } from "react-dom/client"
import Main from "./Main"
import Navbar from "./Navbar"


const root = createRoot(document.getElementById("root"))


root.render(
  <>
    <Navbar/>
    <Main/>
  </>
)

