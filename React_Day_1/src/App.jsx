import Button from "./Button"
import CssFile from "./CssFile"
import Dashboard from "./Dashboard"
import { EventComponent } from "./EventComponent"
import Greeting from "./Greeting"
import NewComponent from "./NewComponent"
import Tailwind from "./Tailwind"


function App() {
  return (
    <> 
     <h1 className="react-title">My React Day-2</h1>
     <Greeting />
     <NewComponent />
     <EventComponent />
     <CssFile />
     <Button />
     <Tailwind />
     <Dashboard />
    </>
  )
}

export default App
