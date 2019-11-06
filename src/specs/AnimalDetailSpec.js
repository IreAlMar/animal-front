import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import AnimalDetail from '../components/AnimalDetail';

describe('<Header />', () => {
  let testAnimal;

  beforeEach(() => {
    testAnimal = {
      name: 'Chamaleon test name',
      result: [
        {
          scientific_name: 'Chamaleon scientific test name',
          taxonid: 1,
          taxonomicnotes: 'Test taxonomic notes',
          habitat: 'Test habitat',
          threats: 'Test threats',
          conservationmeasures: 'Test conservation measures',
        },
      ],
    };
  });

  test('Should render zero state', () => {
    const component = renderer.create(
      <BrowserRouter>
        <AnimalDetail />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should correctly render an animal', () => {
    const component = renderer.create(
      <BrowserRouter>
        <AnimalDetail animal={testAnimal} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should correctly assign a className', () => {
    const component = renderer.create(
      <BrowserRouter>
        <AnimalDetail animal={testAnimal} className="classname-test" />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render an animal without taxonomicnotes', () => {
    delete testAnimal.result[0].taxonomicnotes;

    const component = renderer.create(
      <BrowserRouter>
        <AnimalDetail animal={testAnimal} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render an animal without result', () => {
    delete testAnimal.result[0];

    const component = renderer.create(
      <BrowserRouter>
        <AnimalDetail animal={testAnimal} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
