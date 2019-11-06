import React from 'react';
import renderer from 'react-test-renderer';
import AnimalList from '../components/AnimalList';

const testAnimals = [
  { taxonid: 1, scientific_name: 'Calumma fallax' },
  { taxonid: 2, scientific_name: 'Calumma vatosoa' },
  { taxonid: 3, scientific_name: 'Chamaeleo necasi' },
];

describe('<AnimalList />', () => {
  test('Should not break when no animals passed', () => {
    const component = renderer.create(<AnimalList />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly', () => {
    const component = renderer.create(<AnimalList animals={testAnimals} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render favorite state correctly', () => {
    const component = renderer.create(<AnimalList animals={testAnimals} favorites={[1]} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
