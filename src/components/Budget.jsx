import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Budget.css';

const Budget = () => {
  return (
    <div className="budget-page">
      <Header simple />
      <main className="budget-main">
        <div className="top-controls">
          <Link to="/forum" className="back-button">← Назад</Link>
        </div>
        <h1 className="budget-title">СМЕТА РАСХОДОВ</h1>
        <p className="budget-subtitle">на организацию визита Чрезвычайного и Полномочного Посла Китайской Народной Республики в Российской Федерации для участия в Международном форуме «РОСТКИ–2026»</p>

        <div className="budget-info">
          <p><strong>Срок пребывания:</strong> 16–19 августа 2026 года</p>
          <p><strong>Состав делегации:</strong> 10 человек</p>
          <p><strong>Место проведения:</strong> Республика Татарстан, г. Казань</p>
        </div>

        <div className="budget-content">
          {/* Section I */}
          <div className="budget-section" id="section-i">
            <h2>I. РАЗМЕЩЕНИЕ</h2>
            <div className="budget-table">
              <div className="budget-row">
                <span className="budget-item">Президентский люкс для Посла (3 суток)</span>
                <span className="budget-cost">360 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Люксы для советников Посольства (2 номера × 3 суток)</span>
                <span className="budget-cost">240 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Номера Deluxe для членов делегации (7 номеров × 3 суток)</span>
                <span className="budget-cost">525 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Раннее заселение</span>
                <span className="budget-cost">80 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Поздний выезд</span>
                <span className="budget-cost">80 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Гарантированное бронирование этажа</span>
                <span className="budget-cost">120 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Дополнительная подготовка президентского номера</span>
                <span className="budget-cost">50 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Комплиментарное наполнение номеров</span>
                <span className="budget-cost">45 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Прачечная и химчистка</span>
                <span className="budget-cost">35 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Room-service</span>
                <span className="budget-cost">60 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Услуги консьержа</span>
                <span className="budget-cost">20 000 руб.</span>
              </div>
              <div className="budget-row total">
                <span className="budget-item">ИТОГО РАЗДЕЛ I:</span>
                <span className="budget-cost">1 615 000 руб.</span>
              </div>
            </div>
          </div>

          {/* Section II */}
          <div className="budget-section" id="section-ii">
            <h2>II. ТРАНСПОРТНОЕ ОБЕСПЕЧЕНИЕ</h2>
            <div className="budget-table">
              <div className="budget-row">
                <span className="budget-item">Представительский автомобиль Посла (Mercedes S-Class / Hongqi N701)</span>
                <span className="budget-cost">240 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Автомобили сопровождения (3 единицы)</span>
                <span className="budget-cost">540 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Микроавтобус делегации Mercedes V-Class</span>
                <span className="budget-cost">180 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Автомобиль для багажа</span>
                <span className="budget-cost">60 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Резервный автомобиль</span>
                <span className="budget-cost">80 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Работа водителей</span>
                <span className="budget-cost">180 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Топливо</span>
                <span className="budget-cost">90 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Стоянка и парковочные расходы</span>
                <span className="budget-cost">25 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Мойка и подготовка транспорта</span>
                <span className="budget-cost">15 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Бутилированная вода в автомобилях</span>
                <span className="budget-cost">8 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Навигационное и диспетчерское сопровождение</span>
                <span className="budget-cost">25 000 руб.</span>
              </div>
              <div className="budget-row total">
                <span className="budget-item">ИТОГО РАЗДЕЛ II:</span>
                <span className="budget-cost">1 443 000 руб.</span>
              </div>
            </div>
          </div>

          {/* Section III */}
          <div className="budget-section" id="section-iii">
            <h2>III. VIP-ОБСЛУЖИВАНИЕ В АЭРОПОРТУ</h2>
            <div className="budget-table">
              <div className="budget-row">
                <span className="budget-item">VIP-зал (прилет)</span>
                <span className="budget-cost">150 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">VIP-зал (вылет)</span>
                <span className="budget-cost">150 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Ускоренное прохождение формальностей</span>
                <span className="budget-cost">40 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Услуги носильщиков багажа</span>
                <span className="budget-cost">15 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Цветочная композиция для встречи</span>
                <span className="budget-cost">25 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Протокольная табличка делегации</span>
                <span className="budget-cost">5 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Фуршет в VIP-зале</span>
                <span className="budget-cost">30 000 руб.</span>
              </div>
              <div className="budget-row total">
                <span className="budget-item">ИТОГО РАЗДЕЛ III:</span>
                <span className="budget-cost">415 000 руб.</span>
              </div>
            </div>
          </div>

          {/* Section IV */}
          <div className="budget-section" id="section-iv">
            <h2>IV. ПРОТОКОЛЬНОЕ СОПРОВОЖДЕНИЕ</h2>
            <div className="budget-table">
              <div className="budget-row">
                <span className="budget-item">Руководитель протокольной группы</span>
                <span className="budget-cost">80 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Протокольные офицеры (2 человека)</span>
                <span className="budget-cost">120 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Координатор логистики</span>
                <span className="budget-cost">40 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Координатор форума</span>
                <span className="budget-cost">40 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Дежурный администратор гостиницы</span>
                <span className="budget-cost">15 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Координационный штаб визита</span>
                <span className="budget-cost">70 000 руб.</span>
              </div>
              <div className="budget-row total">
                <span className="budget-item">ИТОГО РАЗДЕЛ IV:</span>
                <span className="budget-cost">365 000 руб.</span>
              </div>
            </div>
          </div>

          {/* Section V */}
          <div className="budget-section" id="section-v">
            <h2>V. ПЕРЕВОДЧЕСКОЕ ОБЕСПЕЧЕНИЕ</h2>
            <div className="budget-table">
              <div className="budget-row">
                <span className="budget-item">Старший переводчик китайского языка</span>
                <span className="budget-cost">120 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Переводчик сопровождения</span>
                <span className="budget-cost">100 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Резервный переводчик</span>
                <span className="budget-cost">80 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Синхронное оборудование</span>
                <span className="budget-cost">150 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Наушники для участников встреч</span>
                <span className="budget-cost">40 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Печать материалов на китайском языке</span>
                <span className="budget-cost">30 000 руб.</span>
              </div>
              <div className="budget-row total">
                <span className="budget-item">ИТОГО РАЗДЕЛ V:</span>
                <span className="budget-cost">520 000 руб.</span>
              </div>
            </div>
          </div>

          {/* Section VI */}
          <div className="budget-section" id="section-vi">
            <h2>VI. ПИТАНИЕ</h2>
            <div className="budget-table">
              <div className="budget-row">
                <span className="budget-item">Протокольный чай</span>
                <span className="budget-cost">60 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Рабочий обед культурной программы</span>
                <span className="budget-cost">90 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Завтраки делегации (4 дня)</span>
                <span className="budget-cost">120 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Ланчи на площадке форума</span>
                <span className="budget-cost">160 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Закрытый ужин делегации</span>
                <span className="budget-cost">180 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Дипломатический ужин</span>
                <span className="budget-cost">300 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Официальный прием форума</span>
                <span className="budget-cost">200 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Кофе-брейки</span>
                <span className="budget-cost">60 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Бутилированная вода</span>
                <span className="budget-cost">20 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Фрукты и комплиментарные наборы</span>
                <span className="budget-cost">30 000 руб.</span>
              </div>
              <div className="budget-row total">
                <span className="budget-item">ИТОГО РАЗДЕЛ VI:</span>
                <span className="budget-cost">1 220 000 руб.</span>
              </div>
            </div>
          </div>

          {/* Section VII */}
          <div className="budget-section">
            <h2>VII. БЕЗОПАСНОСТЬ</h2>
            <div className="budget-table">
              <div className="budget-row">
                <span className="budget-item">Частная охрана гостиницы</span>
                <span className="budget-cost">250 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Дополнительный контроль доступа на этаж</span>
                <span className="budget-cost">120 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Проверка переговорных помещений</span>
                <span className="budget-cost">80 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Радиосвязь группы сопровождения</span>
                <span className="budget-cost">40 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Медицинское сопровождение</span>
                <span className="budget-cost">70 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Резервная бригада скорой помощи</span>
                <span className="budget-cost">120 000 руб.</span>
              </div>
              <div className="budget-row total">
                <span className="budget-item">ИТОГО РАЗДЕЛ VII:</span>
                <span className="budget-cost">680 000 руб.</span>
              </div>
            </div>
          </div>

          {/* Section VIII */}
          <div className="budget-section">
            <h2>VIII. ДЕЛОВАЯ ПРОГРАММА</h2>
            <div className="budget-table">
              <div className="budget-row">
                <span className="budget-item">Аренда переговорных комнат</span>
                <span className="budget-cost">180 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Техническое оснащение переговорных</span>
                <span className="budget-cost">100 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Мультимедийное оборудование</span>
                <span className="budget-cost">120 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Презентационные материалы</span>
                <span className="budget-cost">45 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Канцелярские принадлежности</span>
                <span className="budget-cost">15 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Папки участников</span>
                <span className="budget-cost">25 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Бейджи и ленты</span>
                <span className="budget-cost">12 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Настольные флаги РФ и КНР</span>
                <span className="budget-cost">20 000 руб.</span>
              </div>
              <div className="budget-row total">
                <span className="budget-item">ИТОГО РАЗДЕЛ VIII:</span>
                <span className="budget-cost">517 000 руб.</span>
              </div>
            </div>
          </div>

          {/* Section IX */}
          <div className="budget-section">
            <h2>IX. ИНФОРМАЦИОННОЕ СОПРОВОЖДЕНИЕ</h2>
            <div className="budget-table">
              <div className="budget-row">
                <span className="budget-item">Фотограф</span>
                <span className="budget-cost">60 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Видеооператор</span>
                <span className="budget-cost">80 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Монтаж итогового ролика</span>
                <span className="budget-cost">40 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Подготовка пресс-релиза</span>
                <span className="budget-cost">15 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Работа пресс-службы</span>
                <span className="budget-cost">60 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Печать пресс-китов</span>
                <span className="budget-cost">25 000 руб.</span>
              </div>
              <div className="budget-row total">
                <span className="budget-item">ИТОГО РАЗДЕЛ IX:</span>
                <span className="budget-cost">280 000 руб.</span>
              </div>
            </div>
          </div>

          {/* Section X */}
          <div className="budget-section">
            <h2>X. ПОДАРОЧНЫЙ ФОНД</h2>
            <div className="budget-table">
              <div className="budget-row">
                <span className="budget-item">VIP-подарок Послу КНР</span>
                <span className="budget-cost">350 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Подарки членам делегации</span>
                <span className="budget-cost">180 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Сувенирная продукция форума</span>
                <span className="budget-cost">70 000 руб.</span>
              </div>
              <div className="budget-row">
                <span className="budget-item">Подарочная упаковка</span>
                <span className="budget-cost">20 000 руб.</span>
              </div>
              <div className="budget-row total">
                <span className="budget-item">ИТОГО РАЗДЕЛ X:</span>
                <span className="budget-cost">620 000 руб.</span>
              </div>
            </div>
          </div>

          {/* Section XI */}
          <div className="budget-section">
            <h2>XI. РЕЗЕРВНЫЙ ФОНД (10%)</h2>
            <div className="budget-table">
              <div className="budget-row">
                <span className="budget-item">Резерв на непредвиденные расходы:</span>
                <span className="budget-cost">767 500 руб.</span>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="budget-total">
            <h2>ОБЩАЯ СТОИМОСТЬ ВИЗИТА</h2>
            <div className="total-amount">
              <p className="amount-numerical">8 442 500 рублей</p>
              <p className="amount-words">Восемь миллионов четыреста сорок две тысячи пятьсот рублей 00 копеек</p>
            </div>
          </div>
        </div>
      </main>
      <Footer simple />
    </div>
  );
};

export default Budget;
