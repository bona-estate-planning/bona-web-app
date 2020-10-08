/**
 *
 * Header
 *
 */
import React, { memo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface Props {}

export const TopNav = memo((props: Props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="h1" variant="h6" data-testid="site-title">
          Bona
        </Typography>
      </Toolbar>
    </AppBar>
  );
});
