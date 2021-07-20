import "./App.scss"
import Navigation from "./layout/Navigation/Navigation"
import Footer from "./layout/Footer/Footer"
import Routes from "./routes/Routes"

function App() {
  return (<>
    <Navigation />
    <main>
      <Routes />
    </main>
    <Footer />
  </>)
}

export default App
