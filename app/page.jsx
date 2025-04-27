import content from "./content";

import styles from "./style.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.content}>
        {content.map(({ heading, subheading, paragraphs }, index) => (
          <section key={index}>
            <header>
              <h2>{heading}</h2>
              <h3>{subheading}</h3>
            </header>

            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </section>
        ))}

        <button>Subscribe</button>
      </div>
    </>
  );
}
