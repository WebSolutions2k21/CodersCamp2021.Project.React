import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { CustomButton } from './CustomButton';


afterEach(() => {
  cleanup();
});

test('1. should render CustomButton component with onClick function', () => {
  render(<CustomButton text="Add Pet" color="primary" size="small" clickAction={()=> console.log('CustomButton')}/>);
  const inputComponent = screen.getByRole('button', {name: /Add Pet/i})
  expect(inputComponent).toBeInTheDocument();
  expect(inputComponent).not.toBeNull();
  expect(inputComponent).not.toBeDisabled();
  expect(inputComponent).toHaveTextContent('Add Pet');
});

test('2. should render CustomButton component without onClick function', () => {
  render(<CustomButton text="Add Pet" color="primary" size="small"/>);
  const inputComponent = screen.getByRole('button', {name: /Add Pet/i})
  expect(inputComponent).toBeInTheDocument();
  expect(inputComponent).not.toBeNull();
  expect(inputComponent).not.toBeDisabled();
  expect(inputComponent).toHaveTextContent('Add Pet');
});

test('3. should render disabled CustomButton', () => {
    render(<CustomButton text="Add Pet" color="primary" size="small" disabled/>);
    const inputComponent = screen.getByRole('button', {name: /Add Pet/i})
    expect(inputComponent).toBeDisabled();
});

test('4. should render disabled CustomButton', () => {
    render(<CustomButton text="Add Pet" color="primary" size="small" disabled/>);
    const inputComponent = screen.getByRole('button', {name: /Add Pet/i})
    expect(inputComponent).toBeDisabled();
});

test('matches snapshot', () => {
  const tree = renderer.create(<CustomButton />).toJSON();
  expect(tree).toMatchSnapshot();
});