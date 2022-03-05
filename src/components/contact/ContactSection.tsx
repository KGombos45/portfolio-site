import 'react-toastify/dist/ReactToastify.css';
import {makeStyles} from '@material-ui/core';
import {ToastContainer} from 'react-toastify';
import {Section, SectionTitles} from '../../base-components';
import {ContactForm} from './ContactForm';

const useStyles = makeStyles(theme => ({
  contactSectionContainer: {
    background: theme.palette.primary.main,
    height: '750px',
  },
}));

export const ContactSection: React.FC = () => {
  const {contactSectionContainer} = useStyles();
  return (
    <Section
      isWhiteSectionId
      additionalRenders={<ToastContainer />}
      animateIn='slideInLeft'
      detailsBody={<ContactForm />}
      sectionClassName={contactSectionContainer}
      sectionId={SectionTitles.Contact}
    />
  );
};
