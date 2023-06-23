import PropTypes from 'prop-types';
import s from './Statistics.module.css'
export default function Statistics({ good, neutral, bad, total, positivePercentage}){
    return(
        <>
            <h2 className={s.h2T}>Statistics</h2>
            <ul className={s.static}>
              <li className={s.liStatic}>Good: {good}</li>
              <li className={s.liStatic}>Neutral: {neutral}</li>
              <li className={s.liStatic}>Bad: {bad}</li>
              <li className={s.liStatic}>Total: {total}</li>
              <li className={s.liStatic}>Positive feedback: {positivePercentage}%</li>
            </ul>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}