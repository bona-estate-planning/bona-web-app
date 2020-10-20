import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { RadioProps } from '@material-ui/core/Radio';
import React, { ReactNode, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface Props extends RadioProps {
  label?: ReactNode;
  sublabel?: ReactNode;
}

const useStyles = makeStyles(theme => ({
  root: (checked: boolean) => ({
    textAlign: 'center',
    width: 120,
    padding: `${theme.spacing(4)}px ${theme.spacing(0.5)}px`,
    display: 'inline-block',
    backgroundColor: checked
      ? theme.palette.common.white
      : theme.palette.grey[100],

    marginRight: theme.spacing(4),
    '&:last-child': {
      marginRight: 0,
    },
  }),
  label: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1),
  },
  sublabel: {
    fontSize: theme.spacing(1.5),
  },
}));

export const Tile = ({ checked, value, onChange, label, sublabel }: Props) => {
  const classes = useStyles(checked || false);

  const handleClick = useCallback(() => {
    if (onChange && value) {
      onChange({ target: { value: value as string } } as any, checked || false);
    }
  }, [checked, value, onChange]);

  return (
    <Paper onClick={handleClick} className={classes.root}>
      <Typography component="p" variant="subtitle1" className={classes.label}>
        {label}
      </Typography>
      <Typography
        component="p"
        variant="subtitle2"
        className={classes.sublabel}
      >
        {sublabel}
      </Typography>
    </Paper>
  );
};
