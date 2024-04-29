import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Services from './Services/Services'
import United from './United/United'
import './App.css'
export default function App() {
  return (
    <div>
      <header>
        <ul>
          <li>+998 99 333 11 17</li>
          <li>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-telegram"></i>
          </li>
        </ul>
      </header>
      <nav>
        <p><Link to='/' className='logo'><span>[EN]</span>CODE</Link></p>
        <ul>
          <li>Дом</li> 
          <li>О нас</li>
          <li>
            <Link to='services' className='links'>Услуги</Link></li>
          <li>Контакт</li>
        </ul>
        <button>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdeIs5730ctCFDr-mAVCrvnID1pt-iv1xBhz-naMPh2VyIA3w/viewform?usp=sf_link">Регистрация</a>
        </button>
      </nav>

      <Routes>
        <Route path='/' element={<United />} />
        <Route path='services' element={<Services />}></Route>
      </Routes>

      <hr />

      <footer>
        <div className="parent">
          <div className="child">
            <ul>
              <span>Компания</span>
              <li>О нас</li>
              <li>Лицензия</li>
              <li>Форма электронной почты PHP</li>
              <li>Условия использования</li>
            </ul>
          </div>
          <div className="child">
            <ul>
              <span>Полезные ссылки</span>
              <li>MENZ_UZB</li>
              <li>AKALDOSAMA</li>
              <li>[EN]CODE</li>
            </ul>
          </div>
          <div className="child">
            <ul>
              <span>Связаться с нами</span>
              <li>Шайхантахурский район Ташкент, Узбекистан</li>
              <li>Номер телефона:</li>
              <li>+998 99 333 11 17</li>
            </ul>
          </div>
          <div className="child">
            <ul>
              <span>Отправить сообщение</span>
              <li>
                <input type="text" placeholder='Отправить сообщение' />
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <hr />
      <div className='underFooter'>
        Copyright © [EN]CODE All Rights Reserved.
      </div>
    </div>
  )
}
