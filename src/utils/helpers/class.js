import clsx from "clsx";

export function cn(...inputs) {
    return clsx(inputs);
}

export const cleanHtmlTags = (text) => {
    if (typeof text === "string") {
        return text.replace(/<[^>]*>/g, "");
    } else {
        return (
            (text.userPreferred || text.romaji || "").replace(/<[^>]*>/g, "")
        );
    }
};

export const skeletonArray = new Array(20).fill(null);