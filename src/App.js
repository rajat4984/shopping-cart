import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import DisplaySection from "./Components/MainPage/DisplaySection";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import "./Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./Styles/Shopping.css";
import CartCard from "./Components/CartCard";

function App() {
  const qtyArray = {
    shoe1: 0,
    shoe2: 0,
    shoe3: 0,
    shoe4: 0,
    shoe5: 0,
    shoe6: 0,
    shoe7: 0,
    shoe8: 0,
    shoe9: 0,
    shoe10: 0,
    shoe11: 0,
    shoe12: 0,
  };
  const [qty, setQty] = useState([qtyArray]);
  const [components, setComponents] = useState([]);
  const [checkOut,setCheckOut] = useState(0);

  const addToCart = (e) => {
    const card = e.target.parentNode.parentNode.parentNode;
    const name = card.children[1].textContent;
    const image = card.children[0].getAttribute("alt");
    const key = card.getAttribute("id");
    const price = card.children[2].children[1].textContent;
    const cartQty = 1;


    const element = [
      <CartCard image={image} name={name} cartQty={cartQty} id={key} price={price} />,
    ];

    setCheckOut(prevCheckOut => prevCheckOut + parseInt(price.slice(1,4)))
    setComponents([...components, element]);
  };

  // const increaseQty = () =>{

  // }

  const shoeArray = [
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

  const shoePrice = [
    100, 200, 250, 650, 350, 700, 120, 230, 470, 670, 900, 870,
  ];

  const shoeNameArray = [
    "Air Jordan 1 Elevate Low",
    "Air Jordan 1 Retro High OG",
    "Jordan One Take 3 PF",
    "Jordan Zoom Seprate PF",
    "Air Jordan 2 SE",
    "Air Jordan 1 SE",
    "Air Jordan retro High",
    "Jordan .5 'Why Not?'",
    "Air Jordan 4 Retro",
    "Jordan 4 Retro",
    "Air Jordan 1 Low G",
    "Air Jordan XXXVI",
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
              <Card
                addToCart={addToCart}
                qty={qty}
                shoeArray={shoeArray}
                shoeNameArray={shoeNameArray}
                shoePrice={shoePrice}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                components={components}
                shoeArray={shoeArray}
                shoeNameArray={shoeNameArray}
                checkOut = {checkOut}
              />
            }
          />
        </Routes>
        <Footer footerText="Made by Rajat " />
      </div>
    </BrowserRouter>
  );
}

export default App;
