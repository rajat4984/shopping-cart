import Footer from './Components/Footer';
import DisplaySection from './Components/MainPage/DisplaySection';
import MjSection from './Components/MainPage/MjSection';
import Navbar from './Components/Navbar';
import './Styles/App.css'

function App() {
  return (
    <div className="App">
      <Navbar brand="Nike"/>
      <DisplaySection/>
      <MjSection/>
      <Footer footerText = "Made by Rajat "/>
    </div>
  );
}

export default App;
