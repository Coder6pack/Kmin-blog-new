import React from "react";
import style from "./style.module.css";
import { tags } from "@site/src/constants/tags";
import Link from "@docusaurus/Link";

function TagName(props) {
  return (
    <Link href={props.permalink} className={style.tagName}>
      {props.name}
    </Link>
  );
}
export default function TagList() {
  return (
    <>
      <div className={style.tagListTitle}>Từ khoá liên quan</div>
      <div className={style.tagList}>
        {tags.map((tag, index) => (
          <TagName key={index} name={tag.name} permalink={tag.permalink} />
        ))}
      </div>
    </>
  );
}
