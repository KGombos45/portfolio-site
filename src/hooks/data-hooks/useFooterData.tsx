import {GitHub, Instagram, LinkedIn} from '../../assets';

export const useFooterData = () => {
  const data = [
    {
      src: 'https://www.linkedin.com/in/kgombos/',
      alt: 'Linkedin',
      logo: LinkedIn,
    },
    {
      src: 'https://github.com/KGombos45',
      alt: 'GitHub',
      logo: GitHub,
    },
    {
      src: 'https://www.instagram.com/itskevingee_fit/',
      alt: 'Instagram',
      logo: Instagram,
    },
  ];

  return data;
};
