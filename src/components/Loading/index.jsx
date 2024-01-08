import React from "react";

export default function Loading() {
    return (
        <div className="flex flex-column gap-6 justify-center items-center h-full w-full ml-auto">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-purple-500"></div>
        </div>
    );
}