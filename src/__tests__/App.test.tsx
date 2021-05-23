import { render, screen } from '@testing-library/react';
import PersonContextProvider from 'src/contexts/personContext';
import App from '../App';

test('renders learn react link', () => {
  render(
    <PersonContextProvider>
      <App />
    </PersonContextProvider>
  );
  const linkElement = screen.getByText(/Create Person/i);
  expect(linkElement).toBeInTheDocument();
});
