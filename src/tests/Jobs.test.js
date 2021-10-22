import { render, screen } from '@testing-library/react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllJobs from '../components/AllJobs.js';

test('Lists the jobs if they are available', () => {
    render(
        <Router><AllJobs></AllJobs></Router>
    );

    const items = screen.findByLabelText('Job Title')
    expect(items)
})
