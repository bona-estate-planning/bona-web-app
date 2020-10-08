import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TopNav } from 'app/components/TopNav';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <TopNav />
      <span>HomePage container</span>
    </>
  );
}
