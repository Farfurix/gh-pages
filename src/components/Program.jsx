import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PageNavigation from './PageNavigation';
import './Program.css';

const Program = () => {
  return (
    <div className="program-page">
      <Header simple />
      <main className="program-main">
        <div className="top-controls">
          <Link to="/forum" className="back-button">← Назад</Link>
          <PageNavigation sections={[
            { id: 'general-info', title: 'Общая информация' },
            { id: 'day-1', title: '16 августа' },
            { id: 'day-2', title: '17 августа' },
            { id: 'day-3', title: '18 августа' },
            { id: 'day-4', title: '19 августа' }
          ]} />
        </div>
        <div className="protocol-title">
          <p>ПРОТОКОЛЬНАЯ ПРОГРАММА ПРЕБЫВАНИЯ</p>
          <p>ЧРЕЗВЫЧАЙНОГО И ПОЛНОМОЧНОГО ПОСЛА</p>
          <p>КИТАЙСКОЙ НАРОДНОЙ РЕСПУБЛИКИ</p>
          <p>НА МЕЖДУНАРОДНОМ ФОРУМЕ <span className="caps">РОСТКИ–2026</span></p>
        </div>

        <div className="program-content">
          <div className="program-section-top" id="general-info">
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

          <div className="program-day" id="day-1">
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
                <div className="program-time">15:30–15:45</div>
                <div className="program-place">Маршрут внутри г. Казани</div>
                <div className="program-desc">Переезд от площадки мероприятия к переговорной комнате. Сопровождение протокольной группы и службы безопасности.</div>
              </div>
              <div className="program-row">
                <div className="program-time">15:45–16:30</div>
                <div className="program-place">Переговорная комната принимающей стороны</div>
                <div className="program-desc"><strong>Встреча с китайской диаспорой и бизнесом.</strong> Закрытая рабочая встреча. Вступительное слово Посла: 5–7 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">16:30–17:15</div>
                <div className="program-place">Kazan Palace by TASIGO</div>
                <div className="program-desc">Прибытие в гостиницу. Регистрация по заранее подготовленным документам, размещение в Президентский люкс.</div>
              </div>
              <div className="program-row">
                <div className="program-time">17:15–17:55</div>
                <div className="program-place">Kazan Palace by TASIGO</div>
                <div className="program-desc">Личное время, подготовка к вечерним протокольным мероприятиям. Режим: закрытое время.</div>
              </div>
              <div className="program-row">
                <div className="program-time">17:55–18:00</div>
                <div className="program-place">Kazan Palace by TASIGO, VIP-выход</div>
                <div className="program-desc">Сбор Посла и сопровождающих лиц, переход к месту проведения протокольного чая. Сопровождение службы безопасности и протокола.</div>
              </div>
              <div className="program-row">
                <div className="program-time">18:00–19:00</div>
                <div className="program-place">Резиденция принимающей стороны</div>
                <div className="program-desc"><strong>Протокольный чай</strong> с представителями принимающей стороны. Неформальное установление контактов. Возможна краткая реплика до 3 минут.</div>
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

          <div className="program-day" id="day-2">
            <h3>17 августа 2026 года (понедельник)</h3>
            <h4>Первый день деловой программы</h4>
            <div className="program-table">
              <div className="program-row">
                <div className="program-time">07:30–08:10</div>
                <div className="program-place">Kazan Palace by TASIGO, ресторан</div>
                <div className="program-desc">Закрытый завтрак делегации.</div>
              </div>
              <div className="program-row">
                <div className="program-time">08:10–08:45</div>
                <div className="program-place">Маршрут: гостиница — МВЦ «Казань Экспо»</div>
                <div className="program-desc">Переезд к месту проведения форума.</div>
              </div>
              <div className="program-row">
                <div className="program-time">08:45–08:55</div>
                <div className="program-place">МВЦ «Казань Экспо», VIP-вход</div>
                <div className="program-desc">Прибытие, проход через VIP-вход, аккредитационный контроль.</div>
              </div>
              <div className="program-row">
                <div className="program-time">08:45–08:55</div>
                <div className="program-place">МВЦ «Казань Экспо», VIP-вход</div>
                <div className="program-desc">Прибытие, проход через VIP-вход, аккредитационный контроль, сопровождение в VIP-гостиную. Размещение Посла в зоне ожидания до открытия форума.</div>
              </div>
              <div className="program-row">
                <div className="program-time">08:55–09:00</div>
                <div className="program-place">МВЦ «Казань Экспо», главный зал</div>
                <div className="program-desc">Переход из VIP-гостиной в главный зал. Размещение в первом ряду / секторе почетных гостей. Сопровождение протокола и службы безопасности.</div>
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
                <div className="program-time">10:45–11:00</div>
                <div className="program-place">VIP-гостиная</div>
                <div className="program-desc">Короткий перерыв, кофе, подготовка к сессии.</div>
              </div>
              <div className="program-row">
                <div className="program-time">10:00–12:00<br/>(участие 11:00–11:25)</div>
                <div className="program-place">Зал 1A1</div>
                <div className="program-desc"><strong>Сессия «Международный транспортный коридор».</strong> Реплика Посла: до 5 минут; ответы на вопросы: до 10 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">12:00–12:50</div>
                <div className="program-place">VIP-переговорная</div>
                <div className="program-desc"><strong>Встреча с Раисом Республики Татарстан.</strong> Обсуждение межрегионального сотрудничества. Фото-протокол: 3–5 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">12:50–13:00</div>
                <div className="program-place">Маршрут: VIP-переговорная — зал 1A2</div>
                <div className="program-desc">Переход на площадку следующей сессии.</div>
              </div>
              <div className="program-row">
                <div className="program-time">13:00–14:30<br/>(выступление 13:15–13:30)</div>
                <div className="program-place">Зал 1A2</div>
                <div className="program-desc"><strong>Сессия «Китайский бизнес, добро пожаловать в Татарстан!».</strong> Выступление Посла: 10–15 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">14:30–15:00</div>
                <div className="program-place">VIP-гостиная</div>
                <div className="program-desc">Неформальное общение с представителями китайских компаний.</div>
              </div>
              <div className="program-row">
                <div className="program-time">15:00–17:00<br/>(выступление 15:15–15:35)</div>
                <div className="program-place">Зал 1A3</div>
                <div className="program-desc"><strong>Бизнес-диалог «Россия — Китай».</strong> Выступление Посла: 15–20 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">17:00–17:30</div>
                <div className="program-place">VIP-гостиная / переговорная</div>
                <div className="program-desc">Короткий отдых, работа с помощниками, подготовка к вечернему приему.</div>
              </div>
              <div className="program-row">
                <div className="program-time">17:30–18:20</div>
                <div className="program-place">Маршрут: МВЦ «Казань Экспо» — площадка приема</div>
                <div className="program-desc">Переезд к месту проведения приема Правительства РТ.</div>
              </div>
              <div className="program-row">
                <div className="program-time">18:30–20:00</div>
                <div className="program-place">Прием Правительства Республики Татарстан</div>
                <div className="program-desc"><strong>Официальный прием.</strong> Участие в качестве почетного иностранного гостя. Возможна реплика до 3 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">20:00–20:15</div>
                <div className="program-place">Маршрут: площадка приема — закрытая площадка ужина</div>
                <div className="program-desc">Переезд к месту закрытого ужина китайской делегации.</div>
              </div>
              <div className="program-row">
                <div className="program-time">20:15–21:15</div>
                <div className="program-place">Закрытая площадка / ресторан</div>
                <div className="program-desc">Ужин китайской делегации. Координация работы, обсуждение итогов дня.</div>
              </div>
              <div className="program-row">
                <div className="program-time">21:15–21:45</div>
                <div className="program-place">Маршрут: закрытая площадка — Kazan Palace by TASIGO</div>
                <div className="program-desc">Возвращение в гостиницу.</div>
              </div>
              <div className="program-row">
                <div className="program-time">21:45–22:30</div>
                <div className="program-place">Kazan Palace by TASIGO</div>
                <div className="program-desc">Прибытие, личное время. Завершение программы дня.</div>
              </div>
            </div>
          </div>

          <div className="program-day" id="day-3">
            <h3>18 августа 2026 года (вторник)</h3>
            <h4>Второй день деловой программы форума</h4>
            <div className="program-table">
              <div className="program-row">
                <div className="program-time">07:30–08:15</div>
                <div className="program-place">Kazan Palace by TASIGO, ресторан</div>
                <div className="program-desc">Закрытый завтрак делегации. Подготовка к деловому завтраку ТАСС и пленарному заседанию.</div>
              </div>
              <div className="program-row">
                <div className="program-time">08:15–08:45</div>
                <div className="program-place">Маршрут: гостиница — площадка делового завтрака</div>
                <div className="program-desc">Переезд на деловой завтрак ТАСС.</div>
              </div>
              <div className="program-row">
                <div className="program-time">09:00–10:00<br/>(выступление 09:20–09:27)</div>
                <div className="program-place">Площадка делового завтрака ТАСС</div>
                <div className="program-desc"><strong>Деловой завтрак ТАСС.</strong> Обсуждение информационного и делового измерения российско-китайского сотрудничества. Выступление Посла: 5–7 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">10:00–10:15</div>
                <div className="program-place">Маршрут / переход к залу 1A4</div>
                <div className="program-desc">Переход на сессию «БРИКС и Глобальный Юг».</div>
              </div>
              <div className="program-row">
                <div className="program-time">10:00–12:00<br/>(выступление 10:25–10:37)</div>
                <div className="program-place">Зал 1A4</div>
                <div className="program-desc"><strong>Сессия «БРИКС и Глобальный Юг».</strong> Выступление Посла: 10–12 минут. Тема: «БРИКС как механизм формирования многополярного мира».</div>
              </div>
              <div className="program-row">
                <div className="program-time">12:00–13:00</div>
                <div className="program-place">VIP-зона</div>
                <div className="program-desc">Рабочий ланч с руководителями регионов. Обсуждение межрегиональных проектов.</div>
              </div>
              <div className="program-row">
                <div className="program-time">13:00–14:30<br/>(выступление 13:20–13:27)</div>
                <div className="program-place">Зал 1A5</div>
                <div className="program-desc"><strong>Сессия «Межрегиональное сотрудничество».</strong> Выступление Посла: 5–7 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">14:30–14:50</div>
                <div className="program-place">VIP-гостиная</div>
                <div className="program-desc">Короткий перерыв. Подготовка к пленарному заседанию.</div>
              </div>
              <div className="program-row">
                <div className="program-time">14:50–15:00</div>
                <div className="program-place">Маршрут: VIP-гостиная — главный зал</div>
                <div className="program-desc">Переход в главный зал, размещение на сцене.</div>
              </div>
              <div className="program-row">
                <div className="program-time">15:00–17:00<br/>(выступление 15:25–15:40)</div>
                <div className="program-place">Главный зал</div>
                <div className="program-desc"><strong>Пленарное заседание форума.</strong> Центральное политическое выступление Посла (12–15 минут).</div>
              </div>
              <div className="program-row">
                <div className="program-time">17:00–17:15</div>
                <div className="program-place">Главный зал / пресс-зона</div>
                <div className="program-desc">Фото-протокол и возможный короткий пресс-подход. Комментарий для СМИ — до 3 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">17:00–17:15</div>
                <div className="program-place">Главный зал / пресс-зона</div>
                <div className="program-desc">Фото-протокол и возможный короткий пресс-подход после пленарного заседания. Комментарий для СМИ — до 3 минут, при предварительном согласовании.</div>
              </div>
              <div className="program-row">
                <div className="program-time">17:15–18:00</div>
                <div className="program-place">VIP-зона</div>
                <div className="program-desc">Встреча с представителями городов-побратимов. Обсуждение гуманитарных, образовательных и культурных проектов. Формат: рабочая встреча.</div>
              </div>
              <div className="program-row">
                <div className="program-time">18:00–18:30</div>
                <div className="program-place">VIP-гостиная</div>
                <div className="program-desc">Личное время, подготовка к официальному приему форума. Закрытая зона.</div>
              </div>
              <div className="program-row">
                <div className="program-time">18:30–20:00</div>
                <div className="program-place">Официальный прием форума</div>
                <div className="program-desc">Прием участников форума. Участие Посла в качестве почетного иностранного гостя. Неформальные контакты с представителями органов власти, регионов и бизнеса.</div>
              </div>
              <div className="program-row">
                <div className="program-time">20:00–21:00</div>
                <div className="program-place">Закрытый ужин</div>
                <div className="program-desc">Дипломатический ужин. Неформальное обсуждение проектов и итогов дня.</div>
              </div>
              <div className="program-row">
                <div className="program-time">21:00–21:35</div>
                <div className="program-place">Маршрут: площадка ужина — Kazan Palace by TASIGO</div>
                <div className="program-desc">Возвращение в гостиницу.</div>
              </div>
              <div className="program-row">
                <div className="program-time">21:35–22:30</div>
                <div className="program-place">Kazan Palace by TASIGO</div>
                <div className="program-desc">Прибытие, личное время. Завершение программы дня.</div>
              </div>
            </div>
          </div>

          <div className="program-day" id="day-4">
            <h3>19 августа 2026 года (среда)</h3>
            <h4>Выездная программа и отбытие</h4>
            <div className="program-table">
              <div className="program-row">
                <div className="program-time">07:00–07:45</div>
                <div className="program-place">Kazan Palace by TASIGO, ресторан</div>
                <div className="program-desc">Закрытый завтрак делегации. Проверка готовности к выездной программе.</div>
              </div>
              <div className="program-row">
                <div className="program-time">07:45–08:00</div>
                <div className="program-place">Kazan Palace by TASIGO, VIP-выход</div>
                <div className="program-desc">Подача кортежа, посадка делегации, выезд на выездную программу.</div>
              </div>
              <div className="program-row">
                <div className="program-time">08:00–10:30</div>
                <div className="program-place">Маршрут / выездная программа: КАМАЗ</div>
                <div className="program-desc">Посещение предприятия КАМАЗ. Встреча с руководством, презентация промышленного потенциала. Приветственная реплика Посла: до 3 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">10:30–12:00</div>
                <div className="program-place">Выездная программа: Haier</div>
                <div className="program-desc">Посещение площадки Haier. Обсуждение локализации производства и промышленной кооперации.</div>
              </div>
              <div className="program-row">
                <div className="program-time">12:00–13:00</div>
                <div className="program-place">Маршрут / переезд к месту делового обеда</div>
                <div className="program-desc">Переезд к месту делового обеда.</div>
              </div>
              <div className="program-row">
                <div className="program-time">13:00–14:00</div>
                <div className="program-place">Площадка визита</div>
                <div className="program-desc">Деловой обед с представителями принимающей стороны и предприятий. Обсуждение совместных проектов.</div>
              </div>
              <div className="program-row">
                <div className="program-time">14:00–15:30</div>
                <div className="program-place">Иннополис, ИТ-парк</div>
                <div className="program-desc">Посещение Иннополиса и ИТ-парка. Презентация инновационной инфраструктуры, цифровых проектов, образовательных и технологических программ. Возможна краткая реплика Посла до 3 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">15:30–16:00</div>
                <div className="program-place">Маршрут: ИТ-парк — переговорная</div>
                <div className="program-desc">Переезд / переход к месту итоговой встречи. Сопровождение протокола.</div>
              </div>
              <div className="program-row">
                <div className="program-time">16:00–17:00</div>
                <div className="program-place">Переговорная комната</div>
                <div className="program-desc"><strong>Подведение итогов визита.</strong> Фиксация достигнутых договоренностей, обмен контактами ответственных лиц, возможное вручение памятных подарков. Формат: закрытая итоговая встреча. Заключительное слово Посла: 5 минут.</div>
              </div>
              <div className="program-row">
                <div className="program-time">17:00–17:40</div>
                <div className="program-place">Маршрут: переговорная — Kazan Palace by TASIGO</div>
                <div className="program-desc">Возвращение в гостиницу. Кортеж следует по согласованному маршруту.</div>
              </div>
              <div className="program-row">
                <div className="program-time">17:40–18:20</div>
                <div className="program-place">Kazan Palace by TASIGO</div>
                <div className="program-desc">Сбор багажа, личное время, подготовка к выезду в аэропорт. Проверка документов и протокольных материалов. Багаж передается в автомобиль сопровождения.</div>
              </div>
              <div className="program-row">
                <div className="program-time">18:20–19:00</div>
                <div className="program-place">Маршрут: гостиница — Международный аэропорт Казань</div>
                <div className="program-desc">Отбытие в аэропорт. Сопровождение кортежем и службой безопасности.</div>
              </div>
              <div className="program-row">
                <div className="program-time">19:00–19:40</div>
                <div className="program-place">Международный аэропорт Казань, VIP-терминал</div>
                <div className="program-desc">Прибытие в аэропорт. Прохождение VIP-процедур, оформление багажа, ожидание посадки в VIP-зале. Протокольная служба сопровождает делегацию до выхода на посадку.</div>
              </div>
              <div className="program-row">
                <div className="program-time">19:40–20:00<br/>(время уточняется по рейсу)</div>
                <div className="program-place">Международный аэропорт Казань</div>
                <div className="program-desc">Проводы делегации представителями принимающей стороны. Посадка на борт, вылет делегации КНР. <strong>Официальное завершение визита.</strong></div>
              </div>
            </div>
          </div>

          <div className="program-speeches">
            <h2>КЛЮЧЕВЫЕ ВЫСТУПЛЕНИЯ ПОСЛА КНР</h2>
            <div className="speeches-table">
              <div className="speech-row">
                <div className="speech-event">17 августа, открытие форума</div>
                <div className="speech-time">09:20–09:25</div>
                <div className="speech-duration">3–5 минут</div>
                <div className="speech-topic">«Россия и Китай: новые возможности межрегионального сотрудничества»</div>
              </div>
              <div className="speech-row">
                <div className="speech-event">17 августа, сессия 1A2</div>
                <div className="speech-time">13:15–13:30</div>
                <div className="speech-duration">10–15 минут</div>
                <div className="speech-topic">«Татарстан как стратегическая площадка для расширения китайского присутствия в России»</div>
              </div>
              <div className="speech-row">
                <div className="speech-event">17 августа, бизнес-диалог 1A3</div>
                <div className="speech-time">15:15–15:35</div>
                <div className="speech-duration">15–20 минут</div>
                <div className="speech-topic">«Российско-китайское экономическое партнерство в условиях глобальной трансформации»</div>
              </div>
              <div className="speech-row">
                <div className="speech-event">18 августа, деловой завтрак ТАСС</div>
                <div className="speech-time">09:20–09:27</div>
                <div className="speech-duration">5–7 минут</div>
                <div className="speech-topic">Краткое выступление о российско-китайском деловом взаимодействии</div>
              </div>
              <div className="speech-row">
                <div className="speech-event">18 августа, сессия 1A4</div>
                <div className="speech-time">10:25–10:37</div>
                <div className="speech-duration">10–12 минут</div>
                <div className="speech-topic">«БРИКС как механизм формирования многополярного мира»</div>
              </div>
              <div className="speech-row">
                <div className="speech-event">18 августа, сессия 1A5</div>
                <div className="speech-time">13:20–13:27</div>
                <div className="speech-duration">5–7 минут</div>
                <div className="speech-topic">Межрегиональное сотрудничество России и Китая</div>
              </div>
              <div className="speech-row">
                <div className="speech-event">18 августа, пленарное заседание</div>
                <div className="speech-time">15:25–15:40</div>
                <div className="speech-duration">12–15 минут</div>
                <div className="speech-topic">Центральное политическое выступление визита</div>
              </div>
            </div>
          </div>

          <div className="program-notes">
            <h2>ПРОТОКОЛЬНЫЕ ПРИМЕЧАНИЯ</h2>
            <ul className="notes-list">
              <li>Все временные интервалы могут уточняться с учетом фактического времени прибытия, движения кортежа, регламента форума и решений принимающей стороны.</li>
              <li>Деловая программа сформирована на основе исходного перечня мероприятий форума; дополнительные элементы касаются только логистики, протокола, размещения, питания, охраны и сопровождения.</li>
              <li>При каждом публичном выступлении заранее проверяются текст выступления, перевод, микрофон, порядок выхода на сцену и место Посла в президиуме или VIP-зоне.</li>
              <li>Перемещения Посла по площадке форума осуществляются только в сопровождении сотрудника протокола, переводчика и представителей службы безопасности.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer simple />
    </div>
  );
};

export default Program;
