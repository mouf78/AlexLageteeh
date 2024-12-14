import Image from "next/image";
import { staffdata } from "./data.js";
// import styles from "../styles/main.css";
import Card from "./Components/card";
import "../app/styles/globals.css";
import "../app/styles/navbar.css";

// import "../app/avatars";
export default function Page() {
  const data = staffdata || [];
  // console.log (staffdata);
  return (
    <>
      <div className="highlights">
        <h1 className="reponsive-text">Alex Lageteeh Highlights ..</h1>
        <h2>Best Seen ... Ever Green</h2>
      </div>

      <div className="cards-wraper">
        {data.map((emp) => {
          return <Card data={emp} key={emp.id} />;
        })}
      </div>
    </>
  );
}
