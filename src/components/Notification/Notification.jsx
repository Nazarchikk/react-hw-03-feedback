import PropTypes from 'prop-types';
import s from "./Notification.module.css"
export default function Notification({ message }){
    return(
        <>
            <h3 className={s.h3}>{message}</h3>
        </>
    )
}

Notification.propType = {
    message: PropTypes.string.isRequired
}