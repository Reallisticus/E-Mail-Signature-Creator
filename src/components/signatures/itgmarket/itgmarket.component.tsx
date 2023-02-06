import styles from './itgmarket.module.css'

const ITGSignature: React.FC = () => {
  return (
    <article className='message is-primary'>
      <div className='message-body' id='signature_container'>
        <p className={styles.dashes}>--</p>
        <p className={styles.headerSection}>
          <strong className={'name'} id='preparedName'>
            Name
          </strong>
        </p>
        <p className={'position' + ' ' + styles.rolepos}>Account manager</p>
        <hr className={styles.dotLine} />
        <table cellSpacing='0' cellPadding='0' id='signature'>
          <tbody className={styles.tableFonts}>
            <tr>
              <td className={styles.position}>
                <img className={styles.itgLogo} src='/Logo.png' width={140} />
              </td>
              <td>
                <p className={styles.centerP}>
                  <span className={styles.mail}>E-mail:</span>
                  <a
                    href='mailto:name@gmail.com'
                    className={'email' + ' ' + styles.paragraphFour}
                  >
                    Email Address
                  </a>
                </p>
                <p className={styles.paragraphFive}>
                  <span className={styles.website}>Website:</span>
                  <a href='#' className={styles.linkOne} target='_blank'>
                    itgsolution.net
                  </a>
                </p>
                <p className={styles.paragraphFive}>
                  <span className={styles.companyName}>Company:</span>
                  <span>ITGSolution</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <hr className={styles.dotLine} />
      </div>
    </article>
  )
}

export default ITGSignature
