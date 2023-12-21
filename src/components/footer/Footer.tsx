import classes from './Footer.module.css' 
import React from 'react' 
 
interface IFooter {

}

const Footer: React.FC<IFooter> = () => { 
    return ( 
         <div className={classes.row}>
            <div className={classes.column}>
                <div className={classes.logo_row}>
                    <h4 className={classes.company_logo}>T</h4>
                    <h5 className={classes.company_name}>HealthCare</h5>
                </div>
                <div className={classes.text_block}>
                    HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                </div>
                <div className={classes.text_block}>
                ©HealthCare PTY LTD 2023. All rights reserved
                </div>
            </div>
            <div className={classes.categories_row}>
            <div className={classes.column}>
               <div className={classes.header_text_column}>Company</div>
               <div className={classes.default_text_column}>About</div>
               <div className={classes.default_text_column}>Testimonials</div>
               <div className={classes.default_text_column}>Find a doctor</div>
               <div className={classes.default_text_column}>Apps</div>
            </div>
            <div className={classes.column}>
               <div className={classes.header_text_column}>Region</div>
               <div className={classes.default_text_column}>Indonesia</div>
               <div className={classes.default_text_column}>Singapore</div>
               <div className={classes.default_text_column}>Hongkong</div>
               <div className={classes.default_text_column}>Canada</div>
            </div>
            <div className={classes.column}>
               <div className={classes.header_text_column}>Help</div>
               <div className={classes.default_text_column}>Help center</div>
               <div className={classes.default_text_column}>Contact support</div>
               <div className={classes.default_text_column}>Instructions</div>
               <div className={classes.default_text_column}>How it works</div>
            </div>
            </div>
         </div>
    ); 
}; 
 
export default Footer;