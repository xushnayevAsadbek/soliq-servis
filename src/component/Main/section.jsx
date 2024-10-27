import './section.css'
import start from './img/Star.svg'
export const Section = () => {
    return(
        <div className="container">
            <section>          
          <div className="about-course">
        <div className="about-course--title">
        <div className='about-course--title_box'>
        <p className='about-course--title_box-text'>Zamonaviy IT o'quv markazi</p>
        <img src={start} alt="start-icon" />
        </div>
        <p className='about-course--title_p'>
        Biz sizga <span className='about-course--title_span'>zamonaviy kasbni</span> o'rganishga va ish boshlashingizga yordam beramiz
        </p>
        <button className='about-course--btn'>Kurslarni tanlash</button>
        </div>
        <div className="about-course--img">
    </div>
          </div>
          <div className='about-course--border'>
            <span className='about-course--border-span1'></span>
            <span className='about-course--border-span1'></span>
            <span className='about-course--border-span2'></span>
          </div>
          </section>

          <section>
            
          </section>
        </div>
    )
}
