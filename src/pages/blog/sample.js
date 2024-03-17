import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'design'}
              title={'Introducing : INFINIUM'}
              image={'/blogFeatured.png'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  I am a france based designer .
                </p>
                <p className={styles.blogParagraph}>
                  The Infinium Battery website; www.infiniumbattery.com
                  (the Website).
                </p>
                <p className={styles.blogParagraph}>
                  This P.
                </p>
                <p className={styles.blogParagraph}>
                  This.
                </p>
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={'/cloth.png'} alt={'sample1'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={'/collections/collection1.png'} alt={'sample2'} />
                </div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>2. Lorem ipsum</h2>
                <p className={styles.blogParagraph}>
                  Our Services, 
                </p>
                <p className={styles.blogParagraph}>
                  If you are under 
                </p>
                <p className={styles.blogParagraph}>
                  The Upside collects
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
