import React from 'react';
import './popup.css';

const Popup = ({ handleClose, show, children ,erase}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button onClick={erase} className='del-btn'>yes</button>
        <button onClick={handleClose}>Close</button>

      </section>
    </div>
  );
};

export default Popup;
