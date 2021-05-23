import { render, screen } from '@testing-library/react';
import { ListPerson } from 'src/components';
import PersonContextProvider from 'src/contexts/personContext';

jest.spyOn(window, 'fetch');

describe('<ListPerson />', () => {
  describe('Successful fetch request', () => {
    it('should fetch people list', async () => {
      (window.fetch as jest.Mock).mockResolvedValue({
        status: 200,
        json: jest.fn(() => ({ people: [{ firstname: 'Mahmut', person_id: '234' }] })),
      });
      render(
        <PersonContextProvider>
          <ListPerson />
        </PersonContextProvider>
      );

      expect(await screen.findByText('Mahmut')).toBeInTheDocument();
    });

    it('should get fetch error message from server', async () => {
      (window.fetch as jest.Mock).mockResolvedValue({
        status: 404,
        json: jest.fn(() => ({ message: 'Something went wrong' })),
      });
      render(
        <PersonContextProvider>
          <ListPerson />
        </PersonContextProvider>
      );

      expect(await screen.findByText('Something went wrong')).toBeInTheDocument();
    });
  });
  describe('Failed fetch request', () => {
    it('should get fetch error', async () => {
      (window.fetch as jest.Mock).mockRejectedValue(new Error('Cannot Fetch People'));
      render(
        <PersonContextProvider>
          <ListPerson />
        </PersonContextProvider>
      );

      expect(await screen.findByText('Cannot Fetch People')).toBeInTheDocument();
    });
  });
});
