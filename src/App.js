import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import Login from './views/Login';
import Uploadpdf from './views/Uploadpdf';
import IncomeTax from './views/IncomeTax';

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/login" component={Login} />
          <AppRoute exact path="/upload-pdf" component={Uploadpdf} />
          <AppRoute exact path="/imposto" component={IncomeTax} />
        </Switch>
      )} />
  );
}

export default App;