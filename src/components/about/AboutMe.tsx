import {Link} from 'react-scroll';
import {MailOutlineSharp, SelfieImage} from '../../assets';
import {Image, ScrollAnimation, SectionTitles, SubHeader} from '../../base-components';
import {useAboutStyles, useAppStyles} from '../../hooks';
import {Box, Button, Typography} from '@mui/material';

const calcWorkYears = (): number => {
  const now = new Date();
  const startYear = 2019;

  return now.getFullYear() - startYear;
};

export const AboutMe: React.FC = () => {
  const {classes} = useAboutStyles();
  const {classes: appClasses} = useAppStyles();

  return (
    <Box className={appClasses.sectionHalfContainer} display='flex'>
      <ScrollAnimation animateOnce animateIn='slideInLeft' className={classes.container}>
        <Image alt='Profile Picture' className={classes.image} src={SelfieImage} />
        <SubHeader isUnderlined text='About Me' />
        <Typography>
          Hello, my name is Kevin Gombos. I'm a full-stack web developer with {calcWorkYears()}+
          years of experience working at
          <a className={classes.link} href='https://www.uhone.com/'>
            United Healthcare
          </a>
          and
          <a className={classes.link} href='https://www.optum.com/'>
            Optum Technology
          </a>
          . My primary passion is in front-end web development and UI/UX. Currently, I am an active
          contributor/admin and code reviewer on UHOne’s GitHub repository and was one of our top
          contributors in our effort to migrate our front-end infrastructure from AngularJS to
          Typescript/React. In addition I hold three degrees in philosophy, political science and my
          MS in Database Administration.
        </Typography>
        <Link smooth duration={1000} to={SectionTitles.Contact}>
          <Button className={appClasses.mainButton}>
            Get in touch
            <MailOutlineSharp className={appClasses.buttonIcon} />
          </Button>
        </Link>
      </ScrollAnimation>
    </Box>
  );
};
