import React, { forwardRef } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/utils/helpers/class";

const Title = forwardRef(
    (
        { className, ...props },
        ref
    ) => (
        <SheetPrimitive.Title
            className={cn(
                "text-lg font-semibold text-foreground",
                className
            )}
            {...props}
            ref={ref}
        />
    )
);
Title.displayName = SheetPrimitive.Title.displayName;

export default Title;