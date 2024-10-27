import './footer.css'
import footerLogo from './img/footer-logo.svg'
export const Footer = () =>{
    return(
        <>
          <footer className='footer'>
            <div className='container'>
                <div className='footer-box'>                
                <div className='footer-card'> 
                <img src={footerLogo} alt="" />
        <p className='footer-card--text'>
        Biz sizga mahsulot sotish uchun bu yerda emasmiz, biz tajribamiz orqali 
qiymat sotamiz.
        </p>
                </div>
                <ul className='footer-list'>
                    <li>
                    <p className='footer-list-text'>Manzil</p>
                    <p href="/" className='footer-list-link'>Toshkent shahri, Yunusobod tumani, ko'ch. Amir Temur 129B</p>
                    </li>
                    <li>
                    <p className='footer-list-text'>Yordam</p>
                    <p href="/" className='footer-list-link'>+998 91 7775411</p>
                    </li>
                    <li>
                    <p className='footer-list-text'>Pochta</p>
                    <p href="/" className='footer-list-link'>Info@farobiy.com</p>
                    
                    <ul className='footer-list--email'>
                        <li><p className='footer-list--email-text'>Facebook</p></li>
                        <li><p className='footer-list--email-text'>Twitter</p></li>
                        <li><p className='footer-list--email-text'>Telegram</p></li>
                        <li><p className='footer-list--email-text'>Instagram</p></li>

                    </ul>
                    </li>
                </ul>
               
                </div>
                <div className='footer-bottom'>
                   <p className='footer-bottom--text'>
                   © 2022 by <span className='footer-bottom--span'>Fido Studio</span>. Farobiy IT Academy
                   </p>

                </div>
            </div>
            </footer>  
        </>
    )
}