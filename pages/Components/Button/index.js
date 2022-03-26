import style from './style.module.scss'

export default function index(props) {



    return (
        <>
            {props.actuveBorder ?
             <a className={ style.btn }>{props.title}</a>
             :
             <a className={style.simpleBtn}>{props.title}</a>
            }
           

        </>
    )
}
