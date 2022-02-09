import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { InputSelect } from './InputSelect';

afterEach(() => {
  cleanup();
});

test('should render InputSelect component', () => {
  render(<InputSelect label="type" myNames={["dog", "cat"]}/>);
  const inputComponent = screen.getByTestId('input-2');
  expect(inputComponent).toBeInTheDocument();
  expect(inputComponent).not.toBeNull();
  expect(inputComponent).not.toBeDisabled();
});


test('matches snapshot', () => {
  const tree = renderer.create(<InputSelect label="type" myNames={["dog", "cat"]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});