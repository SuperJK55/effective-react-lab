import classes from './PrimaryButton.module.css' 
import React from 'react' 
 
interface PrimaryButtonProps {
    text: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({text}) => { 
    return ( 
        <button className={classes.primaryButton}> 
            {text}
        </button> 
    ); 
}; 
 
export default PrimaryButton;