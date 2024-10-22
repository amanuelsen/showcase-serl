import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreatorSelect from '../Components/Selecttype';
import '@testing-library/jest-dom';

test('renders CreatorSelect component', () => {
  const setSelectedCreator = jest.fn();
  render(
    <CreatorSelect
      selectedCreator='All'
      setSelectedCreator={setSelectedCreator}
    />
  );

  const selectElement = screen.getByLabelText('Creator');
  expect(selectElement).toBeInTheDocument();
  expect(screen.getByText('All')).toBeInTheDocument();
});

test('changes value when a new option is selected', () => {
  const setSelectedCreator = jest.fn();
  render(
    <CreatorSelect
      selectedCreator='All'
      setSelectedCreator={setSelectedCreator}
    />
  );

  fireEvent.mouseDown(screen.getByLabelText('Creator'));

  fireEvent.click(screen.getByText('Student'));

  expect(setSelectedCreator).toHaveBeenCalledWith('student');
});
