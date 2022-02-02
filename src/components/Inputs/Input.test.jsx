import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Input } from './Input';

it('check if form displays', () => {
  const { getByTestId } = render(<Input />);
  const nameInput = getByTestId('nameInput');

  // expect(nameInput).not.toHaveValue();
  expect(nameInput).toBeInTheDocument();
});