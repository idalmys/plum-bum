import React, { Component } from "react";
import apiEntry from "../../utils/apiEntry";
import apiUser from "../../utils/apiUser";

export default class GoalReached extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalWords: 0,
      goal: 0,
      show: true,
    };
  }


  componentDidMount() {
    this.GetGoalInfo()
  }

  // Count Words by entries
  countWords = (text) => {
    return text.split(/\s+|--+/).filter((word) => word.length > 0).length;
  };

  //Allow calculate Total
  getArraySum = (a) => {
    var total = 0;
    for (var i in a) {
      total += a[i];
    }
    return total;
  }

  //When user reach the goal reset values into the database
  ResetGoalData = () => {
    const userGoal = {
      goal: 0,
      goalDate: "",
      startGoalDate: ""
    }
    apiUser
      .updateUser(localStorage.getItem("id"), userGoal)
      .then(User => {
        console.log(User)
      })
  }

  //Get entries from the database  between startgoalDate date and goalDate (When user save data from writing goal that function 
  //must calclate total words using that info)
  //Take a look to console(inspect the app) of that way you can understand the mongodb result 
 
  GetGoalInfo = () => {
    //Get Goal
    apiUser
    .findUser(localStorage.getItem("id"))
    
    .then(UserGoal=>{
      this.setState({goal : UserGoal.data[0].goal})
    })
   
    apiEntry
      .getgoaldata(localStorage.getItem("id"))
      .then(entries => {
        console.log(entries.data, "goal")
        let entriesbydate = []
        if(entries.data.length > 0){
          for (var i = 0; i < entries.data.length; i++) {
            entriesbydate.push(this.countWords(entries.data[i].entryBody))
            console.log("words", entriesbydate)
          }
  
          //Calculate Total words betwen startGoalDate and GoalDate
          //With that value you can compare the goal
          this.setState({
            totalWords: this.getArraySum(entriesbydate),
          })
          console.log(" totalwords ", this.state.totalWords)
          console.log(" Goal ", this.state.goal)
                
        }else{
          this.setState({message: "No data Found"})
        }
      })  
  }

  handleModal() {
    this.setState({ show: !this.state.show })
  }

  render() {

    return (

      //Create statement using total words and goal, remember if the user reach the goal you can reset values 

      <div>
        {/*userGoalDate === Date.now && countWordsTodate >= goalWords && (
        <>
          <Modal show={this.state.show} onHide={() => this.handleModal()}>
            <Modal.Header closeButton>
              GOAL:
          </Modal.Header>
            <Modal.Body>
              Congrats! You have reached your goal!
              Click Writing Goal To Set a New Goal.
          </Modal.Body>
          </Modal>
        </>

      )*/}
        {/* {userGoalDate === Date.now && countWordsTodate < goalWords && (
        <>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <Modal.Header closeButton>
            GOAL:
          </Modal.Header>
          <Modal.Body>
            Reset your Goal!
          </Modal.Body>
        </Modal>
        </>

      )} */}
        {/* {userGoalDate !== Date.now && countWordsTodate >= goalWords &&  (
        <>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <Modal.Header closeButton>
            GOAL:
          </Modal.Header>
          <Modal.Body>
            WOW!!! you have reached your goal before the date!
          </Modal.Body>
        </Modal>
        </> 

      )}*/}
      </div>
    );
  }
}
