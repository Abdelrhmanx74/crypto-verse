'use client'
import { Footer, Sidebar } from "@/components"
import { Theme } from "@twilio-paste/core/theme"

export default function LayoutProvider({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className=" h-full m-0 p-4">
            <Theme.Provider theme="default">
                <div className="flex w-full h-full">
                    <div className="">
                        <Sidebar />
                    </div>
                    <div className="p-8">
                        {children}
                    </div>
                </div>
                <Footer />
            </Theme.Provider>
        </main>
    )
}