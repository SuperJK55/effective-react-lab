import classes from './ProfileNav.module.css'
import React from 'react'
 
interface ProfileNavProps {
    name: string;
}

const ProfileNav: React.FC<ProfileNavProps> = ({name}) => { 
    return ( 
        <div className={classes.row}>
            <h4>{name}</h4>
            <h5>Health care</h5>
        </div>
    ); 
};
 
export default ProfileNav;