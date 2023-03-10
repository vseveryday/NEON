import React, { useEffect } from "react";
import { Container, Nav } from "react-bootstrap";

import cn from "classnames";
import s from "./Main.module.scss";

const MainPage: React.FC = () => {
  const [up, setUpButton] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setUpButton(true);
      }
      if (window.scrollY < 1000) {
        setUpButton(false);
      }
      
    });
  }, []);
  return (
    <>
      <div id="top" className={s.top}>
        <p>
          <span>НЕОН</span>
          <br />
          <br />
          <span>город будущего</span>
        </p>
      </div>
      <Nav
        className={cn("my-5 py-3 justify-content-center", s.nav_pills)}
        variant="pills"
        defaultActiveKey="/home"
        as="ul"
        style={{ backgroundColor: "#2c2c2c" }}
      >
        <Nav.Item as="li">
          <Nav.Link className={cn("mx-3 rounded-5", s.pill)} href="#about">
            О проекте
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className={cn("mx-3 rounded-5", s.pill)} href="#finance">
            Финансирование
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className={cn("mx-3 rounded-5", s.pill)} href="#aravia">
            Политика Сауд. аравии
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        <div className={cn("p-5 rounded-5 mb-5", s.about)} id="about">
          {/* О проекте */}
          <Container>
            <p className="">
              <h1 className="text-center">О проекте</h1>"Наша цель - вывести
              Саудовскую Аравию в тройку крупнейших фондовых рынков планеты", -
              заявил наследный принц Саудовской Аравии Мухаммед бин Салман.
              Саудовская Аравия оценивает стоимость “НЕОМ" в $500 млрд, IPO
              должно состояться к 2024 году. Принц Мухаммед отметил, что он
              ожидает, что IPO “НЕОМ" увеличит объем фондового рынка королевства
              более чем на $266 млрд. Кроме того, королевство выделит $80 млрд
              (300 млрд динаров) на создание инвестиционного фонда “НЕОМ",
              который в перспективе может вырасти до 106 млрд долларов, сообщил
              наследный принц Мухаммед бин Салман журналистам в Джидде. Целью
              фонда будет инвестирование в компании, базирующиеся в “НЕОМ". Он
              добавил, что саудовский суверенный фонд в конечном итоге выйдет из
              всех компаний, в которые инвестировал. На этом мероприятии принц
              впервые раскрыл структуру финансирования “НЕОМ", одной из самых
              крупных и технически сложных строек мира. "Первая фаза проекта,
              которая продлится до 2030 года, обойдется в 1,2 трлн риялов, и
              примерно половина этой суммы будет покрыта из средств
              Государственного инвестиционного фонда", - сказал наследный принц.
              Еще $159 млрд поступит от саудовских суверенных фондов,
              региональных и иностранных частных инвесторов, а также от
              первичного размещения акций “НЕОМ" на саудовском фондовом рынке.
            </p>
          </Container>
        </div>
        <div id="finance" className={cn("p-5 rounded-5 mb-5", s.finance)}>
          <Container>
            <p>
              <h1 className="text-center">Финансирование</h1>
              На бирже Саудовской Аравии планируется IPO инвестиционного фонда
              Neom, сообщает Bloomberg. Страна выделит в фонд 300 млрд риалов,
              то есть около $783 млрд. Но грандиозному проекту требуется больше
              финансирования — наследный принц строит в пустыне огромный
              инновационный мегаполис. Вклад мирового сообщества составлял около
              43%от общего бюджета,так же Россия вложила в проект NEON 8% от
              общего бюджета,что составляет $64млрд -так же большой вклад внес и
              Китай он вложил в проектирование и развитие города будущего один
              из самых больших вкладов, около 17%что составило 265млрд Neom
              заинтересован в глобальных инвесторах — только первая фаза проекта
              оценивается в 1,2 трлн риалов ($320 млрд), государство финансирует
              половину суммы. IPO проекта планируется провести в 2024 г. — принц
              ожидает, что оно будет настолько масштабным, что поднимет позиции
              биржи Саудовской Аравии в мировом рейтинге.Также на 46%
              увеличивается конкурентоспособность самих Саудитов путем
              технологически развитой инфраструктуры
            </p>
          </Container>
        </div>
        <div id="aravia" className={cn("p-5 rounded-5 mb-5", s.aravia)}>
          <Container>
            <p>
              <h1 className="text-center">Политика Саудовской аравии</h1>
              Внешняя политика Саудовской Аравии — это общий курс Саудовской
              Аравии в международных делах. Государство заявляет о своей
              политике, направленной на сотрудничество с арабскими государствами
              Персидского залива, экспортирующими нефть, единство арабского
              мира, исламскую силу и солидарность, а также поддержку Организации
              Объединенных Наций (ООН). На практике основными направлениями во
              внешней политике Саудовской Аравии в последние годы стали
              отношения с США, палестино-израильский конфликт, Ирак,
              политическое противостояние с Ираном, ценообразование на нефть и
              использование её нефтяных богатств для увеличения влияния ислама и
              особенно консервативной школы ислама, поддерживаемой правителями
              страны (известной как ваххабизм). Саудовская Аравия тратит большие
              финансовые средства на помощь в развитии мусульманских стран. С
              1986 по 2006 год страна пожертвовала на это около £49 миллиардов.
              Хотя Саудовская Аравия является членом Движения неприсоединения,
              она ранее была известна как лидер союзного США "прозападного
              лагеря" арабских стран, состоящего из Египта, Иордании и арабских
              государств Персидского залива. Саудовская Аравия и США традиционно
              являются близкими стратегическими союзниками и партнёрами. Тем не
              менее, отношения между странами стали напряжёнными и претерпевали
              период серьёзного спада в течение последних нескольких лет
              президентства Барака Обамы, но после избрания президента Дональда
              Трампа, установившего тесные связи с Саудовской королевской
              семьёй, отношения наладились. Китай также является важным
              союзником Саудовской Аравии, отношения между ними активно
              развиваются в последнее время. Большинство саудовцев также имеют
              благоприятное мнение о Китае. Саудовская Аравия — одна из
              основателей Организации стран — экспортёров нефти. Её долгосрочная
              ценовая политика по нефти заключается в том, чтобы сохранять
              стабильные и умеренные цены на нефть: достаточно высокие, чтобы
              получать значительные доходы, но не настолько высокие, чтобы
              поощрять разработку альтернативных источников энергии среди
              стран-импортёров нефти или ставить под угрозу экономику западных
              стран, в которых хранятся многие саудовские финансовые активы и
              которые оказывают политическую и военную поддержку правительству
              Саудовской Аравии. Исключение из этого правила произошло во время
              нефтяного кризиса 1973 года, когда Саудовская Аравия и другие
              арабские нефтяные государства, использовали эмбарго на поставки
              нефти в качестве давления на США, чтобы те прекратили поддерживать
              Израиль. Помимо ОПЕК Саудовская Аравия является членом таких
              международных организаций как ООН, Лига арабских государств, Совет
              сотрудничества арабских государств Персидского залива, Всемирная
              исламская лига, Организация исламского сотрудничества, Исламский
              банк развития, штаб-квартиры последних четырёх расположены в
              Саудовской Аравии. Страна играет заметную роль в Международном
              валютном фонде, Всемирном банке, а в 2005 году Саудовская Аравия
              вступила во Всемирную торговую организацию.
            </p>
          </Container>
        </div>
      </div>
      {up && (
        <a href="#top"><div className={cn("shadow text-center my-auto animate__animated animate__fadeIn", s.up)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="black"
          className="bi bi-airplane"
          viewBox="0 0 16 16"
        >
          <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z" />
        </svg>
      </div></a>
      )}
    </>
  );
};

export default MainPage;
