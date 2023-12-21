import classes from './TopNav.module.css' 
import React from 'react' 
import NavButton from '../nav-button'
 
interface ITopNav {
    arr: string[];
}

const TopNav: React.FC<ITopNav> = ({arr}) => { 
    return ( 
        <div className={classes.topNav}> 
            <NavButton _enabled={true} text={arr[0]}></NavButton>
            <NavButton _enabled={false} text={arr[1]}></NavButton>
            <NavButton _enabled={false} text={arr[2]}></NavButton>
            <NavButton _enabled={false} text={arr[3]}></NavButton>
            <NavButton _enabled={false} text={arr[4]}></NavButton>
        </div> 
    ); 
}; 
 
export default TopNav;