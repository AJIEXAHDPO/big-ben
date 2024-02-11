import { ReactNode } from "react";

export const PageContent = ({ children }: { children: ReactNode }) => (
    <div className="flex flex-col max-w-[1140px] justify-betweeen gap-8 mx-auto p-[20px]">
        {children}
    </div>
);