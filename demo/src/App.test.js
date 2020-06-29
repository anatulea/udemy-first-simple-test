import React from 'react';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

 Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders withoutt error', () => {
 const wrapper = shallow(<App/>);
 const appComponent = wrapper.find("[data-test='component-app']");
 expect(appComponent.length).toBe(1);
 //console.log(wrapper.debug())
 //expect(wrapper).toBeTruthy();
});
test('renders increment button', () => {
  const wrapper = shallow(<App/>);
 const button = wrapper.find("[data-test='increment-button']");
 expect(button.length).toBe(1);
 });
 test('renders counter display', () => {
  const wrapper = shallow(<App/>);
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

