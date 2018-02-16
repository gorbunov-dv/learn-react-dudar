import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Task extends Component {
  render() {
    return (
        <div className="box">
            <div className="text">Краткое описание</div>
            <button className="btn light">Редактировать</button>
            <button className="btn red">Удалить</button>
        </div>
    );
  }
}

export default Task;