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
         <Div className="cs-faq_nav cs-radius_15">
          <Div className="col-lg-2">
            <img className="img-fluid" 
             src={"/images/faq.png"} 
             alt="logo"/>
            </Div>
          </Div>
          <Div className="col-lg-7 offset-lg-1">
            <Spacing lg="0" md="40" />
            <Accordion />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}
