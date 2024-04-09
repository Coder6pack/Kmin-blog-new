import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import useIsBrowser from "@docusaurus/useIsBrowser";
import GiscusComponent from "@site/src/components/GiscusComponent";

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost();
  const isBrowser = useIsBrowser();

  const { frontMatter, title, permalink } = metadata;
  console.log(metadata.date);
  return (
    <>
      <a
        href="https://kmin.edu.vn/"
        target="_blank"
        style={{ textDecoration: "underline" }}
      >
        VÀO ĐÂY
      </a>
      <BlogPostItem {...props} />
      {isBlogPostPage && <GiscusComponent />}
    </>
  );
}
