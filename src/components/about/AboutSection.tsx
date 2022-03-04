import React from 'react';
import {Section, SectionTitles} from '../../base-components';
import {AboutMe} from './AboutMe';
import {Skills} from './Skills';

export const AboutSection: React.FC = () => (
  <Section
    animateIn='slideInRight'
    detailsBody={
      <>
        <AboutMe />
        <Skills />
      </>
    }
    sectionClassName=''
    sectionId={SectionTitles.About}
  />
);
