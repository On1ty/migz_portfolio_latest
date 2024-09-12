import "./App.css";
import LeftSideNav from "./components/LeftSideNav/LeftSideNav";
import Main from "./components/Main/Main";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import MobileNav from "./components/MobileNav/MobileNav";
import RightSideNav from "./components/RightSideNav/RightSideNav";

function App() {
  return (
    <>
      <LeftSideNav />
      <Main />
      <RightSideNav />
      <MobileNav />
      <MobileMenu />
    </>
  );
}

export default App;
