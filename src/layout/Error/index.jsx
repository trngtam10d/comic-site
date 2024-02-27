import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {

    return (
        <>
            <main className="h-[50vh] w-full flex flex-col justify-center items-center border-b">
                <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
                <div className="bg-indigo-500 px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <div className="flex flex-row justify-center items-center">
                    <button className="mt-5">
                        <a className="relative inline-block text-sm font-medium text-indigo-500 group focus:outline-none focus:ring">
                            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-indigo-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>
                            <span className="relative block px-8 py-3 bg-background border border-current">
                                <Link to="/manga">Go Manga</Link>
                            </span>
                        </a>
                    </button>
                </div>
            </main>
        </>
    )
}

export default Error