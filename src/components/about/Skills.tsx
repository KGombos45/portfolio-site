import {Box, Typography, makeStyles} from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import {Image, SubHeader} from '../../base-components';
import {useAppData, useAppStyles} from '../../hooks';

export const useStyles = makeStyles(theme => ({
  imageContainer: {
    margin: theme.spacing(1.25),
    display: 'block',
    width: theme.spacing(12.375),
    borderRadius: theme.spacing(1),
    transition: 'all 0.6s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '5px 28px 15px -8px rgba(0,0,0,0.34)',
    },
  },
  image: {
    height: theme.spacing(8.125),
    display: 'block',
    margin: '0 auto',
    paddingBottom: theme.spacing(0.625),
  },
}));

export const Skills: React.FC = () => {
  const {skillsData} = useAppData();
  const {image, imageContainer} = useStyles();
  const {sectionHalfContainer} = useAppStyles();

  return (
    <Box className={sectionHalfContainer} display='flex'>
      <ScrollAnimation animateOnce animateIn='slideInRight' duration={1} initiallyVisible={false}>
        <SubHeader text='Skills' />
        <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
          {skillsData.map(item => (
            <Box key={item.alt} className={imageContainer}>
              <Image alt={item.alt} className={image} src={item.src} />
              {item.text}
            </Box>
          ))}
          <Box paddingTop={2}>
            <Typography paragraph>
              And much more, with experience in back-end development with Microsoft Visual Studio.
              This includes C#/.Net, Java, C, C++.
            </Typography>
          </Box>
        </Box>
      </ScrollAnimation>
    </Box>
  );
};
