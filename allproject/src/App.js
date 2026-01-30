import Hello from "./Components/Hello";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Nested from "./Components/Nested";
import Greet from "./Components/Greet";
import Faculty from "./Components/Faculty";
import Parent from "./Components/Parent";
import Counter from "./Components/Counter";
import Calculator from "./Components/Calculator";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Hello />
        <Header />
        <Navbar />
        <Nested />
        <Greet name="Alice" city="New York" />
        <Greet name="Bob" city="Los Angeles" />
        <Faculty
          name="Dr. Smith"
          Department="Computer Science"
          university="MIT"
        />
        <Faculty
          name="Dr. Johnson"
          Department="Mathematics"
          university="Stanford"
        />
        <Parent name="John" city="Chicago" />
        <Counter />
        <Calculator />
        <Footer />
      </div>
    </div>
  );
}

export default App;
