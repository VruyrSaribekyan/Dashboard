import React from "react";

import Header from "../../header/Header";
import Blocks from "./Blocks";
export default function Dashboard(props) {

  return (
    <>
      <main className="main">
        <Header />
        <Blocks/>
      </main>
    </>
  );
}
