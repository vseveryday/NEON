import React from "react";

import cn from "classnames";
import s from "./Loader.module.scss";
import { Col, Row } from "antd";

const Loader: React.FC = () => {
  return (
    <Row>
      <Col span={1} offset={11} className={s.loader}>
        <div></div>
        <div></div>
      </Col>
    </Row>
  );
};

export default Loader;
