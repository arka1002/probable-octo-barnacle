import styles from './InputRange.module.css'


export default function InputRange() {
    return (
        <>
            <div>
                <input type="range" id="test" className={styles.special} min={0} max={100} />
                {/* <p className={styles.random}>asdfghjkl</p> */}
            </div>
        </>
    );
};
