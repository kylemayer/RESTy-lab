import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());

  it('displays App component', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
