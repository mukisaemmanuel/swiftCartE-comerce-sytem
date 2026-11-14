import React from 'react';
import Mobile from './Mobile';

export interface EditCategoryCommissionModalWithDatePickerProps {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const EditCategoryCommissionModalWithDatePicker: React.FC<EditCategoryCommissionModalWithDatePickerProps> = (props) => {
  return <Mobile {...props} />;
};

export default EditCategoryCommissionModalWithDatePicker;
