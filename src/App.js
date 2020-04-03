import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Display from "./calc-comp/Display";
import Number from "./calc-comp/Number";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayNum: [],
      val1: "",
      val2: "",
      operation: "",
      display: ""
    };
    this.pressNumber = this.pressNumber.bind(this);
    this.pressOperation = this.pressOperation.bind(this);
    this.pressEqual = this.pressEqual.bind(this);
  }

  pressNumber(num) {
    this.state.arrayNum += num;
    this.updateDisplay(num);
  }

  pressOperation(op) {
    if (this.state.val1 == "") {
      this.state.val1 = +this.state.arrayNum;
    }
    if (this.state.operation == "") {
      this.state.operation = op;
      this.updateDisplay(op);
      console.log(this.state);
    } else if (this.state.val2 == "") {
      this.state.val2 = +this.state.arrayNum;
      this.state.val1 = this.calculate();
      this.state.operation = op;
      this.state.display = "" + this.state.val1 + this.state.operation;
      this.updateDisplay("");
    }
    this.state.arrayNum = [];
    this.state.val2 = "";
  }

  pressEqual() {
    if (!(this.state.operation == "")) {
      this.state.val2 = +this.state.arrayNum;
      this.state.val1 = this.calculate();
      this.state.display = "";
      this.updateDisplay(this.state.val1);
      this.state.arrayNum = [];
      this.state.val2 = "";
    }
  }

  calculate() {
    switch (this.state.operation) {
      case "+":
        return this.state.val1 + this.state.val2;
        break;
        case "-":
        return this.state.val1 - this.state.val2;
        break;
        case "*":
        return this.state.val1 * this.state.val2;
        break;
        case "/":
        return this.state.val1 / this.state.val2;
        break;

      default:
        break;
    }
  }

  pressClear() {
    this.setState({
      arrayNum: [],
      val1: "",
      val2: "",
      operation: "",
      display: ""
    });
  }

  updateDisplay(newTxt) {
    let oldTxt = this.state.display;
    let txt = oldTxt + newTxt;
    this.setState({ display: txt });
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
                className="btn-calc"
              >
                7
              </Button>{" "}
              <Button
                onClick={() => this.pressNumber(8)}
                outline
                color="primary"
                className="btn-calc"
              >
                8
              </Button>{" "}<Button
                onClick={() => this.pressNumber(9)}
                outline
                color="primary"
                className="btn-calc"
              >
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
              <Button
                onClick={() => this.pressNumber(4)}
                outline
                color="primary"
                className="btn-calc"
              >
                4
              </Button>{" "}<Button
                onClick={() => this.pressNumber(5)}
                outline
                color="primary"
                className="btn-calc"
              >
                5
              </Button>{" "}<Button
                onClick={() => this.pressNumber(6)}
                outline
                color="primary"
                className="btn-calc"
              >
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
              <Button
                onClick={() => this.pressNumber(1)}
                outline
                color="primary"
                className="btn-calc"
              >
                1
              </Button>{" "}<Button
                onClick={() => this.pressNumber(2)}
                outline
                color="primary"
                className="btn-calc"
              >
                2
              </Button>{" "}<Button
                onClick={() => this.pressNumber(3)}
                outline
                color="primary"
                className="btn-calc"
              >
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
              <Button onClick={() => this.pressEqual()} outline color="primary">
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
