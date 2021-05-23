import SinglePerson from 'src/components/list-person/single-person/SinglePerson';

import { screen, render, fireEvent } from '@testing-library/react';
import { PersonBuilder } from 'src/types/PersonBuilder';

jest.spyOn(window, 'fetch');

const person = new PersonBuilder('Ad', '32432432').setPersonId('2342').build();

describe('<SinglePerson />', () => {
  it('should delete person without crashing', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({ status: 200 });
    render(<SinglePerson person={person} />);

    fireEvent.click(await screen.findByRole('button'));

    expect(window.location.pathname).toBe('/');
  });

  it('should get error while deleting person', async () => {
    (window.fetch as jest.Mock).mockRejectedValue(new Error('Cannot Delete Person'));
    render(<SinglePerson person={person} />);

    fireEvent.click(await screen.findByRole('button'));

    expect(await screen.findByText('Cannot Delete Person')).toBeTruthy();
  });
});
