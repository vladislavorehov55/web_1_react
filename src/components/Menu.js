import React from 'react'
import {Link} from 'react-router-dom'
class Menu extends React.Component{
    render() {
        return (
            <div className='navigation_bar'>
                <Link style ={LinkStyle} to='/'>Main</Link>
                <Link style ={LinkStyle} to='/about'> About</Link>
                <Link style={LinkStyle} to='/contacts'> Contacts</Link>
            </div>
        );
    }
}
const LinkStyle = {
    margin:'10px',
    color: 'black',
    textDecoration:'none',
};
export default Menu;