export const Promo = ({img, text}: {img: string, text: string}) => <div className="group w-full h-96 px-5 pt-5 pb-10 bg-zinc-300 flex-col justify-between items-start inline-flex relative overflow-hidden">
    <img alt={"Promo"} className="w-full h-96 absolute top-0 left-0 object-cover group-hover:scale-105 transition-all duration-1000" src={img} />
    <div className="absolute w-full h-full top-0 left-0 backdrop-brightness-75 transition-all duration-300"></div>
    <div className="self-stretch pb-1 border-b border-neutral-100 justify-center items-center gap-11 inline-flex relative">
        <div className="text-white text-base font-bold">About</div>
        <div className="text-white text-base font-bold">News</div>
        <div className="text-white text-base font-bold">Services</div>
        <div className="text-white text-base font-bold">Our Schools</div>
        <div className="text-white text-base font-bold">Our Teachers</div>
    </div>
    <div className="text-center text-white text-3xl font-bold relative self-stretch">{text}</div>
</div>