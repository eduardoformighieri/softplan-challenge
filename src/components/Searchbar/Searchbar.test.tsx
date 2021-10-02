import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { Searchbar } from '.';

describe('Searchbar component', () => {
  it('renders correctly', () => {
    render(<Searchbar />);

    expect(
      screen.getByPlaceholderText('Procurar personagem...')
    ).toBeInTheDocument();
  });
});
