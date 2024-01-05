import React, { forwardRef } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/utils/helpers/class";

const Description = forwardRef(
    (
        { className, ...props },
        ref
    ) => (
        <SheetPrimitive.Description
            className={cn(
                "text-sm",
                className
            )}
            {...props}
            ref={ref}
        />
    )
);
Description.displayName = SheetPrimitive.Description.displayName;

export default Description;