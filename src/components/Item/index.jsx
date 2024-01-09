import React from "react";
import LazyImage from "@/utils/helpers/helpers";
import { RightOutlined } from "@ant-design/icons";

export default function Item(props) {

    const mangaList = props.data.data?.data.map((el, index) => {
        return (
            <div className="flex items-center p-2.5 border-b gap-4" key={el.mail_id}>
                <LazyImage 
                    src={el.images.webp.large_image_url || el.images.webp.image_url}
                    alt={el.title}
                    className="h-20 min-w-14 rounded overflow-hidden object-cover"
                />
                <div className="flex flex-col gap-2.5">
                    <span>
                        <a href="#" className="no-underline text-base leading-4 hover:text-indigo-500">{el.title_english || el.title}</a>
                    </span>
                </div>
            </div>
        );
    })

    return (
        <div className="z-50 space-y-8 rounded-3xl bg-background p-8">
            <p className="text-sm font-bold antialiased text-indigo-500">{props.heading}</p>
            <div className="grid grid-cols-1 gap-2">
                {mangaList}
            </div>
            <a href="#" className="no-underline text-base leading-4 p-2.5 hover:text-indigo-500 flex flex-row">
                View more
                <RightOutlined className="ml-2" />
            </a>
        </div>
    );
}