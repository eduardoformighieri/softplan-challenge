import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { Home } from '.';
import { GET_NUMBER_OF_CHARACTER_PAGES } from '../../apollo/queries';
import { MockedProvider } from '@apollo/client/testing';

const mocks = [
  {
    request: {
      query: GET_NUMBER_OF_CHARACTER_PAGES,
    },
    loading: false,
    result: {
      data: {
        characters: { info: { pages: 5 } },
      },
    },
  },
];

describe('Home page', () => {
  it('renders correctly', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    expect(screen.getByText('Lista de personagens')).toBeInTheDocument();
  });
});
