import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Carousel />

      <Container />

      <Footer />
    </div>
  );
}

export default App;
