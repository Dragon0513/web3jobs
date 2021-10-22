import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const JobPage = ({ match }) => {
    const [isLoading, setIsLoading] = useState(true);
    // const [data, setData] = useState();

    const {
        params: { jid, jtitle },
    } = match;

    useEffect(() => {
    }, []);

    return (
        <div>
            <div className={"w-screen fixed flex flex-col min-h-screen bg-gray-50"}>
                <header
                    className={
                        "flex justify-between items-center px-4 h-16 bg-gray-900"
                    }
                >
                    <span
                        className={
                            "text-2xl sm:text-4xl text-white border-b font-sans"
                        }
                    >
                        Job Title:{`${jtitle}`}
                    </span>
                </header>
                <Link to="/web3-jobs">Back to All Jobs</Link>
            </div>
        </div>
    );
};

export default JobPage;
