// * react imports *
import { useState } from 'react';

// * custom component imports *
import OffcanvasNav from '@/components/offcanvas-nav/OffcanvasNav';

// * styles imports *
import classes from './AppHeader.module.scss';

function AppHeader() {
  // * state *
  const [show, setShow] = useState(false);

  // * handlers *
  const handleOffcanvasClose = function handlerOffcanvasClose() {
    setShow(false);
  };
  const handleOffcanvasOpen = function handlerOffcanvasOpen() {
    setShow(true);
  };

  return (
    <header className={classes.appHeader}>
      <button
        type="button"
        onClick={handleOffcanvasOpen}
        aria-label="Open navigation menu"
      >
        Open Menu
      </button>
      <OffcanvasNav show={show} onHide={handleOffcanvasClose} />
      <div>App Header</div>
    </header>
  );
}

export default AppHeader;
