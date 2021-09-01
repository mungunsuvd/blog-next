import React, { Component } from "react";

import { MyCoolButton } from "./MyCoolButton";

class Comment extends Component {
  state = {
    publisher: "",
    comment: "",
  };

  bichih = (e) => {
    this.setState({ comment: e.target.value });
  };

  render() {
    // console.log("Comment Компонент");

    return (
      <div>
        <div>Comment</div>
        <div>Зохиогч: {this.props.zohiogch}</div>
        <textarea onChange={this.bichih}></textarea>
        <br />
        <div>
          <MyCoolButton
            zohiogch={this.props.zohiogch}
            comment={this.state.comment}
            text="post"
          />
        </div>
      </div>
    );
  }
}

export default Comment;
