import React from 'react';
import styles from './button.module.css';

function Button(props) {
  return (
      <button className={styles.button}
              style={{size: 20, padding: 4}} {...props} />
  );
}

export default Button;
