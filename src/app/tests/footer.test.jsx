import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer';
import '@testing-library/jest-dom';

test('renders LinkedIn icon', () => {
  render(<Footer />);
  const linkedInIcon = screen.getByLabelText('LinkedIn');
  expect(linkedInIcon).toBeInTheDocument();
});

test('renders GitHub icon', () => {
  render(<Footer />);
  const gitHubIcon = screen.getByLabelText('GitHub');
  expect(gitHubIcon).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<Footer />);
  const homeLink = screen.getByText('Home');
  const projectsLink = screen.getByText('Projects');
  const contactLink = screen.getByText('Contact');
  expect(homeLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
