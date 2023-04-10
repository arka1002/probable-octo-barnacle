import styles from './InputRange.module.css'
import { useState } from "react";

export default function InputRange() {
    const [value, setValue] = useState(25);


    return (
        <>
            <div className='pt-16'>
                <div className='relative'>
                    <p className={styles.upperp}>{value}</p>
                    <span className={styles.upperspan}></span>
                </div>
                {/* Needed to add CSS Modules because tailwind css doesnt support the necessary pseudo-elements required for styling */}
                <input type="range" id="test" className={styles.special} min={0} max={100} value={value} onChange={e => setValue(e.target.value)} />
                <p>{value}</p>
            </div>
        </>
    );
};
