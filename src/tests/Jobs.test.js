import { render, screen } from '@testing-library/react';
import Jobs from '../components/Jobs.js';

test('Lists the jobs if they are available', () => {
    render(<Jobs></Jobs>);

    const items = screen.findByLabelText('Job Title')
    expect(items)
})
