/**
 *
 * NavItems
 *
 */
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface Props {
  links: {
    title: string;
    to: LinkProps['to'];
  }[];
}

const useStyles = makeStyles(theme => ({
  nav: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: theme.spacing(4),
  },
  navItem: {
    color: theme.palette.primary.contrastText,
    textTransform: 'none',
  },
}));

export const NavItems = memo(({ links }: Props) => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      {links.map((link, i) => (
        <Button
          key={`nav-item-${i}`}
          component={Link}
          to={link.to}
          className={classes.navItem}
        >
          {link.title}
        </Button>
      ))}
    </nav>
  );
});
