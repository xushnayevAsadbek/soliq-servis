import './form.css'
import formImg from './img/form-img-removebg-preview.jpg';
export const Form = () => {
return(
    <div>
        <section className='container'>
    <div className='form-box'>
        <div>
    <h3 className='form-box--heading'>
    Tanlovda yordam beramis!
    </h3>
    <p className='form-box--text'>
    Kurs haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring - biz barcha savollaringizga javob beramiz.
    </p> 
    <img src={formImg} alt="" className='form-box--img' style={{
        backgroundColor:'#EAF4FF',
        width:"291px"
    }} />
    </div>
    </div>
        </section>
    </div>
)
}