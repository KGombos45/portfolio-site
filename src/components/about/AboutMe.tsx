import {Box, Button, Typography} from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-scroll';
import {MailOutlineSharp, SelfieImage} from '../../assets';
import {Image, SectionTitles, SubHeader} from '../../base-components';
import {useAboutStyles, useAppStyles} from '../../hooks';

export const AboutMe: React.FC = () => {
  const {image, link} = useAboutStyles();
  const {sectionHalfContainer, buttonIcon, mainButton} = useAppStyles();

  return (
    <Box className={sectionHalfContainer} display='flex'>
      <ScrollAnimation animateOnce animateIn='slideInLeft' duration={1} initiallyVisible={false}>
        <Image alt='Profile Picture' className={image} src={SelfieImage} />
        <SubHeader isUnderlined text='About Me' />
        <Box>
          <Typography paragraph>
            Hello, my name is Kevin Gombos. I'm a full-stack web developer with 4+ years of
            experience working at
            <a className={link} href='https://www.uhone.com/'>
              United Healthcare
            </a>
            and
            <a className={link} href='https://www.optum.com/'>
              Optum Technology
            </a>
            . My primary passion is in front-end web development and UI/UX. Currently, I am an
            active contributor/admin and code reviewer on UHOne’s GitHub repository and was one of
            our top contributors in our effort to migrate our front-end infrastructure from
            AngularJS to Typescript/React. In addition I hold three degrees in philosophy, political
            science and my MS in Database Administration.
          </Typography>
        </Box>
        <Link smooth duration={1000} to={SectionTitles.Contact}>
          <Button className={mainButton}>
            Get in touch
            <MailOutlineSharp className={buttonIcon} />
          </Button>
        </Link>
      </ScrollAnimation>
    </Box>
  );
};
