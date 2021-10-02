import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { Pagination } from '.';
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

describe('Pagination component', () => {
  it('renders correctly', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Pagination />
      </MockedProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
