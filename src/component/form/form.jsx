import './form.css'
// import formImg from './img/form-img-removebg-preview.png';
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
    <div className='form-box--img'>

    </div>
    </div>
    <div className='form-card'>
        <form action="#">
    <input type="text" placeholder='Ismingiz' className='form-card--name'/>
    <div className='form-card--box'> 
        <input type="num" placeholder='Telefon nomeringiz' className='form-card--tell'/>
        <input type="email" placeholder='Pochtangiz'className='form-card--tell' />
    </div>
    <button className='form-card--btn'>
    Yuborish
    </button>
    </form>
    </div>
    </div>
        </section>
    </div>
)
}