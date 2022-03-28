import Styles from './style.module.scss'
import Link from 'next/link'
export default function Navbar(props) {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.navContainer}>
                <div className={Styles.navLogo}>{props.logo}</div>
                <div className={Styles.navList}>
                    <Link href={'/'}>
                        <p className={Styles.navItemActive}>Home</p>
                    </Link>
                    <Link href={'/'}>
                        <p className={Styles.navItem}>Market</p>
                    </Link>
                    <Link href={'/'}>
                        <p className={Styles.navItem}>Feature</p>
                    </Link>
                    <Link href={'explore'}>
                        <p className={Styles.navItem}>Explore</p>
                    </Link>
                    <Link href={'/'}>
                        <p className={Styles.navItem}>Create</p>
                    </Link>
                </div>
            </div>
            <div className={Styles.login}>
                <a>Login</a>
                <a>Signin</a>
            </div>
        </div>
    )
}
