import { Helmet } from "react-helmet";

export const getLinkCard = data => {
    const { title, imageURL, description } = data
    return (
        <Helmet>
            <meta name="twitter:title" content={title} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="@web3jobz_" />
            <meta name="twitter:site" content="@web3jobz_" />
            <meta name="twitter:image" content={imageURL} />
            <meta name="twitter:description" content={description} />
            
            <meta property="og:type" content="website" />
            <meta name="image" property="og:image" content={imageURL} />
            <meta name="description" property="og:description" content={description} />
        </Helmet>
    )
}