import { render, screen } from '@testing-library/react';
import IngresarNombre from './IngresarNombre';

test('renders learn react link', () => {
  render(<IngresarNombre />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
