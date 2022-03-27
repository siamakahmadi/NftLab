import style from './style.module.scss'

export default function index() {
  return (
    <div className={style.container}>
      <div className={style.navigation}>
        <div>1</div>
        <div>2</div>
      </div>
      <div className={style.cardList}>
        <div className={style.card}>1</div>
        <div className={style.card}>2</div>
        <div className={style.card}>3</div>
        <div className={style.card}>4</div>
      </div>
    </div>
  )
}
