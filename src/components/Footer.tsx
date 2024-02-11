import { Instagram, Facebook } from "lucide-react"

export const Footer = () => {
    return <div className="w-full h-72 px-10 py-7 bg-neutral-700 flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="max-w-[1140px] w-full h-44 flex-col justify-start items-start gap-2.5 flex">
            <div className="text-gray-100 text-xl font-semibold">Contact us</div>
            <div className="text-gray-100 text-xl font-semibold">+7(812)-417-17-17</div>
            <div className="text-gray-300 text-base font-semibold">Terms of use</div>
            <div className="text-gray-300 text-base font-semibold">About us</div>
            <div className="text-gray-300 text-base font-semibold">Consumers agrrement</div>
            <div className="self-stretch justify-center items-center gap-5 inline-flex">
                <Instagram className="w-8 h-8 px-0.5 text-slate-500" />
                <Facebook className="w-8 h-8 px-0.5 text-slate-500" />
                <Instagram className="w-8 h-8 px-0.5 text-slate-500" />
                <Instagram className="w-8 h-8 px-0.5 text-slate-500" />
            </div>
        </div>
    </div>
}