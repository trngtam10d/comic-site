import React, { forwardRef } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/utils/helpers/class";

const Header = forwardRef(
    (
        { className, ...props },
        ref
    ) => (
        <div
            className={cn(
                "flex flex-col space-y-2 text-center sm:text-left",
                className
            )}
            {...props}
            ref={ref}
        />
    )
);
Header.displayName = "Header";

export default Header;