import classes from './SliderBar.module.css' 
import React from 'react' 
import { useState } from 'react';
 
interface customer {
    name: string;
    job: string;
    review: string;
    img: string;
}

interface ISliderBar {
    arr: customer[];
    children: React.ReactNode
    cardChildren: React.ReactNode
}

const SliderBar: React.FC<ISliderBar> = ({arr, children, cardChildren}) => { 
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftClick = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      }
    
      const handleRightClick = () => {
        if (currentIndex < arr.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      }

    return (
        <div className={classes.column}>
            <div className={classes.slider_card}>
                <h1 className={classes.h1}>What our customer are saying</h1>
                <div className={classes.white_divider}></div>

                <div className={classes.row}>
                <img className={classes.img} src={arr[currentIndex].img} alt={arr[currentIndex].name} />

                <div className={classes.column}>
                    <h3 className={classes.h3}>{arr[currentIndex].name}</h3>
                    <h2 className={classes.h2}>{arr[currentIndex].job}</h2>
                </div>

                <h2 className={classes.h2}>{arr[currentIndex].review}</h2>

                {cardChildren}
                </div>
            </div>

            <div className={classes.row}>
                <button 
                style={{
                    color:
                    currentIndex == 0
                        ? "rgba(91, 155, 243, 0.3)"
                        : "rgba(91, 155, 243, 1)"
                }}
                className={classes.arrow_button} 
                onClick={handleLeftClick}>
                    ←
                </button>
                
                {arr.map((item, index) => (
                    <div
                        key={index}
                        className={`${classes.dot} ${index === currentIndex ? classes.active_dot : ''}`}
                        style={{ backgroundColor: index === currentIndex ? 'rgba(91, 155, 243, 1)' : 'rgba(91, 155, 243, 0.3)' }}
                    />
                ))}

                <button
                className={classes.arrow_button}
                style={{
                    color:
                    currentIndex < arr.length - 1
                        ? "rgba(91, 155, 243, 1)"
                        : "rgba(91, 155, 243, 0.3)"
                }}
                onClick={handleRightClick}>
                    →
                </button>
            </div>

            {children}
    </div>
    ); 
}; 
 
export default SliderBar;