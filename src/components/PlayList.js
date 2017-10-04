import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js';

export default class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state ={
      songs:""
    }
  }
componentDidMount() {
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
        console.log("state", this.state.songs);
      })
}
fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }

  render() {
    // console.log(this.props);
    return(
      <div className="list">
        <div className="list-style">
          <button type="button" className="btn btn-success">Update List</button>
        </div>
        <div className="card-deck">
          <div className="card">
        
          </div>
        </div>
      </div>
    )
  }

}
