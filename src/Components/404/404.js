import React from 'react';
import error from "../../Images/404.png";
const Error404 = () => {
    return (
        <div className='mt-5 text-center'>
            <img src={error} alt="" />
            <h1 className='text-center text-primary fs-2 mt-3'>404 Page not Found</h1>
        </div>
    );
};

export default Error404;