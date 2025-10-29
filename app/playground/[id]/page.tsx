"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import TemplateFileTree from "@/features/playground/components/template-file-tree";
import { usePlayground } from "@/features/playground/hooks/usePlayground";
import { useParams } from "next/navigation";
import React from "react";

const Page =() => {
    const {id} =  useParams<{id:string}>();
    const {playgroundData, templateData, isLoading, error, saveTemplateData} = usePlayground(id);

    console.log(templateData, playgroundData);
    return (
        <div>
            <> 
    
    

            <SidebarInset>
                <header className="px-4 gap-2 h-16 flex shrink-0 items-center border-b">
                    <SidebarTrigger>
                        <Separator orientation="vertical" className="my-2" />
                        <div className="flex items-center space-x-2">
                            <div className="flex flex-col flex-1">
                                {playgroundData?.title || "Code Playground"}
                            </div>
                        </div>

                    </SidebarTrigger>
                </header>
            </SidebarInset>
            </>
        </div>
    )
}

export default Page;