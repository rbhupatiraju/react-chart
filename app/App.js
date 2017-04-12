import React, {Component} from 'react';
import styles from './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}
