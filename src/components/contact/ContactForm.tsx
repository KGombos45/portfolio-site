import {Box, Button, TextField, makeStyles} from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import {SubHeader} from '../../base-components';
import {useSendEmail} from '../../hooks/useSendEmail';

export const useStyles = makeStyles(theme => ({
  form: {
    maxWidth: '450px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(8),
  },
  inputField: {
    width: '100%',
    background: '#002229',
    margin: theme.spacing(0.5, 0),
  },
  inputMultiField: {
    width: '100%',
    background: '#002229',
    margin: theme.spacing(0.5, 0),
  },
  inputText: {
    color: 'white',
    padding: theme.spacing(2.15, 1.75),
  },
  submitButton: {
    background: 'transparent',
    color: '#b1b1b1',
    border: '2px solid #b1b1b1',
    borderRadius: theme.spacing(5),
    height: theme.spacing(4.5),
    fontSize: theme.spacing(2),
    padding: theme.spacing(1.5),
    transition: 'all 0.5s',
    textTransform: 'none',
    marginTop: theme.spacing(1.5),
    '&:hover, :focus': {
      color: 'white',
      background: theme.palette.primary.contrastText,
      borderColor: 'white',
    },
  },
}));

export const ContactForm: React.FC = () => {
  const {form, inputField, inputMultiField, inputText, submitButton} = useStyles();
  const {handleSendEmail} = useSendEmail();

  return (
    <Box display='flex' flexDirection='column' width='100%'>
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
