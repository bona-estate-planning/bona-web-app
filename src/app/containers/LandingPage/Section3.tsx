/**
 *
 * Section3
 *
 */
import { useMediaQuery, useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';

interface Props {}

const useStyles = makeStyles(theme => {
  return {
    section: (isMd: boolean) => ({
      padding: theme.spacing(7, 0, isMd ? 13 : 3.5),
      textAlign: 'center',
    }),
    headline: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.spacing(3.5),
      marginBottom: theme.spacing(3),
    },
    subtitle: {
      fontSize: theme.spacing(2.25),
      marginBottom: theme.spacing(0.5),
    },
    plans: {
      margin: theme.spacing(0),
    },
    plan: {
      display: 'inline-block',
      width: 278,
      margin: theme.spacing(3.5),
      padding: theme.spacing(4.5, 1.5),
      backgroundColor: theme.palette.grey[100],
    },
    planTitle: {
      fontSize: theme.spacing(2.2),
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2),
    },
    planSubtitle: {
      marginBottom: theme.spacing(3),
    },
    planPrice: {
      fontSize: theme.spacing(5),
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2),
    },
    planButton: {
      borderRadius: 99999,
      padding: theme.spacing(1, 6),
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightBold,
    },
  };
});

export const Section3 = memo((props: Props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles(isMd);

  const plans = [
    {
      title: 'Guardianship',
      subtitle: 'Ensure your family is cared for with all life throws at you',
      price: 50,
      to: '/',
    },
    {
      title: 'Advanced Directive',
      subtitle: 'Sort out complex medical treatment details',
      price: 50,
      to: '/',
    },
    {
      title: 'HIPAA Authorization',
      subtitle: 'Decide the access to your medical information',
      price: 50,
      to: '/',
    },
    {
      title: 'Trust & Will',
      subtitle: 'Protect and transfer your most important assets',
      price: 50,
      to: '/',
    },
  ];

  return (
    <Box className={classes.section}>
      <Container>
        <Typography component="h3" className={classes.headline}>
          We got you covered
        </Typography>
        <Typography component="p" className={classes.subtitle}>
          Whatever your trust concerns are we have you covered. Let us navigate
          the complex waters of estate planning for you.
        </Typography>
      </Container>
      <Box className={classes.plans}>
        {plans.map(({ title, subtitle, price, to }, i) => (
          <Paper key={`plan-${i}`} className={classes.plan} elevation={3}>
            <Typography component="p" className={classes.planTitle}>
              {title}
            </Typography>
            <Typography
              component="p"
              variant="subtitle1"
              className={classes.planSubtitle}
            >
              {subtitle}
            </Typography>
            <Typography component="p" className={classes.planPrice}>
              ${price}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.planButton}
            >
              Learn More
            </Button>
          </Paper>
        ))}
      </Box>
    </Box>
  );
});
