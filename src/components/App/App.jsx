import React, { Component } from "react";
import Statistics from "../Statistics/Statistics"
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions"
import Section from "../Section/Section"
import Notification from "../Notification/Notification";
import s from "./App.module.css"

export default class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  }
  feedback = (e) => {
    this.setState(ev => ({
      [e.target.name]: ev[e.target.name] + 1
    }))
  }
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage = () => {
    return (Math.round(this.state.good / this.countTotalFeedback() * 100));
  }
  render(){
    const { good,neutral,bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return(
      <div className={s.con}>
          <Section>  
            <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={this.feedback}></FeedbackOptions>
            {!this.countTotalFeedback() ? (<Notification message='There is no feedback'/>) : (<Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage}></Statistics>) }
          </Section>
      </div>
    )
  }
}
