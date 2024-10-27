import './section.css'
import start from './img/Star.svg'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import rightIcon from './img/right-icon.svg'
import bgBlack from './img/bg-black.jpg'


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
            <div className='courses-teach'>
                <h2 className='courses-teach-heading'>Biz orgatadigan kurslar</h2>
                <div className='courses-teach--wrapper'>
                   <div className='courses-teach--box'>
                  <div className='courses-teach--box__card1'>
                 <div style={{
                    position:'relative'
                 }}>
                 <img src={img1} alt="course-img" style={{
                        width:"381px",
                        height:"273px",
                        borderRadius:"44px",
                        objectFit:"cover"
                    }} />
                    <div className='box-position'>
                    <p className='box-position--text'>Dasturlash</p>
                    <button className='box-position--btn'>Batafsil <img src={rightIcon} alt="icon" /></button>
                    </div>
                 </div>
                    <div style={{
                      position:'relative'
                    }}>
                    <img src={img2} alt="course-img" style={{
                        width:"482px",
                        height:"273px",
                        borderRadius:"44px",
                        objectFit:"cover"
                        
                    }} />
                    <div className='box-position'>
                     
                    <p className='box-position--text'>Dizayn</p>
                    <button className='box-position--btn'>Batafsil <img src={rightIcon} alt="icon" /></button>
                    </div>
                   
                    </div>
                  </div>
                  <div className='courses-teach--box__card2'>
                 <div style={{
                  position:'relative'
                 }}>
                 <img src={img3} alt="course-img" style={{
                        width:"483px",
                        height:"273px",
                        borderRadius:"44px",
                        objectFit:"cover"
                    }} />
                     <div className='box-position'>
                    <p className='box-position--text'>Logistika broketligi</p>
                    <button className='box-position--btn'>Batafsil <img src={rightIcon} alt="icon" /></button>
                    </div>
                 </div>
                    <div style={{
                      position:'relative'
                    }}>
                    <img src={img4} alt="course-img" style={{
                        width:"381px",
                        height:"273px",
                        borderRadius:"44px",
                        objectFit:"cover"
                    }} />
                     <div className='box-position'>
                    <p className='box-position--text'>Videomontaj va maxsus effektlar</p>
                    <button className='box-position--btn'>Batafsil <img src={rightIcon} alt="icon" /></button>
                    </div>
                    </div>
                  </div >
                    </div> 
                    
                    <div className='courses-teach--box'>
                    <div style={{
                      position:'relative'
                    }}>
                    <img src={img5} alt="course-img" style={{
                        width:"280px",
                        height:"336px",
                        borderRadius:"44px",
                        objectFit:"cover"
                    }} />
                     <div className='box-position'>
                    <p className='box-position--text'>Marketing</p>
                    <button className='box-position--btn'>Batafsil <img src={rightIcon} alt="icon" /></button>
                    </div>
                    </div>
                    <div className='courses-teach--box__card5'>
                    <h3 className='courses-teach--box__card5--heading'>
                    Tez orada yangi kurs!
                    </h3>
                    <p className='courses-teach--box__card5--text'>
                     orada yangi kurs! Tez orada
                    </p>
                    </div>
                    </div> 
                </div>
            </div>
          </section>
        </div>
    )
}
