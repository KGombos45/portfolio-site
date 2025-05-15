import {ArrowForwardSharp} from '../../assets';
import {Image, ScrollAnimation} from '../../base-components';
import {useAppData, useAppStyles, useModal, usePortfolioCardStyles} from '../../hooks';
import {Grid, Card, Box, Typography, Button} from '@mui/material';

export const PortfolioCard: React.FC = () => {
  const {classes, cx} = usePortfolioCardStyles();
  const {classes: appClasses} = useAppStyles();
  const {handleOpenModal, modal} = useModal();
  const {cardData} = useAppData();

  return (
    <Grid container justifyContent='center'>
      {cardData.map((item, index) => (
        <Grid key={item.cardTitle} size={{xs: 11, sm: 10, md: 8, lg: 5}}>
          <ScrollAnimation animateOnce animateIn={index % 2 ? 'slideInRight' : 'slideInLeft'}>
            <Card className={classes.card}>
              <Box className={classes.cardFront}>
                <Image alt={item.cardTitle} className={classes.logo} src={item.svg} />
              </Box>
              <Box className={classes.cardBack}>
                <Box textAlign='center' width='100%'>
                  <Typography variant='h4'>{item.cardTitle}</Typography>
                  <Typography className={cx(classes.paragraph, classes.subTitle)}>
                    {item.cardSubtitle}
                  </Typography>
                </Box>
                <Typography className={classes.paragraph}>{item.cardBody}</Typography>
                <Button
                  className={appClasses.mainButton}
                  type='button'
                  onClick={() => handleOpenModal(item)}
                >
                  View More
                  <ArrowForwardSharp />
                </Button>
              </Box>
            </Card>
          </ScrollAnimation>
        </Grid>
      ))}
      {modal}
    </Grid>
  );
};
