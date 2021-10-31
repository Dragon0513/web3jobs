import { render, screen } from '@testing-library/react';
import Companies from '../components/Companies.js';

test('Lists the companies if they are available', () => {
    render(<Companies></Companies>);

    const items = screen.findByLabelText('Company Name')
    expect(items)
})
