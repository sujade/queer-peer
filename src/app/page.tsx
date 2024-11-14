import React from 'react';

const Page = () => {
    return (
        <>
            <h1>Your ad here</h1>
            <span>This is a regular text with numbers.</span> <br/>
            <span className={'text-danger fw-bold'}>3 2 1 0</span> <br/>
            <span className={'fw-bold'}>This is a bold text using Bootstrap</span>
        </>
    );
};

export default Page;