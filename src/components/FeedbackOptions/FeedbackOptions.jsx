import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'
export default function FeedbackOptions({ options, onLeaveFeedback }){
    return(
        <>
            <h2 className={s.h2T}>Please live feedback</h2>
            <div>
                {options.map(option => (
                    <button key={option} name={option} className={s.buttonn} onClick={onLeaveFeedback} type="button">{option}</button>
                ))}
            </div>

        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}