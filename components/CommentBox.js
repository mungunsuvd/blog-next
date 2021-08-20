// import { Card } from "react-bootstrap";
// import { FloatingLabel } from "react-bootstrap";
// import { Form } from "react-bootstrap";
// import Button from "../components/button";
// export default () => {
//   return (
//     <div>
//       <FloatingLabel controlId="floatingTextarea">
//         <Form.Control as="textarea" placeholder="Leave a comment here" />
//       </FloatingLabel>
//       <div className="text-center">
//         <Button value="Close" className="btn-secondary" />
//         <Button value="Post" className="btn-dark" />
//       </div>
//     </div>
//   );
// };

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
        {/* <div>Зохиогч: {this.props.zohiogch}</div> */}
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
