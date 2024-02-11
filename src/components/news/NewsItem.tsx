import * as React from "react"

import useMediaQuery from "@/hooks/use-media-query"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

export const NewsItem = ({ image, date, title }: { image: string, date: Date, title: string }) => {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button className="group flex min-w-[240px] max-w-[800px] h-[240px] items-center gap-[20px] p-[20px] relative flex-1 grow bg-neutral-100 rounded-[8px] overflow-hidden">
                        <img
                            className="absolute h-[100%] top-0 left-0 object-cover w-full group-hover:scale-110 transition-all duration-700"
                            alt="News"
                            src={image} />
                        <div className="absolute w-full h-full top-0 left-0 backdrop-brightness-75 group-hover:backdrop-brightness-50 transition-all duration-300"></div>
                        <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[12px] tracking-[0] leading-[normal]">
                            {date.toLocaleString("en-UK", { day: "numeric", month: "short", year: "numeric" })}
                        </div>
                        <p className="relative flex-1 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[16px] tracking-[0] leading-[normal]">
                            {title}
                        </p>
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden">
                    <img
                        className="h-[100%] object-cover w-full"
                        alt="News"
                        src={image} />
                    <div className="p-10">
                        <DialogHeader>
                            <DialogTitle>{title}</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde consequuntur velit qui, quas similique nihil! Ex at cumque, accusantium reiciendis nulla necessitatibus, perspiciatis quos facere quis blanditiis esse aperiam totam?
                    </div>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <button className="group flex min-w-[240px] h-[240px] items-center gap-[20px] p-[20px] relative flex-1 grow bg-neutral-100 rounded-[8px] overflow-hidden">
                    <img
                        className="absolute h-[100%] top-0 left-0 object-cover w-full group-hover:scale-110 transition-all duration-700"
                        alt="News"
                        src={image} />
                    <div className="absolute w-full h-full top-0 left-0 backdrop-brightness-75 group-hover:backdrop-brightness-50 transition-all duration-300"></div>
                    <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[12px] tracking-[0] leading-[normal]">
                        {date.toLocaleString("en-UK", { day: "numeric", month: "short", year: "numeric" })}
                    </div>
                    <p className="relative flex-1 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[16px] tracking-[0] leading-[normal]">
                        {title}
                    </p>
                </button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
                <div className="overflow-auto mt-4">
                    <img
                        className="h-[240px] object-cover w-full"
                        alt="News"
                        src={image}
                    />
                    <DrawerHeader className="text-left p-10 mt-[-20px] bg-white rounded-xl">
                        <DrawerTitle>{title}</DrawerTitle>
                        <DrawerDescription>
                            Make changes to your profile here. Click save when you're done.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Unde consequuntur velit qui, quas similique nihil!
                            Ex at cumque, accusantium reiciendis nulla necessitatibus,
                            perspiciatis quos facere quis blanditiis esse aperiam totam?
                            Make changes to your profile here. Click save when you're done.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Unde consequuntur velit qui, quas similique nihil!
                            Ex at cumque, accusantium reiciendis nulla necessitatibus,
                            perspiciatis quos facere quis blanditiis esse aperiam totam?
                            Make changes to your profile here. Click save when you're done.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Unde consequuntur velit qui, quas similique nihil!
                            Ex at cumque, accusantium reiciendis nulla necessitatibus,
                            perspiciatis quos facere quis blanditiis esse aperiam totam?
                            Make changes to your profile here. Click save when you're done.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Unde consequuntur velit qui, quas similique nihil!
                            Ex at cumque, accusantium reiciendis nulla necessitatibus,
                            perspiciatis quos facere quis blanditiis esse aperiam totam?
                        </DrawerDescription>
                    </DrawerHeader></div>
            </DrawerContent>
        </Drawer >
    )
}
