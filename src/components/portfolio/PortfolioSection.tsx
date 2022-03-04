import React from 'react';
import './portfolio.scss';
import {Section, SectionTitles} from '../../base-components';
import {Card} from './card/Card';

export const PortfolioSection: React.FC = () => (
  <Section
    animateIn='slideInLeft'
    detailsBody={<Card />}
    sectionClassName=''
    sectionId={SectionTitles.Portfolio}
  />
);
