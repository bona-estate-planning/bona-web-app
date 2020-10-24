import { TopNav } from 'app/components/TopNav';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Footer } from './Footer';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Section3 } from './Section3';
import { Section4 } from './Section4';

interface Props {}

export const LandingPage = () => (
  <>
    <Helmet>
      <title>Landing Page</title>
      <meta name="description" content="A landing page" />
    </Helmet>
    <TopNav />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Footer />
  </>
);
