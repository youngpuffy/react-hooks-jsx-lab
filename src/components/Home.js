import React from "react";
import { name, city } from "../data/data.js";

 const Color = {
  color: 'firebrick'
 }
function Home() {
  // update the JSX being returned!
  return (
  <div id="home">
    <h1 style={Color}> {name} is a Web Developer from {city}</h1>
  </div>
  );
}

export default Home;
