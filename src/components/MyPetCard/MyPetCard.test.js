import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { MyPetCard } from './MyPetCard';


afterEach(() => {
  cleanup();
});

test('1. should render MyPetForm component', () => {
  render(<MyPetCard name="kapsel" type="dog" bread="mops" age="2" />);
  const inputComponent = screen.getByTestId("my-pet-form");
  expect(inputComponent).toBeInTheDocument();
  expect(inputComponent).not.toBeNull();
  expect(inputComponent).not.toBeDisabled();
  expect(inputComponent).toHaveTextContent('dog');
});

test('2. should render MyPetForm component', () => {
  render(<MyPetCard name="bu" type="cat" bread="sfinks" age="8" />);
  const inputComponent = screen.getByTestId("my-pet-form");
  expect(inputComponent).toBeInTheDocument();
  expect(inputComponent).not.toBeNull();
  expect(inputComponent).not.toBeDisabled();
  expect(inputComponent).toHaveTextContent('cat');
});

test('matches snapshot', () => {
  const tree = renderer.create(<MyPetCard name="kapsel" type="dog" bread="mops" age="2" />).toJSON();
  expect(tree).toMatchSnapshot();
});