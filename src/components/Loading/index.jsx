import React from "react";

import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
    return (
        <div className="flex flex-column gap-6 items-center justify-center h-full w-full ml-auto">
            <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600" />
        </div>
    );
}