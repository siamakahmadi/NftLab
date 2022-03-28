import style from './style.module.scss'
import Link from 'next/link'

export default function index(props) {

    let button;
    if (props.actuveBorder) {
        button = <Link href={props.slug}>
            <a className={style.btn}>
                {props.title}
            </a>
        </Link>;
    } else if (props.isCard) {
        button = <Link href={props.slug}>
            <a className={style.cardButton}>
                {props.title}
            </a>
        </Link>;
    } else {
        button = <Link href={props.slug} >
            <a className={style.simpleBtn}>
                {props.title}
            </a>
        </Link>;
    }

    return (
        <>
            {button}
        </>
    )
}
