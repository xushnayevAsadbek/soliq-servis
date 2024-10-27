import './section.css'
import start from './img/Star.svg'
import webImg from './img/Ellipse.png'
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
        {/* <img src={webImg} alt="" style={{
            height:'100%',
            backgroundColor:'#EAF4FF',
            position:'absolute',
            right:'0'
        }} /> */}
    </div>
          </div>
          <div className='about-course--border'>
            <span className='about-course--border-span1'></span>
            <span className='about-course--border-span1'></span>
            <span className='about-course--border-span2'></span>
          </div>
          </section>
        </div>
    )
}
