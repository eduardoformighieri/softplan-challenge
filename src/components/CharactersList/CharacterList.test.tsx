import { fakeCharactersList } from '../../utils/fakeCharactersList';
import { paginateArray } from '../../utils/helpers';

describe('CharacterCard component', () => {
  it('paginate function working correctly', () => {
    const paginatedList = paginateArray(fakeCharactersList, 20, 1);
    expect(paginatedList).toContainEqual({
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
    });
  });
});
