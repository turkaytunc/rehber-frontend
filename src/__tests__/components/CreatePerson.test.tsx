import { screen, render, fireEvent } from '@testing-library/react';
import { CreatePerson } from 'src/components';
import PersonContextProvider from 'src/contexts/personContext';
import { PersonBuilder } from 'src/types/PersonBuilder';

jest.spyOn(window, 'fetch');

const person = new PersonBuilder('Random Guy', '32432432').setPersonId('2342').build();

describe('<CreatePerson />', () => {
  it('should handle create person event successfully', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({ status: 200, json: jest.fn(() => ({ person })) });
    render(
      <PersonContextProvider>
        <CreatePerson />
      </PersonContextProvider>
    );

    fireEvent.click(await screen.findByRole('button'));

    expect(await screen.findByText('firstname')).toBeInTheDocument();
  });

  it('should get error from server', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 400,
      json: jest.fn(() => ({ message: 'Error Occurred' })),
    });
    render(
      <PersonContextProvider>
        <CreatePerson />
      </PersonContextProvider>
    );

    fireEvent.click(await screen.findByRole('button'));

    expect(await screen.findByText('Error Occurred')).toBeInTheDocument();
  });

  it('should get fetch error', async () => {
    (window.fetch as jest.Mock).mockRejectedValue(new Error('Fetch Error!'));
    render(
      <PersonContextProvider>
        <CreatePerson />
      </PersonContextProvider>
    );

    fireEvent.click(await screen.findByRole('button'));

    expect(await screen.findByText('Fetch Error!')).toBeInTheDocument();
  });
});
