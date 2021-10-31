import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer'
import App from '../App.js';

describe('Snapshot tests', () => {
  test('Making sure it doesnt crash', () => {
    let tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
