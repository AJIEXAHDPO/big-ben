export const AdPoint = ({img, title}: {img: string, title: string}) => {
    return <div className="grow shrink basis-0 flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-32 h-32 bg-slate-100 rounded-2xl flex-col justify-center items-center gap-2.5 flex"></div>
        <div className="self-stretch text-center text-black text-base font-semibold">{title}</div>
    </div>
}