import React, { Component } from 'react';
import './App.css';
import { Button, DatePicker, version, message,Alert } from "antd";
import "antd/dist/antd.css";

export default class App extends Component {
  state = {
    date: "",
    setDate: ""
  }
  handlechange = (value) => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    this.setState((setDate)=>({setDate:value}))
    console.log(value)
  }
  render() {
    const { date, setDate } = this.state;
    return (
      <div className="App">
        <h1>antd version: {version}</h1>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Test Button
        </Button>
        <br /><br />
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={this.handlechange} />
          <div style={{ marginTop: 16 }}>
            {/* Selected Date: {setDate ? setDate.format('YYYY-MM-DD') : 'None'} */}
            <Alert message="Selected Date" description={setDate ? setDate.format('YYYY-MM-DD') : 'None'} />

          </div>
        </div>
      </div>

    );
  }

}
