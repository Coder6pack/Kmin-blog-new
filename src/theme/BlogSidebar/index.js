import React from "react";
import TagList from "@site/src/components/TagList/TagList";
import Courses from "@site/src/components/Courses";
import style from "./style.module.css";

export default function BlogSidebarWrapper(props) {
  props.sidebar.title = "Bài viết mới nhất";
  return (
    <>
      <div className="col col--3">
        <div className={style.sticky}>
          <h3 className={style.title}>Các khoá học hot hiện nay</h3>
          <Courses />
          <TagList />
        </div>
      </div>
    </>
  );
}
