import * as React from 'react';
import { shallow } from 'enzyme';
import { Hello } from '../Hello';

it("renders the heading", () => {
    const component = shallow(<Hello compiler="TypeScript" framework="React" />);

    expect(component.contains(<h1>Hello from TypeScript and React!</h1>)).toBe(true);
});