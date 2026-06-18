import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Program.css';

const Program = () => {
  return (
    <div className="program-page">
      <Header simple />
      <main className="program-main">
        <Link to="/forum" className="back-button">← Назад</Link>
        <div className="protocol-title">
          <p>ПРОТОКОЛЬНАЯ ПРОГРАММА ПРЕБЫВАНИЯ</p>
          <p>ЧРЕЗВЫЧАЙНОГО И ПОЛНОМОЧНОГО ПОСЛА</p>
          <p>КИТАЙСКОЙ НАРОДНОЙ РЕСПУБЛИКИ</p>
          <p>НА МЕЖДУНАРОДНОМ ФОРУМЕ <span className="caps">РОСТКИ–2026</span></p>
        </div>

        <div className="program-content">
          <div className="program-section-top">
            <div className="program-section">
              <h3>Место проведения</h3>
              <p><strong>Основные мероприятия:</strong> МВЦ «Казань Экспо», г. Казань</p>
              <p><strong>Размещение:</strong> Kazan Palace by TASIGO, Президентский люкс</p>
              <p><strong>Статус гостя:</strong> почетный иностранный гость форума, глава официальной делегации КНР, главный иностранный спикер форума</p>
            </div>

            <div className="program-section">
              <h3>Цели визита</h3>
              <ul className="goals-list">
                <li>Поддержка российско-китайского стратегического партнерства</li>
                <li>Развитие межрегионального сотрудничества субъектов Российской Федерации и провинций КНР</li>
                <li>Содействие инвестиционному и промышленному сотрудничеству</li>
                <li>Укрепление гуманитарных и культурных связей</li>
              </ul>
            </div>

            <div className="program-section">
              <h3>Протокольное обеспечение</h3>
              <ul className="protocol-list">
                <li>VIP-зал аэропорта</li>
                <li>Отдельный кортеж</li>
                <li>Переводческое сопровождение</li>
                <li>VIP-переговорная</li>
                <li>Охрана и согласованные маршруты по площадке форума</li>
              </ul>
            </div>
          </div>

          <div className="program-day">
            <h3>16 августа 2026 года (воскресенье)</h3>
            <h4>День прибытия и культурно-протокольная программа</h4>
            <div className="program-table">
              <div className="program-row">
                <div className="program-time">08:30–09:30</div>
                <div className="program-place">Международный аэропорт Казань, VIP-терминал</div>
                <div className="program-desc">Прибытие делегации КНР. Встреча представителями Правительства РТ, Дирекции форума. VIP-процедуры, посадка в автомобили.</div>
              </div>
              <div className="program-row">
                <div className="program-time">09:30–10:00</div>
                <div className="program-place">Маршрут: аэропорт — озеро Нижний Кабан</div>
                <div className="program-desc">Переезд к месту проведения культурной программы.</div>
              </div>
              <div className="program-row">
                <div className="program-time">10:00–15:30</div>
                <div className="program-place">Озеро Нижний Кабан</div>
                <div className="program-desc"><strong>Китайский Сабантуй</strong> и гонки на лодках «Дракон». Возможна краткая приветственная реплика (до 2 минут).</div>
              </div>
              <div className="program-row">
                <div className="program-time">12:30–13:15</div>
                <div className="program-place">Озеро Нижний Кабан, VIP-зона</div>
                <div className="program-desc">Рабочий обед в рамках культурной программы. Неформальная встреча.</div>
              </div>
              <div className="program-row">
                <div className="program-time">15:45–16:30</div>
                <div className="program-place">Переговорная комната</div>
                <div className="program-desc"><strong>Встреча с китайской диаспорой и бизнесом.</strong> Закрытая рабочая встреча. Вступительное слово Посла: 5–7 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">16:30–17:15</div>
                <div className="program-place">Kazan Palace by TASIGO</div>
                <div className="program-desc">Прибытие в гостиницу. Регистрация, размещение в Президентский люкс.</div>
              </div>
              <div className="program-row">
                <div className="program-time">18:00–19:00</div>
                <div className="program-place">Резиденция принимающей стороны</div>
                <div className="program-desc"><strong>Протокольный чай</strong> с представителями принимающей стороны. Возможна краткая реплика до 3 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">19:00–21:00</div>
                <div className="program-place">Культурный маршрут «Вечерняя Казань»</div>
                <div className="program-desc">Экскурсия по историческому центру. Возможны остановки для фото-протокола.</div>
              </div>
              <div className="program-row">
                <div className="program-time">21:00–22:00</div>
                <div className="program-place">Kazan Palace by TASIGO</div>
                <div className="program-desc">Закрытый ужин делегации КНР.</div>
              </div>
            </div>
          </div>

          <div className="program-day">
            <h3>17 августа 2026 года (понедельник)</h3>
            <h4>Первый день деловой программы</h4>
            <div className="program-table">
              <div className="program-row">
                <div className="program-time">07:30–08:10</div>
                <div className="program-place">Kazan Palace by TASIGO, ресторан</div>
                <div className="program-desc">Закрытый завтрак делегации.</div>
              </div>
              <div className="program-row">
                <div className="program-time">09:00–10:00<br/>(выступление 09:20–09:25)</div>
                <div className="program-place">Главный зал</div>
                <div className="program-desc"><strong>Открытие форума.</strong> Выступление Посла: «Россия и Китай: новые возможности межрегионального сотрудничества» (3–5 минут).</div>
              </div>
              <div className="program-row">
                <div className="program-time">10:00–10:45</div>
                <div className="program-place">Выставочная зона Russia-China Expo</div>
                <div className="program-desc">VIP-обход выставки. Осмотр экспозиции, презентации проектов.</div>
              </div>
              <div className="program-row">
                <div className="program-time">10:00–12:00<br/>(участие 11:00–11:25)</div>
                <div className="program-place">Зал 1A1</div>
                <div className="program-desc"><strong>Сессия «Международный транспортный коридор».</strong> Реплика Посла: до 5 минут, ответы на вопросы: до 10 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">12:00–12:50</div>
                <div className="program-place">VIP-переговорная</div>
                <div className="program-desc"><strong>Встреча с Раисом Республики Татарстан.</strong> Обсуждение межрегионального сотрудничества. Фото-протокол: 3–5 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">13:00–14:30<br/>(выступление 13:15–13:30)</div>
                <div className="program-place">Зал 1A2</div>
                <div className="program-desc"><strong>Сессия «Китайский бизнес, добро пожаловать в Татарстан!».</strong> Выступление Посла: 10–15 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">15:00–17:00<br/>(выступление 15:15–15:35)</div>
                <div className="program-place">Зал 1A3</div>
                <div className="program-desc"><strong>Бизнес-диалог «Россия — Китай».</strong> Выступление Посла: 15–20 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">18:30–20:00</div>
                <div className="program-place">Площадка приема</div>
                <div className="program-desc"><strong>Официальный прием Правительства РТ.</strong> Участие в качестве почетного иностранного гостя.</div>
              </div>
            </div>
          </div>

          <div className="program-day">
            <h3>18 августа 2026 года (вторник)</h3>
            <h4>Второй день деловой программы</h4>
            <div className="program-table">
              <div className="program-row">
                <div className="program-time">07:30–08:15</div>
                <div className="program-place">Kazan Palace by TASIGO, ресторан</div>
                <div className="program-desc">Закрытый завтрак делегации.</div>
              </div>
              <div className="program-row">
                <div className="program-time">09:00–10:00<br/>(выступление 09:20–09:27)</div>
                <div className="program-place">Площадка делового завтрака ТАСС</div>
                <div className="program-desc"><strong>Деловой завтрак ТАСС.</strong> Выступление Посла: 5–7 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">10:00–12:00<br/>(выступление 10:25–10:37)</div>
                <div className="program-place">Зал 1A4</div>
                <div className="program-desc"><strong>Сессия «БРИКС и Глобальный Юг».</strong> Выступление Посла: 10–12 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">12:00–13:00</div>
                <div className="program-place">VIP-зона</div>
                <div className="program-desc">Рабочий ланч с руководителями регионов.</div>
              </div>
              <div className="program-row">
                <div className="program-time">13:00–14:30<br/>(выступление 13:20–13:27)</div>
                <div className="program-place">Зал 1A5</div>
                <div className="program-desc"><strong>Сессия «Межрегиональное сотрудничество».</strong> Выступление Посла: 5–7 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">15:00–17:00<br/>(выступление 15:25–15:40)</div>
                <div className="program-place">Главный зал</div>
                <div className="program-desc"><strong>Пленарное заседание форума.</strong> Центральное выступление Посла: 12–15 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">17:15–18:00</div>
                <div className="program-place">VIP-зона</div>
                <div className="program-desc">Встреча с городами-побратимами.</div>
              </div>
              <div className="program-row">
                <div className="program-time">18:30–20:00</div>
                <div className="program-place">Официальный прием форума</div>
                <div className="program-desc"><strong>Прием участников форума.</strong> Неформальные контакты.</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer simple />
    </div>
  );
};

export default Program;
