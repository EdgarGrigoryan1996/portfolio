import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import ContactMe from "./Components/ContactMe/ContactMe";
import CopyRight from "./Components/CopyRight/CopyRight";
function App() {

  return (
    <div className="App">
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <ContactMe />
        <CopyRight />
    </div>
  );
}

export default App;
