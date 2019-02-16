import React from 'react';
import styles from './styles.module.css';

function BigComponent(props) {

  return (
      <div style={{ padding: 20, fontSize: 20, color: '#001'}}>
        <p style={{ padding: 10 }}>Very Big Component, should be loaded dynamically</p>
        <div className={styles.scrollContainer}>
          {
            [...Array(500)].map((_,i) => i).map(index => {
              return (
                  <div key={index}>
                    User: {index}
                  </div>
              )
            })
          }
        </div>
      </div>
  );
}

export default React.memo(BigComponent);
