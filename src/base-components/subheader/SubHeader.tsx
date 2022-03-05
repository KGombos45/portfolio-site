import {Box, type BoxProps, Typography, makeStyles} from '@material-ui/core';

type SubHeaderProps = {
  text: string;
  isUnderlined?: boolean;
  isSecondaryColor?: boolean;
} & BoxProps;

export const useStyles = makeStyles(theme => ({
  subHeader: {
    margin: theme.spacing(2.5, 0, 2.5, 0),
    textAlign: 'center',
  },
  subHeaderUnderline: {
    height: theme.spacing(0.375),
    width: theme.spacing(6.875),
    background: theme.palette.primary.dark,
    borderRadius: theme.spacing(1.25),
    justifyContent: 'center',
    margin: '0 auto',
    marginTop: theme.spacing(0.625),
  },
}));

export const SubHeader: React.FC<SubHeaderProps> = ({
  text,
  isSecondaryColor,
  isUnderlined,
  ...props
}) => {
  const {subHeader, subHeaderUnderline} = useStyles();
  return (
    <Box {...props} className={subHeader}>
      <Typography color={isSecondaryColor ? 'secondary' : 'primary'} variant='h3'>
        {text}
      </Typography>
      {isUnderlined && <Box className={subHeaderUnderline} />}
    </Box>
  );
};
