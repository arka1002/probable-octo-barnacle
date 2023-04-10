import styles from './InputRange.module.css'


export default function InputRange() {
    return (
        <>
            <div>
                {/* Needed to add CSS Modules because tailwind css doesnt support the necessary pseudo-elements required for styling */}
                <input type="range" id="test" className={styles.special} min={0} max={100} />
            </div>
        </>
    );
};
