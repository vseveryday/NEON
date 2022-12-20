import { Col, Row } from "antd";
import React from "react";

import cn from "classnames";
import s from "./Main.module.scss";

const MainPage: React.FC = () => {
  return (
    <Row className={s.main}>
      <Col span={16} offset={4}>
        <Row align="middle" className={s.line}>
          <Col span={8}>
            <img src="/img/ldap_logo.png" alt="" />
          </Col>
          <Col span={15} offset={1}>
            <h1>LDAP сервер для 1С</h1>
            <p>позволяет брать данные о контактах из базы данных 1С и передавать их по стандартному протоколу LDAP в любое приложение которое умеет работать с этим протоколом</p>
          </Col>
        </Row>
        <Row align="middle" className={s.line}>
          <Col span={16}>
            <h1>Где сейчас хранятся контакты ваших клиентов?</h1>
            <ul>
              <li>В почтовых адресных книгах у каждого менеджера</li>
              <li>В бумажных блокнотах и ежедневниках</li>
              <li>В Excel файлах</li>
              <li>В мобильных телефонах</li>
            </ul>
          </Col>
          <Col span={8}>
            <img src="/img/risk_04.jpg" alt="" />
          </Col>
        </Row>
        <Row align="middle" className={s.line}>
          <Col span={8}>
            <img src="/img/result_01.jpg" alt="" />
          </Col>
          <Col span={15} offset={1}>
            <h1>LDAP сервер для 1С</h1>
            <ul>
              <li>Каждый менеджер дублирует свою работу по внесению информации о клиенте</li>
              <li>Контактная информация не актуальна</li>
              <li>Увольнение менеджера приводит к частичной потери данных о клиентах</li>
              <li>Пришедший новый менеджер собирает информацию из различных источников</li>
            </ul>
          </Col>
        </Row>
        <Row align="middle" className={s.line}>
          <Col span={16}>
            <h1>При этом!</h1>
            <ul>
              <li>Основной учётной системой на вашем предприятии является система 1С</li>
              <li>В неё, в конечном итоге, попадает финансовая история работы с клиентом</li>
              <li>Все пользователи офиса уже имеют к ней доступ</li>
            </ul>
          </Col>
          <Col span={8}>
            <img src="/img/result_02.jpg" alt="" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MainPage;
