import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import ContactMe from "./Components/ContactMe/ContactMe";
import CopyRight from "./Components/CopyRight/CopyRight";
import Hobbies from "./Components/Hobbies/Hobbies";
import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation";
import Contact from "./Components/Contact/Contact";
function App() {

  return (
    <div className="App">
        <BackgroundAnimation />
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Hobbies />
        <Contact />
        <ContactMe />
        <CopyRight />
    </div>
  );
}

export default App;
