import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import { CharacterCard } from '.';

const fakeCharacter = {
  id: '1',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  origin: {
    name: 'Earth (C-137)',
  },
  location: {
    name: 'Earth (Replacement Dimension)',
  },
};

describe('CharacterCard component', () => {
  it('renders correctly', () => {
    render(<CharacterCard character={fakeCharacter} />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  });
});
