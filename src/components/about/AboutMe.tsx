import {Box, Button, Typography, makeStyles} from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-scroll';
import {MailOutlineSharp, SelfieImage} from '../../assets';
import {Image, SubHeader} from '../../base-components';
import {useAppStyles} from '../../hooks';

export const useStyles = makeStyles(theme => ({
  contactButton: {
    background: theme.palette.primary.contrastText,
    color: 'white',
    borderRadius: theme.spacing(5),
    width: theme.spacing(20.625),
    height: theme.spacing(5.75),
    fontSize: theme.spacing(2),
    border: `${theme.spacing(0.25)} white solid`,
    transition: 'all 0.5s',
    textTransform: 'none',
    '&:hover, :focus': {
      background: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  },
  buttonIcon: {
    marginLeft: theme.spacing(1),
  },
  image: {
    height: '250px',
    width: '250px',
    borderRadius: '50%',
  },
}));

export const AboutMe = () => {
  const {contactButton, buttonIcon, image} = useStyles();
  const {sectionHalfContainer} = useAppStyles();

  return (
    <Box className={sectionHalfContainer} display='flex'>
      <ScrollAnimation animateOnce animateIn='slideInLeft' duration={1} initiallyVisible={false}>
        <Image alt='Profile Picture' className={image} src={SelfieImage} />
        <SubHeader text='About Me' />
        <Box>
          <Typography paragraph>
            Hello, my name is Kevin Gombos. I'm a full-stack web developer with 2+ years of
            experience working at <a href='https://www.uhone.com/'>United Healthcare</a> and
            <a href='https://www.optum.com/'> Optum Technology</a>. My primary focus and passion is
            in front-end web development and UI/UX. I love to build apps that are not only visually
            stimulating but also highly user friendly. I also hold three degrees in philosophy,
            political science and my MS in Database Administration.
          </Typography>
        </Box>
        <Link smooth duration={1000} to='contact'>
          <Button className={contactButton} type='button'>
            Get in touch
            <MailOutlineSharp className={buttonIcon} />
          </Button>
        </Link>
      </ScrollAnimation>
    </Box>
  );
};
