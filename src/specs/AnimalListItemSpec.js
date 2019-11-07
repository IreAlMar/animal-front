import React from 'react';
import { mount } from 'enzyme';
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

  test('Should call onClick when clicked', () => {
    const onClick = jest.fn();

    const component = mount(
      <AnimalListItem animal={testAnimal} onClick={onClick} />,
    );
    component.simulate('click');

    expect(onClick.mock.calls.length).toBe(1);
  });

  test('Should call onFavorited when favorited', () => {
    const onFavorited = jest.fn();

    const component = mount(
      <AnimalListItem animal={testAnimal} onFavorited={onFavorited} />,
    );
    component.find('span').first.simulate('click');

    expect(onFavorited.mock.calls.length).toBe(1);
  });

  test('Should not call onClick when onFavorited is called', () => {
    const onClick = jest.fn();
    const onFavorited = jest.fn();

    const component = mount(
      <AnimalListItem animal={testAnimal} onClick={onClick} onFavorited={onFavorited} />,
    );
    component.find('span').first.simulate('click');

    expect(onClick.mock.calls.length).toBe(0);
    expect(onFavorited.mock.calls.length).toBe(1);
  });
});
