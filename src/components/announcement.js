import React, {Component} from "react";
import "./announcement.css";

export default class Announcement extends Component {
  render () {
    return <div className="announcement">
      <p className="announcement__text">You're ready!</p>
    </div>;
  }
}
