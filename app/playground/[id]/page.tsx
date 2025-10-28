"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { useParams } from "next/navigation";
import React from "react";

const Page =() => {
    const {id} =  useParams<{id:string}>();
    return (
        <div>
            <>  
            <SidebarInset>
                <header className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <SidebarTrigger>
                        <Separator orientation="vertical" className="my-2" />
                        <div className="flex items-center space-x-2">
                            <div className="flex flex-col flex-1"></div>
                        </div>

                    </SidebarTrigger>
                </header>
            </SidebarInset>
            </>
        </div>
    )
}

export default Page;