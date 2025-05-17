import styles from '../styles/Components/error.module.css';

const ErrorLogin = ({correct, message}) => {
    return (
        <div className={`${styles.errorLogin} ${correct ? '' : styles.errorLoginIncorrect}`}>
            <span>
                {message}
            </span>
        </div>
    );
}

export default ErrorLogin;