import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Display from "./calc-comp/Display";
import Number from "./calc-comp/Number";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      currentArray: [],
      val1: null,
      val2: 0,
      operation: ""
    };
    this.pressNumber = this.pressNumber.bind(this);
    this.pressOperation = this.pressOperation.bind(this);
    this.pressCalculate = this.pressCalculate.bind(this);
  }

  pressOperation(op) {
    if (!this.state.operation) {
      this.setState({ operation: op });
      this.setState({ val1: +this.state.currentArray });
      this.setState({ currentArray: [] });
      this.addDisplay(op);
    }
  }

  pressNumber(x) {
    this.setState({ currentArray: (this.state.currentArray += x) });
    this.addDisplay(x);
    this.setState({ val2: +this.state.currentArray });
  }

  addDisplay(txt) {
    this.setState({ display: (this.state.display += txt) });
  }

  pressClear() {
    this.setState({
      display: "",
      val1: 0,
      val2: 0,
      operation: "",
      currentArray: []
    });
  }

  pressCalculate() {
    console.log(this.state);
    switch (this.state.operation) {
      case "+":
        this.setState({ display: `${this.state.val1+this.state.val2}` });
        this.setState({ val1: +this.state.currentArray });

        break;

      default:
        break;
    }
  }

  render() {
    return (
      <>
        <Container>
          <Row className="text-center">
            <Col>
              <Display text={this.state.display} />
              <Button
                onClick={() => this.pressNumber(7)}
                outline
                color="primary"
              >
                7
              </Button>{" "}
              <Button outline color="primary">
                8
              </Button>{" "}
              <Button outline color="primary">
                9
              </Button>{" "}
              <Button
                onClick={() => this.pressOperation("/")}
                outline
                color="primary"
              >
                /
              </Button>{" "}
              <br />
              <Button outline color="primary">
                4
              </Button>{" "}
              <Button outline color="primary">
                5
              </Button>{" "}
              <Button outline color="primary">
                6
              </Button>{" "}
              <Button
                onClick={() => this.pressOperation("*")}
                outline
                color="primary"
              >
                *
              </Button>{" "}
              <br />
              <Button outline color="primary">
                1
              </Button>{" "}
              <Button outline color="primary">
                2
              </Button>{" "}
              <Button outline color="primary">
                3
              </Button>{" "}
              <Button
                onClick={() => this.pressOperation("-")}
                outline
                color="primary"
              >
                -
              </Button>{" "}
              <br />
              <Button onClick={() => this.pressClear()} outline color="primary">
                C
              </Button>{" "}
              <Button outline color="primary">
                0
              </Button>{" "}
              <Button
                onClick={() => this.pressCalculate()}
                outline
                color="primary"
              >
                =
              </Button>{" "}
              <Button
                onClick={() => this.pressOperation("+")}
                outline
                color="primary"
              >
                +
              </Button>{" "}
              <br />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
