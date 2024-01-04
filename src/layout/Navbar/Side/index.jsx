import { useState } from "react";
import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";

import { Sheet, Trigger, Content, Header, Footer, Description, Title } from "@/components";
import { cn } from "@/utils/helpers/class";
import anime from "@/services/data";

export default function SideNav() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <Trigger asChild>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-200 hover:text-gray h-10 w-10" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rmla:" data-state="closed">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7"></path>
                    </svg>
                </button>
            </Trigger>
            <Content side="left">
                <Header className="flex h-full">
                    <Title>
                        Hello Ani!
                    </Title>
                    <ul className="flex flex-col pt-5 py-10 border-y">
                        {anime.items.map((link) => (
                            <li onClick={handleClose} key={link.text}>
                                <Link to={link.href} className={cn(buttonVariants({ variant: "ghost" }), "w-full justify-start")}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full">
                            <Link to="/signin" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-teal-400 text-dark hover:bg-teal-200/90 h-9 rounded-3xl px-3 w-full mb-1">
                                Sign In
                            </Link>
                            <span className="text-sm text-dark hover:underline hover:text-blue cursor-pointer">Already have account?</span>
                        </div>
                        or
                        <div className="w-full">
                            <Link to="/signup" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-200 text-dark h-9 rounded-3xl px-3 w-full mb-1">
                                Sign Up
                            </Link>
                            <span className="text-sm text-dark hover:underline hover:text-blue cursor-pointer">No account yet? please create account</span>
                        </div>
                    </div>
                </Header>
            </Content>
        </Sheet>
    );
}

const buttonVariants = cva(
    "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-dark hover:bg-primary/90",
            destructive:
                "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline:
                "border border-input bg-teal-200 hover:bg-gray-300 hover:text-red",
            secondary: "bg-secondary text-dark hover:bg-secondary/80",
            ghost: "hover:bg-gray-400 hover:text-dark",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
}
)