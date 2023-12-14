import classes from './TopNav.module.css' 
import React from 'react' 
import NavText from '../nav-text'
 
interface TopNavProps {
    arr: string[];
}

const TopNav: React.FC<TopNavProps> = ({arr}) => { 
    return ( 
        <div className={classes.topNav}> 
            <NavText _enabled={true} text={arr[0]}></NavText>
            <NavText _enabled={false} text={arr[1]}></NavText>
            <NavText _enabled={false} text={arr[2]}></NavText>
            <NavText _enabled={false} text={arr[3]}></NavText>
            <NavText _enabled={false} text={arr[4]}></NavText>
        </div> 
    ); 
}; 
 
export default TopNav;