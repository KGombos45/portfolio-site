import {makeStyles} from '@material-ui/core';
import Particles from 'react-particles-js';

const useStyles = makeStyles(() => ({
  particles: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    //background: rgb(4,43,51);
    background:
      'linear-gradient(222deg, rgba(4,43,51,1) 15%, rgba(227,27,109,0.8939950980392157) 100%)',
    willChange: 'transform',
    backfaceVisibility: 'hidden',
    perspective: '1000',
    transform: 'translate3d(0, 0, 0)',
  },
}));

export const ParticlesComp: React.FC = () => {
  const {particles} = useStyles();

  return (
    <Particles
      className={particles}
      params={{
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 25,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
      }}
    />
  );
};
