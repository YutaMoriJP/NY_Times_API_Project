import React from 'react';
import Input from './input';
import NYTimes from './newYorkTimes';
import HandleDisplay from './handleDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      keyword: '',
      startDate: '',
      endDate: '',
      nyTime: [],
      isFilled: false,
      error: '',
      pageCount: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }
  increaseCount() {
    if (this.state.nyTime.length === 0) {
      alert('Please make a search first');
      return;
    }
    this.setState(({ pageCount }) => ({ pageCount: pageCount + 1 }));
  }
  decreaseCount() {
    if (this.state.nyTime.length === 0) {
      alert('Please make a search first');
      return;
    } else if (this.state.pageCount >= 1) {
      this.setState(({ pageCount }) => ({ pageCount: pageCount - 1 }));
    } else {
      return;
    }
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { keyword, startDate, endDate, pageCount } = this.state;
    NYTimes.fetchCall(keyword, startDate, endDate, pageCount).then(
      result => {
        this.setState({ isLoaded: true, nyTime: result });
      },
      error => {
        this.setState({ error: error, isLoaded: true });
      }
    );
  }
  render() {
    const {
      keyword,
      startDate,
      endDate,
      nyTime,
      isLoaded,
      error,
      pageCount,
    } = this.state;
    console.log(this.state);
    return (
      <div className="container">
        <h1>New York Times Posts:</h1>
        <Input
          keyword={keyword}
          startDate={startDate}
          endDate={endDate}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="pagination">
          <p onClick={this.decreaseCount}>Left</p>
          <p onClick={this.increaseCount}>Right</p>
        </div>
        <HandleDisplay nyTime={nyTime} isLoaded={isLoaded} error={error} />
      </div>
    );
  }
  componentDidUpdate(_, prevState) {
    const { keyword, startDate, endDate, pageCount } = this.state;
    if (prevState.pageCount !== this.state.pageCount) {
      NYTimes.fetchCall(keyword, startDate, endDate, pageCount).then(
        result => {
          this.setState({ nyTime: result });
        },
        error => {
          this.setState({ error: error });
        }
      );
    }
  }
}

export default App;
