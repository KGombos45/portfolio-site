import './../portfolio.scss';
import 'animate.css/animate.compat.css';
import {Button, Grid} from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import {ArrowForwardSharp} from '../../../assets';
import {useAppData} from '../../../hooks';
import {useModal} from '../../../hooks/useModal';

export const Card: React.FC = () => {
  const {handleOpenModal, modal} = useModal();
  const {cardData} = useAppData();

  return (
    <Grid container className='card-container flex row'>
      {cardData.map((item, index) => (
        <Grid key={item.cardTitle} item className='card-item-container' xs={6}>
          <ScrollAnimation
            animateOnce
            animateIn={index % 2 ? 'slideInRight' : 'slideInLeft'}
            duration={1}
            initiallyVisible={false}
          >
            <div className='card-item'>
              <div className='card-front'>
                <img alt={item.cardTitle} className='card-img' src={item.svg} />
              </div>
              <div className='card-back'>
                <div className='card-header-text'>
                  {item.cardTitle}
                  <p>{item.cardSubtitle}</p>
                </div>
                <div className='card-body-text'>{item.cardBody}</div>
                <Button className='view-btn' type='button' onClick={() => handleOpenModal(item)}>
                  View More
                  <ArrowForwardSharp />
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </Grid>
      ))}
      {modal}
    </Grid>
  );
};
