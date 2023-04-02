import Header from "./Components/Header/Header";
import s from "./global.module.css"
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
    </div>
  );
}

export default App;
