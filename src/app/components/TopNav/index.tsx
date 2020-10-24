/**
 *
 * TopNav
 *
 */
import {
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React, { memo } from 'react';
import { NavItems } from './NavItems';

interface Props {}

const useStyles = makeStyles(theme => ({
  title: (isMd: boolean) => ({
    flexGrow: isMd ? 0 : 1,
    display: 'inline-block',
    verticalAlign: 'middle',
  }),
}));

export const TopNav = memo((props: Props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles(isMd);

  const links = [
    { title: 'Product', to: '/product' },
    { title: 'Pricing', to: '/pricing' },
    { title: 'About', to: '/about' },
  ];

  const [open, setOpen] = React.useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          component="h1"
          variant="h6"
          data-testid="site-title"
          className={classes.title}
        >
          Bona
        </Typography>
        {isMd ? (
          <NavItems links={links} />
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <List>
                {links.map(({ title, to }, index) => (
                  <ListItem button key={`drawer-list-item-${index}`}>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
});
