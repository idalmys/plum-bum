import React, { Component } from "react";
import apiEntry from "../../utils/apiEntry";
// import { Container, Button } from "react-bootstrap";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "./PopulateEntries.css";

class PopulateEntries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }

  componentDidMount() {
    this.loadEntries();
  }

  countEntryWords = (entry) => {
    let entryBodyString = entry.entryBody;
    let arrayCount = [];
    arrayCount = entryBodyString.split(" ");
    let entryWords = arrayCount.length;
    return entryWords;
  };

  loadEntries = () => {
    apiEntry
      .findEntries(localStorage.getItem("id"))
      .then((entries) => {
        entries.data.map((entry) => {
          const wordCount = this.countEntryWords(entry);
          entry.entryWords = wordCount;
        });
        this.setState({
          entries: entries.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const entryReturn = {
      textAlign: "left",
    };

    const buttonView = {
      color: "white",
      backgroundColor: "#88498f",
    };

    return (
      <Container className="PopulateEntries" fluid>
        <div>
          <h1>My Work</h1>
        </div>
        <div style={entryReturn}>
          {this.state.entries.map((entry) => {
            return (
              <div key={entry._id}>
                {console.log(entry)}
                <p>
                  {entry.title} &nbsp;
                  {/* This "Edit" button will allow the user to edit a particular chapter/entry */}
                  <Button variant="contained" color="secondary">
                    Edit
                  </Button>{" "}
                  &nbsp;
                  <Button variant="contained" style={buttonView}>
                    View
                  </Button>
                </p>

                <p>Date Created: {entry.date}</p>
                <p>Words: {entry.entryWords}</p>

                <br></br>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default PopulateEntries;
