import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Accordion from '../Accordion';
import Button from '../Button';
import Cta from '../Cta';
import Div from '../Div';
import PageHeading from '../PageHeading';
import Spacing from '../Spacing';

export default function FaqPage() {
  pageTitle('Frequently Asked Questions');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-4">
                  <Card
                    title=""
                    link=""
                    src="/images/faq.png"
                    alt="FAQ"
                  />   
          <Div className="col-lg-7 offset-lg-1">
            <Spacing lg="0" md="40" />
            <Accordion />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
