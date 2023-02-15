import React from 'react';

import { Header } from './partials/Header.comp';
import { Footer } from './partials/Footer.comp';

export const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <header className="header">
        <Header />
      </header>
      <main className="main">Main content</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
