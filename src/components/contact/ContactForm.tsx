import {Box, Button, TextField} from '@mui/material';
import {SubHeader, ScrollAnimation} from '../../base-components';
import {useSendEmail} from '../../hooks/useSendEmail';
import {useContactStyles} from './useContactStyles';

export const ContactForm: React.FC = () => {
  const {classes} = useContactStyles();
  const {handleSendEmail} = useSendEmail();

  return (
    <Box display='flex' flexDirection='column' width='100%'>
      <ScrollAnimation animateOnce animateIn='slideInLeft' duration={1}>
        <SubHeader isSecondaryColor text='Want to work together or have a question? Reach out!' />
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn='slideInUp'>
        <Box alignItems='center' display='flex' flexDirection='column'>
          <form className={classes.form} onSubmit={e => handleSendEmail(e)}>
            <TextField
              required
              className={classes.inputField}
              id='name'
              inputProps={{className: classes.inputText}}
              name='name'
              placeholder='Name'
              variant='outlined'
            />
            <TextField
              required
              className={classes.inputField}
              id='email'
              slotProps={{htmlInput: {className: classes.inputText}}}
              name='email'
              placeholder='Email'
              variant='outlined'
            />
            <TextField
              multiline
              required
              className={classes.inputMultiField}
              id='subject'
              slotProps={{htmlInput: {className: classes.inputText}}}
              name='subject'
              placeholder='Enter your message here...'
              rows={8}
              variant='standard'
            />
            <Box display='flex' flexDirection='row' justifyContent='right' width='100%'>
              <Button className={classes.submitButton} type='submit'>
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </ScrollAnimation>
    </Box>
  );
};
