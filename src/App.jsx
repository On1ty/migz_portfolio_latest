import "./App.css";
import LeftSideNav from "./components/LeftSideNav/LeftSideNav";
import Main from "./components/Main/Main";
import MobileNav from "./components/MobileNav/MobileNav";
import RightSideNav from "./components/RightSideNav/RightSideNav";

function App() {
  return (
    <div className="container">
      <LeftSideNav />
      <Main />
      <RightSideNav />
      <MobileNav />
    </div>
  );
}

export default App;
