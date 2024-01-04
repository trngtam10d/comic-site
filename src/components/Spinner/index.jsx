import React from "react";

export default function Spinner() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative flex justify-center items-center">
                <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            </div>
        </div>
    );
}