import { useState } from "react";
import "./App.scss";
import LeftSideNav from "./components/LeftSideNav/LeftSideNav";
import Main from "./components/Main/Main";
// import MobileMenu from "./components/MobileMenu/MobileMenu";
import MobileNav from "./components/MobileNav/MobileNav";
import RightSideNav from "./components/RightSideNav/RightSideNav";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <>
      <LeftSideNav />
      <Main setActiveSection={setActiveSection} />
      <RightSideNav activeSection={activeSection} />
      <MobileNav />
      {/* <MobileMenu activeSection={activeSection}/> */}
    </>
  );
}
