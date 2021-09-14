import React from 'react';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Container from '../containers/Container';

describe('RESTy Container', () => {
  it('should display the sidebar, controls and body components', async () => {
    render(<Container />);
  });
});
