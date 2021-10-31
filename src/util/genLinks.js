import { Link } from 'react-router-dom'

/**
 * Some linkData example
 * [
        { linkText: 'Home', path: '/' },
        { linkText: 'Companies', path: `${COMPANIES_URL}` },
        { linkText: 'Jobs', path: `${JOBS_URL}` }
 *  ]
 * @param {Array} linkData 
 * @returns Array of <Link> objects
 */
export const genLinks = (linkData, style) => {
    return linkData.map(data => {
        return (
            <Link to={data.path} key={data.linkText} className={style}>
                {data.linkText}
            </Link>
        );
    });
}

/**
 * Calls the function 👆 
 * used for a single link
 * @param {string} linkText 
 * @param {string} path 
 * @param {string} style 
 * @returns 
 */
export const genLink = (linkText, path, style) => genLinks([{ linkText, path }], style);

export const genFooterLink = (linkText, path, style) => {
    return (
        <Link to={path} key={linkText} className={style}>
            {linkText}
        </Link>
    )
}