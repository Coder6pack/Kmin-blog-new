import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComponent() {
  const { colorMode } = useColorMode();
  return (
    <Giscus
      repo="Coder6pack/Kmin-blog-new"
      repoId="R_kgDOLmVk8w"
      category="General"
      categoryId="DIC_kwDOLmVk884CeTFT"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="vi"
      loading="lazy"
    />
  );
}
