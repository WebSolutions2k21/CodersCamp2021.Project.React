import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Input } from './InputText';

afterEach(() => {
  cleanup();
});

test('should render password input component', () => {
  render(<Input label="password" type="password" value="password" />);
  const inputComponent = screen.getByTestId('input-1');
  expect(inputComponent).toBeInTheDocument();
  expect(inputComponent).toHaveTextContent('password');
  expect(inputComponent).not.toBeNull();
  expect(inputComponent).not.toBeDisabled();
});

test('should render email input component', () => {
  render(<Input label="email" type="email" value="email" />);
  const inputComponent = screen.getByTestId('input-1');
  expect(inputComponent).toBeInTheDocument();
  expect(inputComponent).toHaveTextContent('email');
  expect(inputComponent).not.toBeNull();
  expect(inputComponent).not.toBeDisabled();
});

test('matches snapshot', () => {
  const tree = renderer.create(<Input label="first name" type="text" />).toJSON();
  expect(tree).toMatchSnapshot();
});
