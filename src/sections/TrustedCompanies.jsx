import React from 'react';
import logo01 from '../assets/images/partners/logo-01.svg';
import logo02 from '../assets/images/partners/logo-02.svg';
import logo03 from '../assets/images/partners/logo-03.svg';
import logo04 from '../assets/images/partners/logo-04.svg';
import logo05 from '../assets/images/partners/logo-05.svg';
import logo06 from '../assets/images/partners/logo-06.svg';
import '../styles/TrustedCompanies.css';

export default function TrustedCompanies() {
  const partners = [
    { logo: logo01, name: 'AWS' },
    { logo: logo02, name: 'Google Cloud' },
    { logo: logo03, name: 'Microsoft Azure' },
    { logo: logo04, name: 'Salesforce' },
    { logo: logo05, name: 'Dropbox' },
    { logo: logo06, name: 'Docker' }
  ];

  return (
    <section className="trusted-section">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-6 text-center">
            <span className="trusted-subtitle">Trusted by 12,000+ founders & business owners</span>
          </div>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {partners.concat(partners).map((partner, index) => (
              <div key={index} className="partner-logo-box">
                <div className="partner-icon">
                  <img src={partner.logo} alt={partner.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
