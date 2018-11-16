import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input } from "reactstrap";
import marked from "marked";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      markdown: ""
    };
  }

  handleInput(event) {
    this.setState({
      markdown: event.target.value
    });
  }
  render() {
    let { markdown } = this.state;
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <div />
        <div>
          <Form>
            <FormGroup>
              <Label for="userInput">User Input</Label>
              <Input
                type="textarea"
                name="text"
                id="textArea"
                value={markdown}
                onChange={this.handleInput}
              />
            </FormGroup>
          </Form>
        </div>
        <div>
          <h3>Result:</h3>
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
