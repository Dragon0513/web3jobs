import { JOBS_URL } from "@constants/";
import { makeFriendlyUrl } from '@util/sanitize';

// function thatcreate the Jobs Tag URL
// It will look like - as an ex: /web3-jobs/solidity-jobs
export  const genTagsUrl = tag => `${JOBS_URL}/${makeFriendlyUrl(tag)}-jobs`;