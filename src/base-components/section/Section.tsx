import {Box, Typography} from '@material-ui/core';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {useAppStyles} from '../../hooks';

type SectionProps = {
  sectionId: SectionTitles;
  isWhiteSectionId?: boolean;
  sectionClassName?: string;
  animateIn: 'slideInLeft' | 'slideInRight';
  detailsBody: React.ReactNode;
  additionalRenders?: React.ReactNode;
};

export enum SectionTitles {
  Home = 'Home',
  About = 'About',
  Portfolio = 'Portfolio',
  Resume = 'Resume',
  Contact = 'Contact',
}

export const Section: React.FC<SectionProps> = ({
  sectionId,
  isWhiteSectionId,
  sectionClassName,
  animateIn,
  detailsBody,
  additionalRenders,
}) => {
  const {
    sectionContainer,
    sectionDetailsContainer,
    sectionTitle,
    sectionTitleUnderlineContainer,
    sectionTitleUnderline,
    defaultHeightClass,
  } = useAppStyles();

  return (
    <section
      className={sectionClassName !== undefined ? sectionClassName : defaultHeightClass}
      id={sectionId}
    >
      <Box className={sectionContainer}>
        <Box className={sectionTitle}>
          <ScrollAnimation animateOnce animateIn={animateIn} duration={1} initiallyVisible={false}>
            <Typography color={isWhiteSectionId ? undefined : 'primary'} variant='h1'>
              {sectionId}
            </Typography>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn={animateIn === 'slideInRight' ? 'slideInLeft' : 'slideInRight'}
            className={sectionTitleUnderlineContainer}
            duration={1}
            initiallyVisible={false}
          >
            <Box className={sectionTitleUnderline} />
          </ScrollAnimation>
        </Box>
        <Box className={sectionDetailsContainer}>{detailsBody}</Box>
        {additionalRenders}
      </Box>
    </section>
  );
};
