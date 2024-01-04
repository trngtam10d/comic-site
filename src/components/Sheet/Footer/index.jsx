import React, { forwardRef } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/utils/helpers/class";

const Footer = forwardRef(
    (
        { className, ...props },
        ref
    ) => (
        <div
            className={cn(
                "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
                className
            )}
            {...props}
            ref={ref}
        />
    )
);
Footer.displayName = "Footer";

export default Footer;