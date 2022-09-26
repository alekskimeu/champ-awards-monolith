import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Button = ({ url, title }) => {
    return (
        <Link href={url} className="btn-vote">
            {title} <i className="fas fa-arrow-right-long"></i>
        </Link>
    );
};

export default Button;
