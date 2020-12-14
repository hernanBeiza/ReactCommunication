import { render, screen } from '@testing-library/react';
import AgregarItem from './AgregarItem';

test('renders learn react link', () => {
  render(<AgregarItem />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
