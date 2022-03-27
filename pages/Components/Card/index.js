import style from './style.module.scss'
import Button from '../Button/index'

export default function index() {
  return (
    <div className={style.container}>
      <div className={style.navigation}>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke="#FCF3FD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.5019 12H3.67188" stroke="#FCF3FD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699" stroke="#FCF3FD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.5 12H20.33" stroke="#FCF3FD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div className={style.cardList}>
        <div className={style.card}>
          <div className={style.cardCover}>
            <img src='https://images.unsplash.com/photo-1647552263572-596ada5525ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' />
          </div>
          <div className={style.cardInfo}>
            <div className={style.info}>
              <p className={style.cardTitle}>Tiger Lily</p>
              <p className={style.cardPrice}>
                <div>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M17.9519 9.00013C17.9519 13.9445 13.9438 17.9528 8.99946 17.9528C4.05506 17.9528 0.046875 13.9445 0.046875 9.00013C0.046875 4.05579 4.05506 0.0476074 8.99946 0.0476074C13.9437 0.0476074 17.9519 4.05579 17.9519 9.00013" fill="#505050" />
                    <g opacity="0.8">
                      <path d="M8.96936 4.84619L8.91406 5.03414V10.488L8.96936 10.5432L11.501 9.04677L8.96936 4.84619Z" fill="white" />
                      <path d="M8.96912 4.84619L6.4375 9.04677L8.96912 10.5432V7.89608V4.84619Z" fill="white" />
                      <path d="M8.96866 11.3669L8.9375 11.4049V13.3477L8.96866 13.4387L11.5018 9.87122L8.96866 11.3669Z" fill="white" />
                      <path d="M8.96912 13.4387V11.3669L6.4375 9.87122L8.96912 13.4387Z" fill="white" />
                      <path d="M8.96875 10.5432L11.5003 9.0468L8.96875 7.89612V10.5432Z" fill="white" />
                      <path d="M6.4375 9.04681L8.96908 10.5432V7.89612L6.4375 9.04681Z" fill="white" />
                    </g>
                  </svg>
                </div>2.50 ETH</p>
            </div>
            <div className={style.cardPrice}>
            <Button title="Place A Baid" isCard={true} />
            </div>
          </div>
        </div>
        <div className={style.card}>2</div>
        <div className={style.card}>3</div>
        <div className={style.card}>4</div>
        <div className={style.card}>5</div>
      </div>
    </div>
  )
}
