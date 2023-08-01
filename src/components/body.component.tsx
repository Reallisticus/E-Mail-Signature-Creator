import { SetStateAction, useState } from 'react';
import styles from './body.module.css';
import ITGSignature from './signatures/itgmarket/itgmarket.component';
import LCSignature from './signatures/lifecoin/lifecoin.component';
import QTMSignature from './signatures/quantum/quantum.component';
import BTradeSignature from './signatures/btrade/btrade.component';

const Body: React.FC = () => {
  const [company, setCompany] = useState('quantummarket');

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCompany(event?.target?.value);
  };

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <h3 className='title'>Your information:</h3>
            <form id='form'>
              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label' htmlFor='name'>
                    Name:
                  </label>
                </div>
                <div className='field-body'>
                  <div className='field has-addons has-addons-centered'>
                    <p className='control is-expanded'>
                      <input
                        id='name'
                        className='input'
                        placeholder='First & Last Name'
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label' htmlFor='position'>
                    Position:
                  </label>
                </div>
                <div className='field-body'>
                  <div className='field has-addons has-addons-centered'>
                    <p className='control is-expanded'>
                      <input
                        id='position'
                        className='input'
                        placeholder='This is what I do'
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className='field is-horizontal'>
                <div className='field-label is-normal'>
                  <label className='label' htmlFor='email'>
                    Email:
                  </label>
                </div>
                <div className='field-body'>
                  <div className='field has-addons has-addons-centered'>
                    <p className='control is-expanded'>
                      <input
                        id='email'
                        className='input'
                        placeholder='name@gmail.com'
                      />
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='column'>
            <h3 className='title'>
              Preview:&nbsp;
              <span className='control' id='company'>
                <label className='radio'>
                  <input
                    type='radio'
                    name='company'
                    value='quantummarket'
                    checked={company === 'quantummarket'}
                    onChange={handleChange}
                  />
                  &nbsp;Quantum Market
                </label>
                <label className='radio'>
                  <input
                    type='radio'
                    name='company'
                    value='lifecoin'
                    checked={company === 'lifecoin'}
                    onChange={handleChange}
                  />
                  &nbsp;LifeCoinFEX
                </label>
                <label className='radio'>
                  <input
                    type='radio'
                    name='company'
                    value='itgmarket'
                    checked={company === 'itgmarket'}
                    onChange={handleChange}
                  />
                  &nbsp;ITGMarket
                </label>
                <label className='radio'>
                  <input
                    type='radio'
                    name='company'
                    value='btrade'
                    checked={company === 'btrade'}
                    onChange={handleChange}
                  />
                  &nbsp;BTrade
                </label>
              </span>
            </h3>
            {company === 'quantummarket' ? (
              <QTMSignature />
            ) : company === 'lifecoin' ? (
              <LCSignature />
            ) : company === 'itgmarket' ? (
              <ITGSignature />
            ) : company === 'btrade' ? (
              <BTradeSignature />
            ) : null}
            {/* <h3 className='title'>Signatures:</h3>
            <div className='controls'>
              <button
                className='button is-primary'
                data-select
                data-signature='signature'
              >
                Select Signature (for Gmail)
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Body;
