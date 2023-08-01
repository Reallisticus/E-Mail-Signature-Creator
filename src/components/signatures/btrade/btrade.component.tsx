import React from 'react';
import styles from './btrade.module.css';

const BTradeSignature = () => {
  return (
    <article className='message is-primary'>
      <div
        className={`${styles.card} ${styles.signatureContainer} 'message-body'`}
        id='signature_container'
      >
        <div id={styles.namePositionContainer}>
          <p className={styles.headerSection}>
            <strong className={'name' + ' ' + styles.name} id='preparedName'>
              Agent Name
            </strong>
          </p>
          <p className={styles.position + ' ' + 'position'}>Position</p>
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
                    className={
                      'email' + ' ' + styles.linkOne + styles.paragraphFour
                    }
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
    </article>
  );
};

export default BTradeSignature;
