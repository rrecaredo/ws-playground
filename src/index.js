import './some-element'
import React from 'react';
import ReactDOM from 'react-dom'

class Main extends React.Component {
  render() {
    return (<some-element prop1="Random Binding Value"></some-element>);
  }
}

ReactDOM.render(<Main></Main>, document.getElementById('container'));