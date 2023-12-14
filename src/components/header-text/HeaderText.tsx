import classes from './HeaderText.module.css' 
import React from 'react' 
import PrimaryButton from '../primary-button/PrimaryButton';
 
interface HeaderTextProps {
    arr: string[];
}

const HeaderText: React.FC<HeaderTextProps> = ({arr}) => { 
    return ( 
         <div className={classes.column}>
            <h1>{arr[0]}</h1>
            <h2>{arr[1]}</h2>
            <PrimaryButton text={arr[2]}/>
         </div>
    ); 
}; 
 
export default HeaderText;