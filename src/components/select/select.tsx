import { FC } from 'react';
import { uniqueId } from 'lodash/fp';
import {
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
  SelectProps as MuiSelectProps,
  InputLabel,
  FormControl
} from '@mui/material';
import { useField } from 'formik';
import { HelperError } from '@components';
export interface Item {
  label: string;
  value: string;
}
type SelectProps = MuiSelectProps & {
  items: Item[];
  label?: string;
  name: string;
};

export const Select: FC<SelectProps> = ({
  autoWidth,
  size = 'medium',
  label = '',
  items,
  value,
  children,
  name,
  ...r
}) => {
  const labelId = uniqueId(label);
  const [field, { error }] = useField(name);
  if (children) {
    return <MuiSelect>{children}</MuiSelect>;
  }
  return (
    <FormControl fullWidth size={size}>
      {label && <InputLabel id={labelId}>{label}</InputLabel>}{' '}
      <MuiSelect
        size={size}
        {...{ ...r, label, labelId, variant: 'outlined', autoWidth: autoWidth || false, value }}
      >
        {children ||
          items.map(({ label: itemLabel, value: itemValue }) => (
            <MuiMenuItem key={itemValue} value={itemValue}>
              {itemLabel}
            </MuiMenuItem>
          ))}
      </MuiSelect>
      {!!error && <HelperError field={field.name} />}
    </FormControl>
  );
};
