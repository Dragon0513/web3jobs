import { useState, useEffect } from "react";
import { getAllTags } from "@db/";
import { genFooterLink, genTagsUrl } from "@util/";
import {capitalize } from '@util/sanitize';

// This is what we will ultimately return
// it contains the inner div's with all the fancy ass links
const genTags = allTags => {
    const tagsArray = getTagsFromObject(allTags);
    const tagData = genTagData(tagsArray);
    let returnMe = []

    for (let key in tagData) { returnMe.push(innerHTMLDiv(tagData[key])) }

    return returnMe;
}

const genTagData = tagsFromDB => {
    const rows = Math.round(tagsFromDB.length / 4);
    let tagLinksData = {};

    for (let i = 0; i < 3; i++) {
        const start = rows * i;
        const end = start + rows
        const segment = tagsFromDB.slice(start, end)

        tagLinksData[`col${i}`] = genColumnData(segment)
    }

    // Don't forget the last segment!
    // It's done this way because the last column has the potential to have more rows
    // Not everything is evenly divisible by four :) 
    tagLinksData['col3'] = genColumnData(tagsFromDB.slice((rows * 3)));

    return tagLinksData;
}

const genColumnData = tags => {
    return tags.map(tag => {
        const genLinkText = tgTxt => `Web3 ${capitalize(tgTxt)} jobs`;
        return { linkText: genLinkText(tag), path: genTagsUrl(tag) }
    })
}

const getTagsFromObject = tagsFromDB => {
    let returnMe = []
    for (let key in tagsFromDB) {
        returnMe.push(tagsFromDB[key]['tagName']);
    }

    return returnMe;
}

/**
 * Expects the objects coming in to look like this
 * { linkText: 'text', path: '/path' }
 * 
 * @param {array of objects} sectionItems 
 * @param {string} divStyle 
 * @returns HTML
 * Spits this out 👇
    <div>
        <ul role="list" className="mt-4 space-y-4">
            <li key={item.name}>
                <Link to=path
                    <p className={style}>link text</p>
                <Link/>
            </li>
        </ul>
    </div>
 */
const innerHTMLDiv = (sectionItems) => {
    const style = "text-base text-gray-300 hover:text-white";

    return sectionItems.map(item => (
        <li key={item.linkText}>
            {genFooterLink(item.linkText, item.path, style)}
        </li>
    ))
}

const navigation = {
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Guides', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: 'https://blog.web3jobz.com' },
    ],
    legal: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Twitter',
            href: 'https://twitter.com/web3jobs_',
            icon: props => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/BB-Computer-Enterprises/web3jobs/',
            icon: props => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Discord',
            href: 'https://discord.gg/dfyf5A9hz6',
            icon: props => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

export default function Footer() {
    const [tags, setTags] = useState([]);
    const [errorText, setError] = useState("");

    useEffect(() => {
        getTagsFromDB().catch(console.error);
    }, []);

    // function to pull the data from the DB
    const getTagsFromDB = async () => {
        let { data: tags, error } = await getAllTags();
        if (error) setError(error);
        else setTags(tags)
    };

    return (
        <footer className="bg-gray-dark" aria-labelledby="footer-heading">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-white">
                <div className="pb-8 xl:grid">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-4">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <ul className="mt-4 space-y-4">
                                    {tags.length ? genTags(tags)[0] : 'Loading Tags'}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <ul className="mt-4 space-y-4">
                                    {tags.length ? genTags(tags)[1] : 'Loading Tags'}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <ul className="mt-4 space-y-4">
                                    {tags.length ? genTags(tags)[2] : 'Loading Tags'}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <ul className="mt-4 space-y-4">
                                    {tags.length ? genTags(tags)[3] : 'Loading Tags'}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6">
                        {navigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6 hover:text-indigo-700" aria-hidden="true" />
                            </a>
                        ))}
                        {navigation.support.map((item) => (
                            <a key={item.name} href={item.href}>
                                <span className="text-white hover:text-indigo-700">{item.name}</span>
                            </a>
                        ))}
                        {navigation.company.map((item) => (
                            <a key={item.name} href={item.href}>
                                <span className="text-white hover:text-indigo-700">{item.name}</span>
                            </a>
                        ))}
                        {navigation.legal.map((item) => (
                            <a key={item.name} href={item.href}>
                                <span className="text-white hover:text-indigo-700">{item.name}</span>
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-base md:mt-0 md:order-1">
                        &copy; 2021 BB Computer Enterprises LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
