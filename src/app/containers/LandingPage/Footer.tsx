/**
 *
 * Footer
 *
 */
import { Typography, useMediaQuery, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { memo } from 'react';

interface Props {}

const useStyles = makeStyles(theme => {
  return {
    footer: (isMd: boolean) => ({
      background: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      padding: theme.spacing(isMd ? 8 : 3),
    }),
    sectionHeading: {
      fontWeight: theme.typography.fontWeightBold,
    },
    info: {
      '& > *': {
        fontWeight: theme.typography.fontWeightMedium,
        marginBottom: theme.spacing(1),
      },
    },
    contact: (isMd: boolean) => ({
      textAlign: isMd ? 'right' : 'left',
      '& > *': {
        marginBottom: theme.spacing(1),
      },
    }),
  };
});

export const Footer = memo((props: Props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles(isMd);

  return (
    <Grid container component="footer" className={classes.footer}>
      <Grid item xs={12} md className={classes.info}>
        <Typography variant="body1" className={classes.sectionHeading}>
          Estately
        </Typography>
        <Typography component="p" variant="caption">
          Estately is acting as the agent of Estately Company in selling esate
          documentation.
        </Typography>
        <Typography component="p" variant="caption">
          Further information is available upon request.
        </Typography>
      </Grid>
      <Grid item xs={12} md="auto" className={classes.contact}>
        <Typography
          component="p"
          variant="caption"
          className={classes.sectionHeading}
        >
          Contact Us
        </Typography>
        <Typography component="p" variant="caption">
          contact@estately.com
        </Typography>
        <Typography component="p" variant="caption">
          (206) 555-5555
        </Typography>
        <Typography component="p" variant="caption">
          1455 Market St # 400
        </Typography>
      </Grid>
    </Grid>
  );
});
