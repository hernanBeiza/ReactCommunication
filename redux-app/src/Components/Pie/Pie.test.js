import { render, screen } from '@testing-library/react';
import Pie from './Pie';

test('renders learn react link', () => {
  render(<Pie />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
