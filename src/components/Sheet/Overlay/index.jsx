import React, { forwardRef } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/utils/helpers/class";

const Overlay = forwardRef(
    (
        { className, ...props },
        ref
    ) => (
        <SheetPrimitive.Overlay
            className={cn(
                "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                className
            )}
            {...props}
            ref={ref}
        />
    )
);
Overlay.displayName = SheetPrimitive.Overlay.displayName;

export default Overlay;