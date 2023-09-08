import React from "react";
// import Banner from "./banner";
// import { Calculator2 } from "./calculator";
// import { EventData2 } from "./event-data";
// import { Header,Content,Footer } from "./func-components";
// import RefsFunc from "./refs-func";  
// import Calendar from "./class-components";
// import RefsArray from "./refs-array";
// import MessageBox from "./state-func";
import { userContext } from './context';
import Header from "./context-header";
import Content from "./context-content";

function App() {
  return (
    <>
      {/* <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Banner/>
      <Calculator2/>
      <EventData2/>
      <RefsFunc/> */}
      {/* <RefsArray/> */}
      {/* <RefsArray/> */}
      {/* <Footer/> */}
      {/* <MessageBox/> */}
      <userContext.Provider value={'Tom jerry'}>
        <Header/>
        <Content/>
      </userContext.Provider>
    </>
  )
}

export default App
