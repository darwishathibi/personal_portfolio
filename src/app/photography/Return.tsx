"use client";
import Link from "next/link";
import DrawOutlineButton from "@/components/ui/draw-outline-button";

export default function Return() {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <Link href={"/"}>
                <DrawOutlineButton >return back.</DrawOutlineButton>
            </Link>
        </div>
    )
} 