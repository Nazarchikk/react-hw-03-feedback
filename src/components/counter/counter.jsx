// import React, { Component } from "react";
// import s from "./counter.module.css"

// export default class Counter extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//         total:0,
//         positiveFeedback:0
//     }
//     GoodButton = () => {
//         this.setState((e) => ({
//             good: e.good + 1
//         }))
//         this.countTotalFeedback()
//     }
//     NeutralButton = () => {
//         this.setState((e) => ({
//             neutral: e.neutral + 1
//         }))
//         this.countTotalFeedback()
        
//     }
//     BadButton = () => {
//         this.setState((e) => ({
//             bad: e.bad + 1
//         }))
//         this.countTotalFeedback()
//     }
//     countTotalFeedback = () => {
//         this.setState((e) => ({
//             total: e.good + e.bad + e.neutral
//         }))
//         this.countPositiveFeedbackPercentage()
//     }
//     countPositiveFeedbackPercentage = () => {
//         this.setState((e) => ({
//             positiveFeedback: Math.round(100 / e.total * e.good)
//         }))
//     }
//     render(){
//         const { good,neutral,bad,total,positiveFeedback } = this.state;
//         return(
//             <div className={s.con}>
//                 <h2 className={s.h2T}>Please live feedback</h2>
//                 <ul className={s.buttons}>
//                     <li className={s.li}><button className={s.buttonn} type="button" onClick={this.GoodButton}>Good</button></li>
//                     <li className={s.li}><button className={s.buttonn} type="button" onClick={this.NeutralButton}>Neutral</button></li>
//                     <li className={s.li}><button className={s.buttonn} type="button" onClick={this.BadButton}>Bad</button></li>
//                 </ul>
//                 <h2 className={s.h2T}>Statistics</h2>
//                 <ul className={s.static}>
//                     <li className={s.liStatic}>Good : <span>{good}</span></li>
//                     <li className={s.liStatic}>Neutral : <span>{neutral}</span></li>
//                     <li className={s.liStatic}>Bad : <span>{bad}</span></li>
//                     <li className={s.liStatic}>Total : <span>{total}</span></li>
//                     <li className={s.liStatic}>Positive Feedback : <span>{positiveFeedback}</span>%</li>
//                 </ul>
//             </div>
//         )
//     }
// }