import React, { useRef } from 'react';
import * as styles from './about.module.css';

import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Container from '../components/Container';
import Button from '../components/Button';

const HowToUsePage = (props) => {
  let builtRef = useRef();
  let toolsRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(builtRef)} to={'#builtby'}>
            Who built this theme
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(toolsRef)} to={'#tools'}>
            Compatible technologies
          </ThemeLink>
        </div>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.content} style={{ paddingTop: '80px' }}>
            <h3>Downloads for INFINIUM batteries By .</h3>
            <div id="#builtBy" ref={builtRef}>
              <p>
                We take great pride in providing the technical details of our products prior to purchase and the instruction manuals post purchase that help our users best utilize out products.{' '}
                <Button target={true} href="https://ionwat.fr/">
                  INFINIUM batteries
                </Button>{' '}
                (INFINIUM.).
              </p>
              <p>
                The Product Specifications can be found as a QR code for every product. Just scan the QR code and it will take you directly to the product specs for that product..
              </p>
              <p>
                Matter. has pre-built connections to microservices available
                through its JAMM.™ solution. JAMM.™ is a system built to run a
                headless architecture. JAMM.™ can connect micro-services,
                orchestrate data and publish websites to an edge network for
                lighting fast performce. JAMM.™ creates a server-side rendered
                website that is fast, stable and scalable for high traffic
                events.
              </p>
              <Button target={true} href="https://jamm.matter.design/">
                Read more about JAMM.™
              </Button>
              <img
                alt={'Ionwat Detail'}
                src={'/how-to-use/jamm-sydney-1upd@2x.png'}
                style={{ display: 'block', height: 'auto' }}
              />
            </div>
            <h3>Best of Breed Testing</h3>
            <div id={'#tools'} ref={toolsRef}>
              <p>
                We only use the best battery testing equipment and provide the data to our customers so they have full understanding of the technical details. .
              </p>
              <p>
                We continually product test results and publish them. Please interact with us to learn more about our methods and our SOP processes..
              </p>
              <p>
                INFINIUM. has been innovating since 2003, and we have aligned with
                companies that do it best. The following technologies are either
                currently available or are on our roadmap for INFINIUM.™.
              </p>

              <strong>Ecommerce:</strong>
              <ul>
                <li>BigCommerce</li>
                <li>VTEX (roadmap)</li>
                <li>Commercetools (roadmap)</li>
              </ul>

              <strong>Content Management Systems (CMS):</strong>
              <ul>
                <li>Contentful</li>
                <li>WordPress</li>
                <li>Sanity</li>
                <li>Builder.io</li>
              </ul>

              <strong>Advanced Search:</strong>
              <ul>
                <li>Algolia</li>
                <li>Searchspring (roadmap)</li>
                <li>XO (roadmap)</li>
                <li>Syte (roadmap)</li>
              </ul>

              <strong>Product Information Management (PIM):</strong>
              <ul>
                <li>Akeneo</li>
              </ul>

              <strong>Marketing Automation:</strong>
              <ul>
                <li>Klaviyo</li>
                <li>Ortto</li>
                <li>Dot Digital</li>
                <li>Omnisend</li>
              </ul>

              <strong>Customer Support:</strong>
              <ul>
                <li>Gorgias</li>
                <li>Zendesk</li>
              </ul>

              <strong>Reviews and User Generated Content:</strong>
              <ul>
                <li>Yotpo</li>
                <li>Trustpilot</li>
                <li>Reviews.io</li>
              </ul>

              <strong>Physical Locations:</strong>
              <ul>
                <li>Localisr.io</li>
              </ul>

              <p>
                Our team are fanatical about site speed and the agility of a
                composable commerce approach. If you need help to setup a
                Headless architecture, we’d love to hear from you.
              </p>

              <p>
                <Button
                  target={true}
                  href="https://www.matterdesign.com.au/contact/"
                >
                  Contact the team at Matter.
                </Button>
              </p>
            </div>
          </div>
        </Container>
        <div className={styles.imageContainer}>
          <img
            alt={'Best of Breed tools'}
            src={'/how-to-use/logos@2x.png'}
          ></img>
        </div>
      </div>
    </Layout>
  );
};

export default HowToUsePage;
