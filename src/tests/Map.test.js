import React from 'react';
import { shallow } from 'enzyme';
import Map from '../components/Map';

export const spotList = ['seoul', 'deagu', 'busan', 'deajeon'];

describe('<Map />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    const getSpotList = jest.fn();
    wrapper = shallow(<Map getSpotList={getSpotList} spotList={spotList} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders changed header on buttons click', () => {
    const searchButton = wrapper.find('.search-button');

    searchButton.simulate('click');
    expect(wrapper.contains('SMOKING')).toBe(false);
    expect(wrapper.contains('SPOT')).toBe(false);
  });
});
