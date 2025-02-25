import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import PropTypes from "prop-types";

export const Seo = ({ title, description, author, pathname, children }) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl, author: defaultAuthor } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        author: author || defaultAuthor,
        url: `${siteUrl}${pathname || ""}`
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="author" content={seo.author} />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
            {children}
        </>
    );
};

Seo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.element,
};