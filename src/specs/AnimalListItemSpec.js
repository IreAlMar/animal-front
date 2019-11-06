import React from 'react';
import renderer from 'react-test-renderer';
import AnimalListItem from '../components/AnimalListItem';

const testAnimal = {
  scientific_name: 'Chamaleon test name',
  taxonid: 1,
  category: 'Test category',
};

describe('<AnimalListItem />', () => {
  // AnimalListItem takes the following props: ({ animal, favorited, onClick, onFavorited })
  // So test what happens in each case:
  test('Should not break if no animal is passed', () => {
    const component = renderer.create(<AnimalListItem />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should correctly reder animal', () => {
    const component = renderer.create(<AnimalListItem animal={testAnimal} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render favorite state', () => {
    // favorited={true} -> Value must be omitted for boolean attribute seslint
    const component = renderer.create(<AnimalListItem animal={testAnimal} favorited />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
