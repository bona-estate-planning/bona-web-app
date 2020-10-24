/**
 *
 * Section2
 *
 */
import { useMediaQuery, useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';
import { ReactComponent as PlaceholderImage } from './placeholder.svg';

interface Props {}

const useStyles = makeStyles(theme => {
  return {
    section: (isMd: boolean) => ({
      backgroundColor: theme.palette.grey[50],
      padding: theme.spacing(isMd ? 10 : 3.5, 0),
      textAlign: 'center',
    }),
    headline: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.spacing(3.5),
      marginBottom: theme.spacing(3),
    },
    subtitle: {
      fontSize: theme.spacing(2.25),
      marginBottom: theme.spacing(3),
    },
    placeholderImages: {
      margin: theme.spacing(0, -3.5),
    },
    placeholderImage: {
      display: 'inline-block',
      margin: theme.spacing(0, 3.5),
    },
  };
});

export const Section2 = memo((props: Props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles(isMd);

  const placeholderImageCount = 4;
  const placeholderImages = [...Array(placeholderImageCount)].map((_, i) => (
    <PlaceholderImage
      key={`placeholder-image-${i}`}
      className={classes.placeholderImage}
    />
  ));

  return (
    <Box className={classes.section}>
      <Container>
        <Typography component="h3" className={classes.headline}>
          How it works
        </Typography>
        <Typography component="p" className={classes.subtitle}>
          Description of what the value prop is. The description should fit in
          here somewhere. Make it sound really nice.
        </Typography>
        <Box
          display={{ xs: 'none', md: 'block' }}
          className={classes.placeholderImages}
        >
          {placeholderImages}
        </Box>
      </Container>
    </Box>
  );
});
