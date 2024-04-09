import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Tận tâm",
    Svg: require("@site/static/img/undraw_tanTam.svg").default,
    description: (
      <>
        DTận tâm từ trong suy nghĩ cho đến hành động và được chuyển hóa thành
        những bài giảng chất lượng.
      </>
    ),
  },
  {
    title: "Tận lực",
    Svg: require("@site/static/img/undraw_tanLuc.svg").default,
    description: (
      <>
        Đi cùng với sự cố gắng của học viên để tiếp thu kiến thức đó là sự nỗ
        lực không ngừng của từng thành viên trong gia đình Kmin.
      </>
    ),
  },
  {
    title: "Tận khả năng",
    Svg: require("@site/static/img/undraw_tanKhaNang.svg").default,
    description: (
      <>
        Kmin luôn làm việc với tất cả khả năng của mình. Hãy dùng khả năng của
        Kmin mở rộng hơn khả năng của bạn!
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
