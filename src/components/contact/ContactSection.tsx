import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import {Section, SectionTitles} from '../../base-components';
import {ContactForm} from './ContactForm';
import {useContactStyles} from './useContactStyles';

export const ContactSection: React.FC = () => {
  const {contactSectionContainer} = useContactStyles();
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
