import styles from './quantum.module.css'

const QTMSignature: React.FC = () => {
  return (
    <article className='message is-primary'>
      <div className='message-body' id='signature_container'>
        <table cellSpacing='0' cellPadding='0' id='signature'>
          <tbody>
            <tr>
              <td className={styles.styleOne} id='logoWrap'>
                <img
                  className={'logo' + ' ' + styles.styleTwo}
                  src='https://svsolutions.eu/assets/clients/q_logo.png'
                  id='logoWrap'
                />
              </td>
              <td className={styles.color3333}>
                <p className={styles.styleThree}>
                  <strong
                    className={'name' + ' ' + styles.styleFour}
                    id='preparedName'
                  >
                    Agent Name:
                  </strong>
                </p>
                <p className={'position' + ' ' + styles.styleFive}>
                  Account manager
                </p>
                <p className={styles.styleSix}>
                  <a
                    href='mailto:name@gmail.com'
                    className={'email' + ' ' + styles.styleSeven}
                  >
                    email
                  </a>
                </p>

                <p className={styles.styleEight}>QuantumMarket</p>

                <p className={styles.styleNine}>
                  <a href='#' className={styles.ahref}>
                    https://qmmarket.net
                  </a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default QTMSignature
