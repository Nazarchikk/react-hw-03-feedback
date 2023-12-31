import PropTypes from 'prop-types';
import s from "./Section.module.css"
export default function Section({ title, children }) {
    return(
        <>
            <section>
                <h1 className={s.mainHeading}>{title}</h1>
                {children}
            </section>
        </>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}