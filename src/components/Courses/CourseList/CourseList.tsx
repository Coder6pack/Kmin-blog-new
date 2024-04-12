import React from "react";
import style from "./style.module.css";
import CourseItem from "../CourseItem";

export default function CourseList() {
  return (
    <div className={style.container}>
      {Array(5)
        .fill(0)
        .map((value, index) => (
          <CourseItem key={index} />
        ))}
    </div>
  );
}
