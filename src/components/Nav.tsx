import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

export const Nav = () => {
    return <div className="w-full h-16 bg-white border-b border-zinc-300 flex flex-col justify-center items-center sticky top-0 z-20">
        <div className="px-2.5 justify-between items-center inline-flex w-full max-w-[1140px]">
            <div className="justify-start items-center gap-9 flex">
                <div className="w-9 h-9 bg-zinc-300 rounded-full" />
                <div className="text-black text-xl font-bold">Big Ben</div>
            </div>
            <div className="justify-center items-center gap-7 flex">
                <div className="text-black text-xl font-bold">+7(812)-415-15-17</div>
                <Dialog>
                    <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </div>
}