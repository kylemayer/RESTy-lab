/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Container from '../containers/Container';

const server = setupServer(
  // eslint-disable-next-line max-len
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            id: 1,
            name: 'Miles Shortman',
            image: 'example.com/image.png',
          },
        ],
      })
    );
  })
);

describe('RESTy Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should display the sidebar, controls and body components', async () => {
    render(<Container />);

    const inputBar = await screen.findByRole('textbox', { name: 'url' });
    userEvent.type(inputBar, 'https://hey-arnold-api.herokuapp.com/api/v1/characters');

    const method = await screen.findByDisplayValue('GET');
    userEvent.click(method);

    const submitButton = await screen.findByRole('button', { name: 'button' });
    userEvent.click(submitButton);

    const response = await screen.findByRole('body', { name: 'response' });
    expect(response).toMatchSnapshot();
  });
});
