import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { CharacterDetails } from '.';

jest.mock('react-router-dom', () => {
  return {
    useParams() {
      return {
        id: '1',
      };
    },
  };
});

describe('CharacterDetails page', () => {
  it('renders correctly', () => {
    render(<CharacterDetails />);

    expect(screen.getByText('Editar')).toBeInTheDocument();
  });
});
