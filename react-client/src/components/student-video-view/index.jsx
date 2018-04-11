import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import VideoPlayer from './VideoPlayer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }
  




  render () {    
    return (<div>
      {/* <h1>Item List</h1> */}
      {/* <List items={this.state.items}/> */}
      <VideoPlayer/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));