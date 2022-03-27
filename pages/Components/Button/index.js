import style from './style.module.scss'

export default function index(props) {

    let button;
    if (props.actuveBorder) {
        button = <a className={style.btn}>{props.title}</a>;
    } else if (props.isCard) {
        button = <a className={style.cardButton}>{props.title}</a>;
    } else {
        button = <a className={style.simpleBtn}>{props.title}</a>;
    }

    return (
        <>
            {button}
        </>
    )
}
