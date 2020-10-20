import {
  FormControl,
  FormLabel,
  makeStyles,
  RadioGroup,
} from '@material-ui/core';
import {
  RadioData,
  RadiosProps,
  ErrorMessage,
  showErrorOnChange,
  useFieldForErrors,
} from 'mui-rff';
import React, { ReactNode } from 'react';
import { Field } from 'react-final-form';
import { Tile } from './Tile';

interface TileData extends RadioData {
  sublabel: ReactNode;
}

interface TilesProps extends Omit<RadiosProps, 'data'> {
  data: TileData[];
}

const useStyles = makeStyles(theme => ({
  formControl: {
    display: 'flex',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const Tiles = (props: TilesProps) => {
  const {
    name,
    data,
    label,
    required,
    helperText,
    formLabelProps,
    formControlLabelProps,
    fieldProps,
    formControlProps,
    radioGroupProps,
    formHelperTextProps,
    showError = showErrorOnChange,
    ...restRadios
  } = props;

  const field = useFieldForErrors(name);
  const isError = showError(field);
  const classes = useStyles();

  return (
    <FormControl
      required={required}
      error={isError}
      classes={{ root: classes.formControl }}
      {...formControlProps}
    >
      {!!label && <FormLabel {...formLabelProps}>{label}</FormLabel>}
      <RadioGroup classes={{ root: classes.radioGroup }} {...radioGroupProps}>
        {data.map((item: TileData, idx: number) => (
          <Field
            key={idx}
            name={name}
            type="radio"
            value={item.value}
            render={({
              input: { name, value, onChange, checked, ...restInput },
            }) => (
              <Tile
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
                disabled={item.disabled}
                required={required}
                inputProps={{ required, ...restInput }}
                label={item.label}
                sublabel={item.sublabel}
                {...restRadios}
              />
            )}
            {...fieldProps}
          />
        ))}
      </RadioGroup>
      <ErrorMessage
        showError={isError}
        meta={field.meta}
        formHelperTextProps={formHelperTextProps}
        helperText={helperText}
      />
    </FormControl>
  );
};
