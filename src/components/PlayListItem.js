import React, { Component } from 'react';

export default class PlayListItem extends Component {
  render(){
    const { newSearch } = this.props
    console.log(this.props);
    return(
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">User: {props.userName}</li>
          <li className="list-group-item">Artist: {props.songArtist}</li>
          <li className="list-group-item">Title: {props.songTitle}</li>
          <li className="list-group-item">Notes: {props.songNotes}</li>
        </ul>
      </div>
    )
  }
}
