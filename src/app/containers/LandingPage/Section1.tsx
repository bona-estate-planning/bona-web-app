/**
 *
 * Section1
 *
 */
import { useMediaQuery, useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Image1 from './image1.svg';
import Image2 from './image2.svg';

interface Props {}

const useStyles = makeStyles(theme => {
  return {
    section: (isMd: boolean) => ({
      paddingTop: theme.spacing(isMd ? 10 : 3.5),
      textAlign: 'center',
    }),
    headline: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.spacing(5),
      marginBottom: theme.spacing(3),
    },
    subtitle: {
      marginBottom: theme.spacing(3),
    },
    button: {
      borderRadius: 99999,
      padding: theme.spacing(1, 10),
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightBold,
    },
    imageBox: (isMd: boolean) => ({
      marginTop: theme.spacing(isMd ? -4 : -2),
      height: isMd ? '30vw' : '35vw',
      minHeight: 20,
      backgroundImage: `url(${Image1}), url(${Image2})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom left, bottom right',
      backgroundSize: 'contain',
    }),
  };
});

export const Section1 = memo((props: Props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles(isMd);

  return (
    <Box pt={isMd ? 10 : 3.5} className={classes.section}>
      <Container>
        <Typography component="h2" className={classes.headline}>
          Estately
        </Typography>
        <Typography component="p" variant="h5" className={classes.subtitle}>
          Simple estate planning for everyone.
        </Typography>
        <Button
          component={Link}
          to="/wizard"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Start a plan
        </Button>
      </Container>
      <Box className={classes.imageBox} />
    </Box>
  );
});
