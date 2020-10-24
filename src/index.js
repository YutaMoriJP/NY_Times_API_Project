import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';

class Parent extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'));
