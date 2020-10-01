import React, { Component } from "react";
import logo from "./logo.svg";
//ทำ route เพื่อ link ไปหน้าอื่น
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
//จะใช้ IndexPage ไป render notes โดยส่งค่า notes ไปยัง IndexPage ภายใต้ state
import IndexPage from "./pages/index";

class App extends Component {
  //state นั้นเสมือนเป็น data ที่มีการใช้แค่ภายใน Component นั้นๆ
  state = {
    notes: {
      1: {
        _id: 1,
        title: "Hello World",
        body: "This is the body of my note",
        updatedAt: new Date(),
      },
      2: {
        _id: 2,
        title: "Hello World Again",
        body: "This is the body of my second note",
        updatedAt: new Date(),
      },
    },
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* ใช IndexPage */}
          <IndexPage notes={this.state.notes} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
