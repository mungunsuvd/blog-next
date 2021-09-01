import React, { Component } from "react";

import { Form, Card } from "react-bootstrap";
import { withRouter } from "next/router";

import ArticleEditor from "../../components/editor/editor";
import Button from "../../components/button";

class Edtr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }
  handleEditorContent = (content) => {
    this.setState({
      body: content,
      articleUpdated: true,
    });
  };

  submitForm = async (event) => {
    event.preventDefault();
    let article = await apiClient.saveArticle({
      title: this.state.title,
      body: JSON.stringify(this.state.body),
    });
    this.props.router.push(`/articles/${article.slug}`);
  };

  render() {
    return (
      <div className="row">
        <div className="col-8">
          <br />
          <br />
          <br />

          <Form.Group>
            <Card className="p-2">
              <ArticleEditor handleContent={this.handleEditorContent} />
            </Card>
          </Form.Group>
          <br />
          <div className="text-right">
            <Button value="Post" className="btn-dark" />
          </div>
        </div>
      </div>
    );
  }
}
export default Edtr;
