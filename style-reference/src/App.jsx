//Components
import WindowSizeRef from './components/WindowSizeRef.jsx'
import HeaderStyleRef from './components/HeaderStyleRef.jsx'
import FooterStyleRef from './components/FooterStyleRef.jsx'
// Styling
import './App.css'
import './css/Header.css'
import './css/Footer.css'
import './css/Content.css'

function App() {
  return (
    <>
      <HeaderStyleRef />
      <WindowSizeRef />
      <FooterStyleRef />
    </>
  )
}

export default App
