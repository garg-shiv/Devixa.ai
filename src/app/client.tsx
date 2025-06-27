"use client"

import { useTRPC } from "@/trpc/client"
import { trpc } from "@/trpc/server"
import { useQuery } from "@tanstack/react-query"

export const Client =() =>{
    const trpc = useTRPC();
    const {data} = useQuery(trpc.createAI.queryOptions({text:"Shivanshu"}));

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}