import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <section className="header">
        <h1>Данил Вольхин</h1>
        <p>Зеленоград, к243, Москва, Россия, 20460</p>
        <p>(+7) (912) 744-40-40</p>
        <p>
          <a href="mailto:deneal123@mail.ru">deneal123@mail.ru</a> | <a href="mailto:dfvolkhin@edu.hse.ru">dfvolkhin@edu.hse.ru</a>
        </p>
        <p>
          <a href="https://t.me/yorosama">Telegram: @yorosama</a> | <a href="https://vk.com">Данил Вольхин (vk.com)</a> | <a href="https://habr.com/ru/users/digtatordigtatorov/">Мой Хабр</a>
        </p>
      </section>

      <section className="about">
        <h2>Обо мне</h2>
        <ul>
          <li>🔭 Работаю над "Системой скалярного запуска телеграмм ботов с RAG"</li>
          <li>⚡ Fun fact: Люблю кататься на сноуборде :)</li>
        </ul>
      </section>

      <section className="education">
        <h2>Образование</h2>
        <h3>Национально исследовательский университет «ВШЭ», Москва – магистратура</h3>
        <p>сентябрь 2024 – настоящее время</p>
        <p>Факультет компьютерных наук, Исследование и предпринимательство в искусственном интеллекте (ПМИ 01.04.02)</p>
      </section>

      <section className="skills">
        <h2>Навыки</h2>
        <ul>
          <li><strong>Языки программирования</strong>: Python, Matlab, C-CUDA (немного)</li>
          <li><strong>IDE</strong>: VSCodium, VS, PyCharm</li>
          <li>
            <strong>Фреймворки и библиотеки</strong>: Torch, Tensorflow, Ultralytics, Transformers, FastAPI (много занимался бекендом), React (немного),
            Streamlit, PyQt, OpenCV, Kafka (немного), Flet, HuggingFace, JupyterNotebook, OpenAI API, llama.cpp, LangFlow, LangChain, n8n
          </li>
          <li><strong>Языки</strong>: Английский (B1)</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Опыт</h2>
        <h3>7 месяцев в AtlasIT</h3>
        <p><strong>Стек</strong>: MySQL, FastAPI, React + CV, NLP</p>
        <p><strong>Описание</strong>: Full-stack разработка мини AI приложений.</p>
      </section>

      <section className="pet-project">
        <h2>Пет-проект</h2>
        <h3>Автоматизированное измерение диаметра сферических наночастиц на СЭМ-изображениях</h3>
        <p><strong>Стек</strong>: Torch, Tensorflow, Ultralytics, Streamlit</p>
        <p><strong>Описание</strong>:</p>
        <ul>
          <li>Сравнил различные подходы генерации синтетических данных (FID).</li>
          <li>Разметил набор данных из 4 тысяч искусственных изображений (Grounding-Dino + SAM).</li>
          <li>Решал задачи классификации, детекции и сегментации.</li>
          <li>Разработал пользовательский интерфейс (Streamlit).</li>
        </ul>
        <p>
          <strong>Репозиторий</strong>: <a href="https://github.com/deneal123/MicroscopeAI">deneal123/MicroscopeAI</a>
        </p>
      </section>

      <section className="hackathons">
        <h2>Хакатоны</h2>
        <h3>Международный хакатон «Цифровой прорыв. Сезон: Искусственный интеллект»</h3>
        <p><strong>Победитель</strong> – Москва, ноябрь 2023</p>
        <p><strong>Описание</strong>: Оценка эффективности вложений в содержание недвижимости.</p>
        <p><strong>Что сделал?</strong>: Подготовил данные для ML алгоритмов.</p>
        <p>
          <strong>Репозиторий</strong>: <a href="https://github.com/deneal123/HackMoscow">deneal123/HackMoscow</a>
        </p>

        <h3>Всероссийский хакатон «Цифровой прорыв. Сезон: Искусственный интеллект»</h3>
        <p><strong>Участник</strong> – Москва, октябрь 2024</p>
        <p><strong>Описание</strong>: Генерация иерархических тегов для видео с использованием мультимодальных моделей (Rutube).</p>
        <p><strong>Что сделал?</strong>: Разработал парсер, обучил модели, Backend и Frontend приложения.</p>
        <p>
          <strong>Репозиторий</strong>: <a href="https://github.com/Prischli-Drink-Coffee/NaRuTagAI">Prischli-Drink-Coffee/NaRuTagAI</a>
        </p>

        <h3>Окружные хакатоны «Цифровой прорыв. Сезон: Искусственный интеллект»</h3>
        <h4>Уральский федеральный округ – май 2024</h4>
        <p><strong>Описание</strong>: Классификация парнокопытных.</p>
        <p><strong>Что сделал?</strong>: Разметил данные, обучил Yolov8n и Swint, разработал интерфейс (PyQt).</p>
        <p>
          <strong>Репозиторий</strong>: <a href="https://github.com/deneal123/DeerAI">deneal123/DeerAI</a>
        </p>

        <h4>Центральный федеральный округ – апрель 2024</h4>
        <p><strong>Описание</strong>: Интеллектуальный анализатор обратной связи студентов.</p>
        <p><strong>Что сделал?</strong>: Обучил модели Embedding+CNN для классификации текста.</p>
        <p>
          <strong>Репозиторий</strong>: <a href="https://github.com/deneal123/StudentFeedBackAI">deneal123/StudentFeedBackAI</a>
        </p>

        <h4>Южный федеральный округ – апрель 2024</h4>
        <p><strong>Описание</strong>: Поиск экспонатов в каталоге ГоскаталогРФ.</p>
        <p><strong>Что сделал?</strong>: Обучил CNN для классификации, разработал интерфейс (Streamlit).</p>
        <p>
          <strong>Репозиторий</strong>: <a href="https://github.com/deneal123/MuseumAI">deneal123/MuseumAI</a>
        </p>

        <h3>Международный хакатон «Цифровой прорыв. Сезон: Искусственный интеллект»</h3>
        <p><strong>Победитель</strong> – Москва, ноябрь 2024</p>
        <p>
          <strong>Описание</strong>: Поиск кандидатов на вакансию на основе их личностного типа по системе OCEAN и описанию вакансии.
        </p>
        <p><strong>Что сделал?</strong>: Обучал модели, Разработал Backend и Frontend приложения.</p>
        <p>
          <strong>Репозиторий</strong>: <a href="https://github.com/Prischli-Drink-Coffee/HireSnap">Prischli-Drink-Coffee/HireSnap</a>
        </p>
      </section>

      <section className="conferences">
        <h2>Конференции</h2>
        <h3>«Микроэлектроника и информатика - 2024»</h3>
        <p>
          <strong>XXXI Всероссийская межвузовская научно-техническая конференция студентов, аспирантов и молодых ученых</strong>
        </p>
        <p><strong>Апрель 2024</strong> – Разработка алгоритма классификации и сегментации СЭМ-изображений сферических наночастиц.</p>
        <p>
          <strong>Программа</strong>: <a href="https://miet.ru">programma_microel_2024.pdf</a>
        </p>
      </section>
    </div>
  );
};

export default Resume;
