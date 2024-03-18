import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`INFINIUM \n IP67 Batteries made for Power`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              INFINIUM is an innovative global battery brand with a
              contemporary edge. We make timeless lithium batteries that have specifications way above the rest..
            </p>
            <br />
            <br />
            <p>
              We took over 30 years of  some of the world's first LFP batteries and spent decades
              perfecting the battery management systems that power our batteries.Today we are the only brand
              that integrates its battery management systems with its own customers.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
                INFINUM batteryes are the most reliable LFP batteries on the market. They are designed that way, and built by hand with maximum precision, then tested to insure that every battery exceeds its life.
              </p>
              <ol>
                <li>Be an ecowear</li>
                <li>Sophisticated and every battery tested. </li>
                <li>Connect in series up to 800 batteries</li>
              </ol>
              <img alt={'founder'} src={'/about2.png'}></img>
            </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Our development team 
              </p>
              <p>
                Made in Holland, Uk and USA, these batteries offer the best there is to offer..{' '}
              </p>
              <p>
                The Very Best Testing.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
