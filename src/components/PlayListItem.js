import React, { Component } from 'react';
import { newSearch } from './PlayListForm'

export default class PlayListItem extends Component {
  render(){
    const newSearch = this.props.songInfo
    console.log("newSearch", newSearch);
    return(
      <div className="card">
        <ul className="list-group m-3">
          <li className="list-group-item">User: {newSearch.userName}</li>
          <li className="list-group-item">Artist: {newSearch.songArtist}</li>
          <li className="list-group-item">Title: {newSearch.songTitle}</li>
          <li className="list-group-item">Notes: {newSearch.songNotes}</li>
        </ul>
      </div>
    )
  }
}
