import React, { useEffect } from "react";

import cn from "classnames";
import s from "./Main.module.scss";

const MainPage: React.FC = () => {
  const [up, setUpButton] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setUpButton(true);
      }
    });
  }, []);
  return (
    <>
      <div className={s.top}>
        <p>
          <span>НЕОН</span>
          <br />
          <br />
          <span>город будущего</span>
        </p>
      </div>
      {up && (
        <div
          className="rounded-3"
          style={{ height: "50px", width: "50px" }}
        ></div>
      )}
    </>
  );
};

export default MainPage;
