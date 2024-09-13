import Hero from "../Hero/Hero";
import "./Main.css";
import data from "../../data.json";

export default function Main() {
  console.log(data);

  return (
    <main className="content">
      <Hero data={data} />
    </main>
  );
}
