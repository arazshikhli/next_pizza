import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { Container } from "./container";
import Image from "next/image";

interface Props{
    className?:string
}

export const Header:FC<Props>=({className})=>{
    return <header className={cn('border border-b',className)}>
        <Container className="flex items-center justify-between py-8">
            
        <div>
            <Image src='/logo.png' width={35} height={35} alt="logo"/>
        </div>
        </Container>

    </header>
}