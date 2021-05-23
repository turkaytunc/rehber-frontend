import { fireEvent, render, screen } from '@testing-library/react';
import PersonContextProvider from 'src/contexts/personContext';
import App from '../App';

describe('<App />', () => {
  it('renders create person', () => {
    render(
      <PersonContextProvider>
        <App />
      </PersonContextProvider>
    );
    const linkElement = screen.getByText(/Create Person/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('fire click event', async () => {
    render(
      <PersonContextProvider>
        <App />
      </PersonContextProvider>
    );

    fireEvent.click(await screen.findByText('Create Person'));

    expect(await screen.findByText('Add Person')).toBeInTheDocument();
  });
});
