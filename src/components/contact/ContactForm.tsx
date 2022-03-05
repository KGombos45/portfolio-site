import {Box, Button, TextField} from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import {SubHeader} from '../../base-components';
import {useSendEmail} from '../../hooks/useSendEmail';
import {useContactStyles} from './useContactStyles';

export const ContactForm: React.FC = () => {
  const {form, inputField, inputMultiField, inputText, submitButton} = useContactStyles();
  const {handleSendEmail} = useSendEmail();

  return (
    <Box display='flex' flexDirection='column' paddingX={3.125} width='100%'>
      <ScrollAnimation animateOnce animateIn='slideInLeft' duration={1} initiallyVisible={false}>
        <SubHeader isSecondaryColor text='Want to work together or have a question? Reach out!' />
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn='slideInUp' duration={1} initiallyVisible={false}>
        <Box alignItems='center' display='flex' flexDirection='column'>
          <form className={form} onSubmit={e => handleSendEmail(e)}>
            <TextField
              required
              className={inputField}
              id='name'
              inputProps={{className: inputText}}
              name='name'
              placeholder='Name'
              variant='outlined'
            />
            <TextField
              required
              className={inputField}
              id='email'
              inputProps={{className: inputText}}
              name='email'
              placeholder='Email'
              variant='outlined'
            />
            <TextField
              multiline
              required
              className={inputMultiField}
              id='subject'
              inputProps={{className: inputText}}
              name='subject'
              placeholder='Enter your message here...'
              rows={8}
              variant='standard'
            />
            <Box display='flex' flexDirection='row' justifyContent='right' width='100%'>
              <Button className={submitButton} type='submit'>
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </ScrollAnimation>
    </Box>
  );
};
