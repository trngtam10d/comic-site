import React from 'react';

const Button = () => {
    return (
        <div className="flex space-x-2">
            <button class="rounded-full bg-indigo-500 p-2 text-xl text-white shadow-lg shadow-indigo-200 transition duration-200 hover:scale-105"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
            <button class="rounded-full bg-indigo-500 p-2 text-xl text-white shadow-lg shadow-indigo-200 transition duration-200 hover:scale-105"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
        </div>
    )
}

export default Button