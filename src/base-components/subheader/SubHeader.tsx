import { Box, Typography } from "@mui/material";
import {makeStyles} from 'tss-react/mui'

type SubHeaderProps = {
  text: string;
  isUnderlined?: boolean;
  isSecondaryColor?: boolean;
};

export const useStyles = makeStyles()(theme => ({
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
  const {classes} = useStyles();
  return (
    <Box {...props} className={classes.subHeader}>
      <Typography
        color={isSecondaryColor ? 'secondary' : 'primary'}
        variant={isSecondaryColor ? 'h4' : 'h3'}
      >
        {text}
      </Typography>
      {isUnderlined && <Box className={classes.subHeaderUnderline} />}
    </Box>
  );
};
