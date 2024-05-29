import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="headerContent">
          <div className="headerText">
            <h1 className="hero__title customHeader">{siteConfig.title}</h1>
            <p className="hero__subtitle customSubtitle">{siteConfig.tagline}</p>
          </div>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="ServiceNow Next Experience">
      <HomepageHeader />
      <main>
      <HomepageFeatures />
      </main>
    </Layout>
  );
}
