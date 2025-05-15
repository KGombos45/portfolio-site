import {Image, ScrollAnimation, SubHeader} from '../../base-components';
import {useAppData, useAppStyles} from '../../hooks';
import {makeStyles} from 'tss-react/mui';
import {Box, Typography} from '@mui/material';

export const useStyles = makeStyles()(theme => ({
  imageContainer: {
    margin: theme.spacing(1.25),
    display: 'block',
    fontSize: 14,
    width: theme.spacing(12.375),
    borderRadius: theme.spacing(1),
    transition: 'all 0.6s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '5px 28px 15px -8px rgba(0,0,0,0.34)',
    },
  },
  image: {
    height: theme.spacing(7),
    display: 'block',
    margin: '0 auto',
    paddingBottom: theme.spacing(0.625),
  },
}));

export const Skills: React.FC = () => {
  const {skillsData} = useAppData();
  const {classes} = useStyles();
  const {classes: appClasses} = useAppStyles();

  return (
    <Box className={appClasses.sectionHalfContainer} display='flex'>
      <ScrollAnimation animateOnce animateIn='slideInRight'>
        <SubHeader isUnderlined text='Skills' />
        <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
          {skillsData.map(item => (
            <Box key={item.alt} className={classes.imageContainer}>
              <Image alt={item.alt} className={classes.image} src={item.src} />
              {item.text}
            </Box>
          ))}
          <Box paddingTop={2}>
            <Typography>
              And much more, with experience in back-end development with Microsoft Visual Studio.
              This includes C#/.Net, Java, C, C++.
            </Typography>
          </Box>
        </Box>
      </ScrollAnimation>
    </Box>
  );
};
