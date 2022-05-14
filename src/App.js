import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import DisplaySection from "./Components/MainPage/DisplaySection";
import Navbar from "./Components/Navbar";
import Shopping from "./Components/Shopping";
import "./Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <BrowserRouter>
      <div className="App">
        <Navbar brand="Air Jordans" />
        <Routes>
          <Route path="/" element={<DisplaySection />} />
          <Route
            path="shopping"
            element={
              <Shopping shoeArray={shoeArray} shoeNameArray={shoeNameArray} />
            }
          />
          <Route
            path="cart"
            element={
              <Cart shoeArray={shoeArray} shoeNameArray={shoeNameArray} />
            }
          />
        </Routes>
        <Footer footerText="Made by Rajat " />
      </div>
    </BrowserRouter>
  );
}

export default App;
