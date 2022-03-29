import { useState, useRef, useEffect } from "react";
import { GlitchText } from "./GlitchText";

import styles from "./PortfolioItem.module.scss";

// TODO Rewrite in functional style; use hooks so I can add onView effects; I don't know how in class-component style; neither does Google, ffs.

export function PortfolioItem({ image, linkDemo, linkSource, technologies, title, description }) {
// export function PortfolioItem(props) {
  const [visible, setVisible] = useState(false);

  const domRef = useRef();

  // Setup on-view effect trigger
  useEffect( () => {
    const observer = new IntersectionObserver( entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    });

    const node = domRef.current;
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  // Request banner image
  const bannerImage = (image)
    ? require(`../resources/img/portfolio/${image}`).default
    : '';
  // TODO styles fail miserably if bannerImage is null

  // Show project link menu?
  const showSidebar = (linkDemo || linkSource);

  // List of technology words — extract to new component?
  technologies =technologies || [];
  const technologyElems = technologies.map( (word, idx) =>
    <span
      key={`tech_${idx}`}
      className={styles.technologyWord}>
        {word}
    </span>
  );

  // Reintroduce text formatting.
  // TODO Look into interpretting strings as HTML; also, is that dangerous?
  // TODO What about markdown?
  const bodyContent = description.split('\n').map( p => <p>{p}</p>);


  return (
    <div ref={domRef} className={styles.block}>

      <div className={styles.preview}>
        <img
          className={styles.previewImage}
          src={bannerImage}
          alt={title}
        />
        <div className={styles.gradientOverlay} />
        <div className={styles.titleWrapper}>
          <GlitchText
            text={title + '_'}
            pattern={visible ? 'blank-reveal' : 'blank'}
            textStyle={styles.titleText}
            wordStyle={styles.titleWord}
            charStyle={styles.titleLetters}
          />
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.mainWrapper}>

          <div className={styles.main}>
            <div className={styles.technologies}>
              {technologyElems}
            </div>
            <div className={styles.description}>
              {bodyContent}
            </div>
            <div className={styles.endbar} />
          </div>

          {showSidebar &&
            <div className={styles.sidebarWrapper}>
              <div className={styles.sidebar}>

                {/* TODO Extract to component, and to button list before return */}
                {linkDemo &&
                  <a
                    className={styles.link}
                    href={linkDemo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    view
                  </a>
                }
                {linkSource &&
                  <a
                    className={styles.link}
                    href={linkSource}
                    target="_blank"
                    rel="noreferrer"
                  >
                    git
                  </a>
                }

              </div>
            </div>
          }

        </div>
      </div>

    </div>
  );
}
