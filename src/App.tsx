import { useState } from "react";
import "./index.css";
// import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import PrimaryButton from "./components/PrimaryButton";
import SocialMediaList from "./components/SocialMediaList";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  const handleOnClick = () => {
    console.log("search pokemon...");
  };
  return (
    <>
      <NavBar />
      <SearchBar clickHandler={handleOnClick} />
      <Card />
      <PrimaryButton label="More" clickHandler={handleOnClick} />
      <Footer />
    </>
  );
}

export default App;
