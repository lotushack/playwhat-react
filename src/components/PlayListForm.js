import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor() {
    super();
    this.state ={
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  }
  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }
handleUserNameChange = (evt) => {
  this.setState({userName: evt.target.value})
}
handleSongArtistChange = (evt) => {
  this.setState({songArtist: evt.target.value})
}
handleSongTitleChange = (evt) => {
  this.setState({songTitle: evt.target.value})
}
handleSongNotesChange = (evt) => {
  this.setState({songNotes: evt.target.value})
}

  handleFormSubmit(evt){
    evt.preventDefault()
    const newSearch = {
      userName: this.state.userName,
      songArtist: this.state.songArtist,
      songTitle: this.state.songTitle,
      songNotes: this.state.songNotes
    }
  }
  render() {
    // console.log(this);
    return(
      <form onSubmit={this.addToList}>
        <div className="form-group">
          <label>User Name:</label>
          <input onChange={this.handleUserNameChange} type="text" className="form-control" placeholder="User name or Name" value={this.state.userName}></input>
        </div>
        <div className="form-group">
          <label>Artist/Band:</label>
          <input onChange={this.handleSongArtistChange} type="text" className="form-control" placeholder="Artist or Band Name" value={this.state.songArtist}></input>
        </div>
        <div className="form-group">
          <label>Song Title:</label>
          <input onChange={this.handleSongTitleChange} type="text" className="form-control" placeholder="Song Title" value={this.state.songTitle}></input>
        </div>
        <div className="form-group">
          <label>Notes about Song</label>
          <textarea onChange={this.handleSongNotesChange} className="form-control" rows="3" value={this.state.songNotes}></textarea>
        </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    )
  }

}
