"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowDown, Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AddRepoButton() {
  return (
     <div
      className="group w-full px-6 py-6 flex flex-row justify-between items-center border rounded-lg bg-muted cursor-pointer 
        transition-all duration-300 ease-in-out
        hover:bg-background hover:border-[#25bb9f] hover:scale-[1.02]
        shadow-[0_2px_10px_rgba(0,0,0,0.08)]
        hover:shadow-[0_10px_30px_rgba(33,63,63,0.8)]"
    >
      <div className="flex flex-row justify-center items-start gap-4">
        <Button
          variant={"outline"}
          className="flex justify-center items-center bg-white group-hover:bg-[#fff8f8] group-hover:border-[#25bb9f] group-hover:text-[#25bb9f] transition-colors duration-300"
          size={"icon"}
        >
          <ArrowDown size={30} className="transition-transform duration-300 group-hover:rotate-90" />

             
        </Button>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-[#25bb9f]">Open github Repository</h3>
          <p className="text-sm text-muted-foreground">Work with your Repositories</p>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <Image src={"/github.svg"} alt="Add new project" width={100} height={100} 
        className="transition-transform duration-300 group-hover:scale-110"/>

      </div>

    </div>
  )
}

export default AddRepoButton
