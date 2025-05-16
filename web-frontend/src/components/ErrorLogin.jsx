import styles from '../styles/Components/errorLogin.module.css';

const ErrorLogin = ({correct}) => {
    return (
        <div className={`${styles.errorLogin} ${correct ? '' : styles.errorLoginIncorrect}`}>
            <span>
                UserName or Password is incorrect
            </span>
        </div>
    );
}

export default ErrorLogin;