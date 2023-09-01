import { render, screen } from '@testing-library/react';
import { Person } from './Person';
import React from 'react';

test('it renders a person\'s name with the expected content and role', () => {
  render(<Person name={"ullas"} />);
  // const linkElement = screen.getByText(/Name ullas/i);
  // expect(linkElement).toBeInTheDocument();
  const divElm = screen.getByRole("contentinfo");
  expect(divElm).toHaveTextContent("Name ullas");
  expect(divElm).toHaveAttribute("role","contentinfo");
});
