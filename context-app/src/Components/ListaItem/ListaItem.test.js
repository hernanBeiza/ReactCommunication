import { render, screen } from '@testing-library/react';
import ListaItem from './ListaItem';

test('renders learn react link', () => {
  render(<ListaItem />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
