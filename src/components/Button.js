import PropTypes from 'prop-types'

const Button = ({backgroundColor, text, onClick}) => {
    return (
        <button className="btn" style={{backgroundColor}} onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    backgroundColor: 'steelblue'
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
