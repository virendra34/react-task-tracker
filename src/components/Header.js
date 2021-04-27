import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom';
const Header = ({ title, onAdd, showAdd }) => {
    const headerStyle = {
        color: '#f00',
        backgroundColor: '#000'
    }

    const onClick = () => {
        console.log('Clicked');
    }
    const location = useLocation();
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button text={showAdd ? 'Close' : 'Add'} backgroundColor={showAdd ? 'red' : 'green'} onClick={onAdd} />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: `Task Tracker`
}

Header.propTypes = {
    title: PropTypes.string //.isRequired
}

export default Header
