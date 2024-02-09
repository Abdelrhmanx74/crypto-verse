'use client'
import { Footer, Sidebar } from "@/components"
import { Theme } from "@twilio-paste/core/theme"

export default function LayoutProvider({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <Theme.Provider theme="light">
            <div className=" h-full m-0 p-4">
                <div className="flex w-full h-full">
                    <div className="flex-[0.2]">
                        <Sidebar />
                    </div>
                    <div className="flex-[0.8] p-8">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </Theme.Provider>
    )
}