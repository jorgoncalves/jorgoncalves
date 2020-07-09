import React from 'react';

import UIkit from 'uikit';
import 'uikit/dist/css/uikit.min.css';
import Icons from 'uikit/dist/js/uikit-icons';

import Presentation from './Views/Presentation/Presentation';
import Navbar from './Views/Navbar/Navbar';
import Footer from './Views/Footer/Footer';

import './App.css';

UIkit.use(Icons);

export default function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Footer />
    </>
  );
}
