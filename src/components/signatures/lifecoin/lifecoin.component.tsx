import styles from './lifecoin.module.css'

const LCSignature: React.FC = () => {
  return (
    <article className='message is-primary'>
      <div className='message-body' id='signature_container'>
        <table cellSpacing='0' cellPadding='0' id='signature'>
          <tbody>
            <tr>
              <td className={styles.color333}>
                <p className={styles.paragraphOne}>
                  <strong
                    className={'name' + ' ' + styles.fontStrong}
                    id='preparedName'
                  >
                    Name
                  </strong>
                </p>
                <p className={'position' + ' ' + styles.paragraphTwo}>
                  Account manager
                </p>
                <p className={styles.paragraphThree}>
                  <img
                    className={styles.imgOne}
                    src='https://svsolutions.eu/assets/clients/mail.png'
                  />
                  <a
                    href='mailto:name@gmail.com'
                    className={'email' + ' ' + styles.paragraphFour}
                  >
                    email
                  </a>
                </p>
                <span id='logoWrap'>
                  <span className={styles.spanOne} id='logoWrap'></span>
                  <p className={styles.paragraphFive}>
                    <a href='#' className={styles.linkOne}>
                      <img
                        className={styles.linkTwo}
                        src='https://svsolutions.eu/assets/clients/web.png'
                      />
                      https://lifecoinfex.net
                    </a>
                  </p>
                </span>
              </td>
              <td className={styles.tablePone}>
                <span className={styles.spanLast}></span>
                <img
                  className={styles.lifecoin}
                  src='https://svsolutions.eu/assets/clients/l_logo.png'
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default LCSignature
