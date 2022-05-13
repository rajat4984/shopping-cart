import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import DisplaySection from "./Components/MainPage/DisplaySection";
import MjSection from "./Components/MainPage/MjSection";
import Navbar from "./Components/Navbar";
import Shopping from "./Components/Shopping";
import "./Styles/App.css";

function App() {
  let shoeArray = [
    "shoe1",
    "shoe2",
    "shoe3",
    "shoe4",
    "shoe5",
    "shoe6",
    "shoe7",
    "shoe8",
    "shoe9",
    "shoe10",
    "shoe11",
    "shoe12",
  ];

  let shoeNameArray = [
    "Air Jordan 1 Elevate Low",
    "Air Jordan 1 Retro High OG",
    "Jordan One Take 3 PF",
    "Jordan Zoom Seprate PF",
    "Air Jordan 2 SE",
    "Air Jordan 1 SE",
    "Air Jordan retro High",
    "Air Jordan 1 Elevate Low",
    "Air Jordan 1 Retro High OG",
    "Jordan One Take 3 PF",
    "Jordan Zoom Seprate PF",
    "Air Jordan 2 SE",
  ];
  return (
    <div className="App">
      <Navbar brand="Air Jordans" />
      {/* <DisplaySection/>
      <MjSection/> */}
      {/* <Shopping shoeArray = {shoeArray} shoeNameArray = {shoeNameArray} /> */}
      <Cart shoeArray = {shoeArray} shoeNameArray = {shoeNameArray} />
      <Footer footerText="Made by Rajat " />
    </div>
  );
}

export default App;
