import React from 'react';
import styles from './btrade.module.css';

const BTradeSignature = () => {
  return (
    <div
      className={`${styles.card} ${styles.signatureContainer}`}
      id='signature_container'
    >
      <div id={styles.namePositionContainer}>
        <p className={styles.headerSection}>
          <strong className={styles.name} id='preparedName'>
            Adam Varga
          </strong>
        </p>
        <p className={`${styles.position} rolepos`}>Senior Account Manager</p>
      </div>
      <table
        cellSpacing='0'
        cellPadding='0'
        className={styles.tableContainer}
        id='signature'
      >
        <tbody>
          <tr>
            <td className={styles.logo}>
              <img src='/btrade-logo-light.webp' alt='BTrade Logo' />
              <div className={styles.logo2}></div>
            </td>
            <td className={styles.contactInfo}>
              <p>
                <span className={styles.email}>E-mail:</span>
                <a
                  href='mailto:name@gmail.com'
                  className={`${styles.linkOne} ${styles.paragraphFour}`}
                >
                  name@gmail.com
                </a>
              </p>
              <p className={styles.paragraphFive}>
                <span className={styles.website}>Website:</span>
                <a
                  href='https://btrade.net'
                  className={styles.linkOne}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  btrade.net
                </a>
              </p>
              <p className={styles.paragraphFive}>
                <span className={styles.companyName}>Company:</span>
                <span className={styles.companyName2}>BTrade</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BTradeSignature;
