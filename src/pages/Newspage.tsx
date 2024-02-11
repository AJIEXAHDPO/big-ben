import { Footer } from "@/components/Footer"
import { Nav } from "@/components/Nav"
import { PageContent } from "@/components/PageContent"
import { NewsItem } from "@/components/news/NewsItem"

const news = [
    {
        title: "Opened a registration for online courses",
        date: new Date(2024, 11, 1),
        image: "@/assets/news1.jpg",
    },
    {
        title: "Opened a registration for online courses",
        date: new Date(2024, 11, 1),
        image: "@/assets/news1.jpg",
    },
    {
        title: "Opened a registration for online courses",
        date: new Date(2024, 11, 1),
        image: "@/assets/news1.jpg",
    },
    {
        title: "Opened a registration for online courses",
        date: new Date(2024, 11, 1),
        image: "@/assets/news1.jpg",
    },
    {
        title: "Opened a registration for online courses",
        date: new Date(2024, 11, 1),
        image: "news1.jpg",
    },
]


export const NewsPage = () => {
    const data = news.map((item) => <NewsItem
        title={item.title}
        date={item.date}
        image={item.image} />);
    return <>
        <Nav />
        <PageContent>
            <h1 className="w-full text-center">Our News</h1>
            <div className="flex gap-4 flex-wrap">
                {data}
            </div>
        </PageContent>
        <Footer />
    </>
}