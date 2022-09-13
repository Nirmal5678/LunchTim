import { render } from "react-dom";
import "./styles.css";

export default function App() {
  return <div className="App"></div>;
}
const date = new Date();
const hour = date.getHours();

export function BTime() {
  if (hour < "12") {
    return <h1 class="Breakfast">Breakfast Time!!</h1>;
  } else if (hour > "18") {
    return <h1 class="Lunch">Lunch Time!!</h1>;
  } else {
    return <h1 class="Dinner">Dinner Time!!</h1>;
  }
}
