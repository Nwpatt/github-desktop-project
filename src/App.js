import React from "react";
import Banner from "./banner";
import { Calculator2 } from "./calculator";
import { EventData2 } from "./event-data";
import { Header,Content,Footer } from "./func-components";
import RefsFunc from "./refs-func";  
import Calendar from "./class-components";

function App() {
  return (
    <>
      <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Banner/>
      <Calculator2/>
      <EventData2/>
      <RefsFunc/>
      <Footer/>
    </>
  )
}

export default App
