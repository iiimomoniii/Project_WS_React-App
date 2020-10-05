import React, { Component } from "react";
import logo from "./logo.svg";
//ทำ route เพื่อ link ไปหน้าอื่น
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
//จะใช้ IndexPage ไป render notes โดยส่งค่า notes ไปยัง IndexPage ภายใต้ state
import IndexPage from "./pages/index";
//จะใช้ ShowPage เพื่อ render รายละเอียด 
import ShowPage from "./pages/show";
//จะใช้ NavBar เพื่อใช้ link ไปยัง index.js
import NavBar from './components/navbar';
//จะใช้ NewPage สร้าง note ใหม่ว
import NewPage from './pages/new';

import DB from './db';

class App extends Component {
  //state นั้นเสมือนเป็น data ที่มีการใช้แค่ภายใน Component นั้นๆ
  state = {
    db : new DB(),
    notes : {},
    loading : true
  };

  async componentDidMount() {
    const notes = await this.state.db.getAllNotes();

    this.setState({
        notes,
        loading : false
      });
  }

  handleSave = async (note) => {
    let { id } = await this.state.db.createNote(note);
    const { notes } = this.state;

    this.setState({
      notes : {
        ...notes,
        [id] : note
      }
    })
    return id;
  }

  renderContent(){
    if (this.state.loading) {
      return <h2>Loading...</h2>
    }
    return (
      <div className="app-content">
       {/* การ pass ข้อมูล โดยใช้ props ซึ่ง ข้อมูลจะถูกห่อไว้ใน state  */}
       <Route exact path="/" component={(props) => (<IndexPage {...props} notes={this.state.notes} />)}></Route>
       {/* click เลือก title เพื่อจะ show รายระเอียด โดยใช้ id  */}
       <Route exact path="/notes/:id" component={(props) => (<ShowPage {...props } notes={this.state.notes[props.match.params.id]} />)}></Route>
       <Route exact path="/new" component={(props) => <NewPage { ...props} onSave={this.handleSave}/>} ></Route>        
      </div>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          {this.renderContent()}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
