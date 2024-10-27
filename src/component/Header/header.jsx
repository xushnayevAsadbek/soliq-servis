import './header.css'
import logo from './img/header-logo.svg';
import btnlogo from './img/btn-logo.svg';
import callIcon from './img/call-icon.svg'

export const Header = () => {
    return(
        <div className='container'>
            <div className='header'>
                 <ul className='header-list-logo'>
            <li>
            <img src={logo} alt="header logo "/>            
            </li>
            <li>
            <button className='header-list-logo--btn'>Kurslar <img src={btnlogo} alt="btn Logo img" /></button>
            </li>
           </ul>
           <ul className='header-list'>
            <li>
                <a href='/' className='header-list--text'>Bizning ustozlarimiz</a>
            </li>
            <li>
                <a href='/' className='header-list--text'>Biz haqimizda</a>
            </li>
            <li>
                <select name="UZ" id="UZ" className='lang-select'>
                    <option value="UZ">UZ</option>
                    <option value="RU">RU</option>
                    <option value="ENG">ENG</option>
                </select>
            </li>
            <li>
                <button className='header-list--btn'> <img src={callIcon} alt="" /> <a href="tell:+998 91 7775411" style={{color:'#2189FF'}}>+998 91 7775411</a></button>
            </li>
            
           </ul>
            </div>
          
        </div>
    )
}