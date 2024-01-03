import React from "react";

import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
    return (
        <div className="flex flex-column gap-6 items-center justify-center h-full w-full ml-auto">
            <LoadingOutlined size={50} className="animate-spin text-dark font-bold" />
            <h4 className="text-dark">
                Processing...
            </h4>
        </div>
    );
}