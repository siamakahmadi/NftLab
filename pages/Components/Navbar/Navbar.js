import Styles from './style.module.scss'

export default function Navbar() {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.navContainer}>
                <div className={Styles.navLogo}>NftLab</div>
                <div className={Styles.navList}>
                    <a className={Styles.navItemActive}>Home</a>
                    <a className={Styles.navItem}>Market</a>
                    <a className={Styles.navItem}>Feature</a>
                    <a className={Styles.navItem}>Explore</a>
                    <a className={Styles.navItem}>Create</a>
                </div>
            </div>
            <div className={Styles.login}>
                <a>Login</a>
                <a>Signin</a>
            </div>
        </div>
    )
}
