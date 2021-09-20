import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from './Controls';

describe('App component', () => {
  afterEach(() => cleanup());

  it('displays App component', () => {
    const { asFragment } = render(<Controls />);
    expect(asFragment()).toMatchSnapshot();
  });
});
