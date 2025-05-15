import React from 'react';
import {useAppStyles} from '../../hooks';
import {Box, Typography} from '@mui/material';
import {ScrollAnimation} from '../scrollanimation';

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
  const {classes, cx} = useAppStyles();

  return (
    <section className={cx(classes.defaultSectionClass, sectionClassName)} id={sectionId}>
      <Box className={classes.sectionContainer}>
        <Box className={classes.sectionTitle}>
          <ScrollAnimation animateOnce animateIn={animateIn}>
            <Typography color={isWhiteSectionId ? undefined : 'primary'} variant='h1'>
              {sectionId}
            </Typography>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn={animateIn === 'slideInRight' ? 'slideInLeft' : 'slideInRight'}
            className={classes.sectionTitleUnderlineContainer}
          >
            <Box className={classes.sectionTitleUnderline} />
          </ScrollAnimation>
        </Box>
        <Box className={classes.sectionDetailsContainer}>{detailsBody}</Box>
        {additionalRenders}
      </Box>
    </section>
  );
};
