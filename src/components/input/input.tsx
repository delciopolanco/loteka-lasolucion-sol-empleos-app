import { FC } from 'react';
import { TextField, TextFieldProps, InputAdornment } from '@mui/material';
import { useField } from 'formik';
import { useCharCount } from '@shared';
import { HelperError } from '@components';

type InputProps = TextFieldProps & {
  name: string;
  showCharCount?: boolean;
};

export const Input: FC<InputProps> = ({
  name,
  variant = 'outlined',
  showCharCount,
  onChange,
  onBlur,
  ...others
}) => {
  const charCounts = useCharCount(name);
  const [field, { error, value }] = useField(name);
  return (
    <>
      <TextField
        {...others}
        {...field}
        name={name}
        variant={variant}
        onChange={onChange || field.onChange}
        onBlur={onBlur || field.onBlur}
        InputProps={{
          endAdornment: showCharCount ? (
            <InputAdornment position={'end'}>{`${
              value.length || 0
            } /${charCounts}`}</InputAdornment>
          ) : null
        }}
      />
      {!!error && <HelperError field={name} withTouched />}
    </>
  );
};
