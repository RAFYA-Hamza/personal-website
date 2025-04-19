import { useState } from "react";

import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Work from "./components/Work";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  const savedTheme = localStorage.getItem("theme") || "light";
  console.log(savedTheme);

  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
  }

  function handleClick(url) {
    window.open(url, "_blank");
  }

  return (
    <>
      <Header theme={theme} onSelect={handleTheme} />
      <Intro onClickButton={handleClick} />
      <About />
      <Skills />
      <Experiences />
      <Work />
      <ContactMe onClickButton={handleClick} />
      <Footer />
    </>
  );
}

export default App;
