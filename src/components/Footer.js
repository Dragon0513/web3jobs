import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TAGS_ID, TAGS_NAME } from "@constants/";
import { getAllTags } from "@db/";

const Footer = job => {
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

    // function that will destructure the job object
    // it pulls out the title, id and company name to be used in the URL
    // const generateLinkURL = tag => {
    //     const {[JOB_TITLE]: title, [JOB_ID]: id, companies: {[COMPANY_NAME]: cName}} = job;
    //     return `/web3-jobs/${removeWhiteSpace(title)}-${removeWhiteSpace(cName)}/${id}`
    // }

    return (
        <footer>
            {tags.map(tag => (
                <div key={tag[TAGS_ID]}>
                    {tag[TAGS_NAME]}
                    {/* <Link to={{ pathname: generateLinkURL(job), state: { job: job } }}><h1>Job Title: {job.jobTitle}</h1></Link> */}
                </div>
            ))}
        </footer>
    );
};

export default Footer;
