import styles from '../styles/Components/errorLogin.module.css';

const ErrorLogin = ({server}) => {
    return (
        <div className={`${styles.errorLogin} ${server ? '' : styles.errorLoginIncorrect}`}>
            <span>
                Internal Server Error
            </span>
        </div>
    );
}

export default ErrorLogin;