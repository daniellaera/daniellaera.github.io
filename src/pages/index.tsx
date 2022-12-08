import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="hero shadow--lw">
      <div className="container">
        <div className="avatar avatar--vertical">
          <img
            className="avatar__photo avatar__photo--xl"
            src="https://github.com/daniellaera.png"
          />
          <div className="avatar__intro">
            <h4 className="hero__title">Hi, I'm Daniel Laera</h4>
            <h6 className="hero__subtitle">
              Full-Stack Developer & Coffee Addict
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
