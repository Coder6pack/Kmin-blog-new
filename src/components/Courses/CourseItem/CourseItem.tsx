import React from "react";
import style from "./style.module.css";
import Link from "@docusaurus/Link";

export default function CourseItem() {
  return (
    <Link to="#" className={style.courseWrapper}>
      <div className={style.CourseItemContainer}>
        <div className={style.imgContainer}>
          <img
            src="https://cms.kmin.edu.vn/uploads/f1_thumbnail_4042e665c3.png"
            alt=""
            className={style.imgItem}
          />
        </div>
        <div>
          <h3 className={style.courseTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            neque enim cum omnis
          </h3>
        </div>
      </div>
    </Link>
  );
}
