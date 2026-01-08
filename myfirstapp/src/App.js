import LicenseUserCard from "./components/LicenseUserCard";
import Student from "./components/Student";
import "./App.css";

function App() {
  return (
    <>
      <h1>Task 1</h1>
      <h3>Hello World</h3>
      <br />
      <h1>Task 3</h1>
      <LicenseUserCard />
      <br />
      <h1>Task 5</h1>
      <Student
        name="Dhruv"
        rollno="80"
        div="D"
        course="Computer Science"
        college="IIT Madras"
        age="19"
      />
    </>
  );
}

export default App;
