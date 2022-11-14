import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card";
import Cards from "./Components/Cards";

function App() {
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="profile-card">
            <div className="profile-main"></div>
            <div className="profile-menu"></div>
          </div>
          <div className="tracker">
            <Cards />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
