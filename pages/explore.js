import style from '../styles/Explore.module.scss'
import Navbar from "./Components/Navbar/Navbar"
import Head from 'next/head'
import Card from './Components/Card/index'

export default function Store() {
  return (
    <div className={style.container}>
    <Head>
      <title>NftLab/Explore</title>
      <meta name="description" content="Nftlab the Minimal Nft MarketPlace" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={style.main}>
      <Navbar logo="NftLab" />

      <div className={style.heroSection}>
        <div className={style.cardSkew}>
          <div className={style.card}>
            <div className={style.coverImg}>
              <img src='https://images.unsplash.com/photo-1647552263572-596ada5525ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'/>
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
            <div className={style.cardBtn}>
              <a className={style.btn}>Place A Baid</a>
            </div>
          </div>
          </div>

          <div className={style.card}>
            <div className={style.coverImg}>
              <img src='https://images.unsplash.com/photo-1646237023864-8f1daf930976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'/>
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
            <div className={style.cardBtn}>
              <a className={style.btn}>Place A Baid</a>
            </div>
          </div>
          </div>

          <div className={style.card}>
            <div className={style.coverImg}>
              <img src='https://images.unsplash.com/photo-1646858707925-5793b8990f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'/>
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
            <div className={style.cardBtn}>
              <a className={style.btn}>Place A Baid</a>
            </div>
          </div>
          </div>

          <div className={style.card}>
            <div className={style.coverImg}>
              <img src='https://images.unsplash.com/photo-1647043304470-9660b56029f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80'/>
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
            <div className={style.cardBtn}>
              <a className={style.btn}>Place A Baid</a>
            </div>
          </div>
          </div>

          <div className={style.card}>
            <div className={style.coverImg}>
              <img src='https://images.unsplash.com/photo-1646773777979-8242c6ee91c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
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
            <div className={style.cardBtn}>
              <a className={style.btn}>Place A Baid</a>
            </div>
          </div>
          </div>

          <div className={style.card}>
            <div className={style.coverImg}>
              <img src='https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'/>
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
            <div className={style.cardBtn}>
              <a className={style.btn}>Place A Baid</a>
            </div>
          </div>
          </div>

          <div className={style.card}>
            <div className={style.coverImg}>
              <img src='https://images.unsplash.com/photo-1647808281774-fc51f85ec9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
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
            <div className={style.cardBtn}>
              <a className={style.btn}>Place A Baid</a>
            </div>
          </div>
          </div>

        </div>
        <div className={style.heroTitle}>
          <p>Find the hottest NFTs from the best Creators</p>
        </div>
      </div>
      
      <div className='trendingCard'>
          <Card/>
      </div>
      <div className='trendingCard'>
          <Card/>
      </div>

      <div className={style.hotSell}>
          <div className={style.hotSellContainer}>
              <div className={style.cover}><img src='https://images.unsplash.com/photo-1646237023864-8f1daf930976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'/></div>
              <div className={style.information}>
                <div className={style.title}>
                  Digitizazion
                </div>
                <div className={style.detail}>

                  <div className={style.createdBy}>
                    <p className={style.title}>Created By</p>
                    <div className={style.creatorInfo}>
                      <div className={style.img}><img src='https://images.unsplash.com/photo-1646237023864-8f1daf930976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'/></div>
                      <div className={style.name}>@nocelcoverage</div>
                    </div>
                  </div>

                  <div className={style.createdBy}>
                    <p className={style.title}>Collection</p>
                    <div className={style.creatorInfo}>
                      <div className={style.img}><img src='https://images.unsplash.com/photo-1646237023864-8f1daf930976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'/></div>
                      <div className={style.name}>Digitizazion</div>
                    </div>
                  </div>
                  
                </div>
              <div>
                  
                </div>
              </div>
          </div>
      </div>

    </main>

  </div>
  )
}
