import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Invitation.css';

export default function Invitation() {
  return (
    <div className="invitation">
      <Header simple />
      <main className="invitation-main">
        <div className="top-controls">
          <Link to="/forum" className="back-button">← Назад</Link>
        </div>
        <div className="invitation-container">
          <div className="invitation-content">
            <div className="invitation-paper">
              <div className="paper-header">
                <div className="header-left">
                  <h3 className="forum-title-small">IV МЕЖДУНАРОДНЫЙ ФОРУМ</h3>
                  <h2 className="forum-name">«РОСТКИ: РОССИЯ И КИТАЙ – ВЗАИМОВЫГОДНОЕ СОТРУДНИЧЕСТВО»</h2>
                  <p className="organizer">ОРГАНИЗАЦИОННЫЙ КОМИТЕТ</p>
                </div>
                <div className="header-right">
                  <div className="document-number">
                    <p>Исх. № 02-01/2026-П</p>
                    <p>от «01» июля 2026 г.</p>
                  </div>
                </div>
              </div>

              <div className="paper-body">
                <div className="recipient-block" id="recipient">
                  <p className="recipient-title">Кому:</p>
                  <p className="recipient">Чрезвычайному и Полномочному Послу</p>
                  <p className="recipient">Китайской Народной Республики</p>
                  <p className="recipient">в Российской Федерации</p>
                  <p className="recipient-excellency">Его Превосходительству</p>
                  <p className="recipient-name">господину Чжан Ханьхуэю</p>
                </div>

                <div className="salutation-block">
                  <p className="salutation">Уважаемый господин Посол!</p>
                </div>

                <div className="main-text" id="main-text">
                  <p className="invitation-text">
                    Организационный комитет IV Международного форума «РОСТКИ: Россия
                    и Китай – взаимовыгодное сотрудничество» имеет честь пригласить Вас
                    посетить Форум, который состоится с 16 по 19 августа 2026 года в городе
                    Казани, Республика Татарстан.
                  </p>

                  <p className="invitation-text">
                    Форум пройдёт на площадке Международного выставочного центра
                    «Казань Экспо», расположенного по адресу: Республика Татарстан,
                    Лаишевский район, село Большие Кабаны, улица Выставочная, дом 1.
                  </p>

                  <p className="invitation-text">
                    Ключевым событием деловой программы станет пленарное заседание
                    Форума, запланированное на 17 августа 2026 года. Форма одежды для
                    участия в официальных мероприятиях — строго официальная (деловой
                    костюм).
                  </p>

                  <div className="delegation-block" id="delegation">
                    <p className="delegation-title">В составе официальной делегации Китайской Народной Республики приглашаются:</p>
                    <ol className="delegation-list">
                      <li>Чрезвычайный и Полномочный Посол КНР в Российской Федерации господин Чжан Ханьхуэй;</li>
                      <li>Полномочный министр Посольства КНР в Российской Федерации господин Лю Цзюнь;</li>
                      <li>Генеральный консул КНР в городе Казани господин Сян Бо;</li>
                      <li>Председатель Союза китайских предпринимателей в России господин Чжоу Лицюнь.</li>
                    </ol>
                  </div>

                  <p className="invitation-text">
                    Организационным комитетом Форума предоставляется автомобиль
                    представительского класса для встречи и проводов делегации в
                    международном аэропорту «Казань» имени Габдуллы Тукая, а также на всё
                    время пребывания в городе Казани. Встреча в аэропорту будет
                    организована протокольным отделом с соблюдением всех норм
                    дипломатического этикета, включая размещение государственной
                    символики Российской Федерации и Китайской Народной Республики.
                  </p>

                  <div className="contact-block">
                    <p className="contact-text">
                      Просим подтвердить участие делегации до 20 июля 2026 года по телефону:
                      <strong> +7 (843) 570-40-01</strong> или по электронной почте:
                      <strong> forumrostki@mail.ru</strong>.
                    </p>
                  </div>
                </div>

                <div className="signature-block" id="signature">
                  <p className="signature-closing">С уважением,</p>
                  <p className="signature-title">Председатель Организационного комитета</p>
                  <p className="signature-forum">IV Международного форума «РОСТКИ: Россия и Китай – взаимовыгодное сотрудничество»</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer simple />
    </div>
  )
}
