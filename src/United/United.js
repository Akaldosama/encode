import React from 'react'
import './United.css'
import { Link } from 'react-router-dom'

export default function United() {
  return (
    <div>
        <div class="container">
            <div class="parent">
                <div class="child">
                    <h2><span>[EN]</span>CODE</h2>
                    <p>Школа программирования для всех возрастов. <br />
                        Получите подробную информацию, нажав на кнопку ниже и оставив контакты</p>
                        <Link to='services' className='services'>Услуги</Link>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="parent">
                <div className="child">
                    <span>HTML</span>
                    <p>
                    HTML — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.
                    Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска,
                        далее интерпретируют код в интерфейс.
                    </p>
                </div>
                <div className="child">
                    <span>CSS</span>
                    <p>
                    CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. 
                    Также может применяться к любым XML-документам, например, к SVG или XUL.
                    </p>
                </div>
                <div className="child">
                    <span>JAVASCRIPT</span>
                    <p>
                    JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный,
                    императивный и функциональный стили. Является реализацией спецификации ECMAScript.
                    </p>
                </div>
                <div className="child">
                    <span>JAVA</span>
                    <p>
                    Java — строго типизированный объектно-ориентированный язык программирования общего назначения,
                    разработанный компанией Sun Microsystems. Разработка ведётся сообществом.
                    </p>
                </div>
                <div className="child">
                    <span>PHP</span>
                    <p>
                    PHP — C-подобный скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений.
                    В настоящее время поддерживается подавляющим большинством хостинг-провайдеров и является одним из лидеров
                    среди языков.
                    </p>
                </div>
                <div className="child">
                    <span>PYTHON</span>
                    <p>
                    Python — высокоуровневый язык программирования общего назначения с динамической строгой типизацией 
                    и автоматическим управлением памятью, ориентированный на повышение производительности разработчика.
                    </p>
                </div>
                <div className="child">
                    <span>C#</span>
                    <p>
                    C# — объектно-ориентированный язык программирования. Разработан в 1998—2001 годах группой инженеров 
                    компании Microsoft под руководством Андерса Хейлсберга и Скотта Вильтаумота как язык разработки 
                    приложений для платформы Microsoft.
                    </p>
                </div>
                <div className="child">
                    <span>ReactJS</span>
                    <p>
                    React — JavaScript-библиотека с открытым исходным кодом для разработки
                    пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и
                    сообществом отдельных разработчиков и корпораций.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
