import { AdPoint } from "@/components/AdPoint";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PageContent } from "@/components/PageContent";
import { Promo } from "@/components/Promo";
import { NewsItem } from "@/components/news/NewsItem";
import PromoImage from "@/assets/09092315-London.jpg";
import NewsImage from "@/assets/news1.jpg";

export const MainPage = () => {
    return <>
        <Nav />
        <Promo img={PromoImage} text={"Your English addventure begins here"} />
        <PageContent>
            <h1>Why to choose us</h1>
            <div className="w-full py-4 justify-between items-start md:flex md:flex-wrap gap-3 grid grid-cols-2">
                <AdPoint
                    img={""}
                    title={"Interactive learning"}
                />
                <AdPoint
                    img={""}
                    title={"Interactive learning"}
                />
                <AdPoint
                    img={""}
                    title={"Interactive learning"}
                />
                <AdPoint
                    img={""}
                    title={"Interactive learning"}
                />
            </div>
            <h1>Latest News</h1>
            <div className="flex items-start justify-center flex-wrap gap-4 relative flex-1 grow">
                <NewsItem
                    title={"Opened a registration for online courses"}
                    image={NewsImage}
                    date={new Date(2024, 1, 11)}
                />
                <NewsItem
                    title={"Opened a registration for online courses"}
                    image={NewsImage}
                    date={new Date(2024, 1, 11)}
                />
                <NewsItem
                    title={"Opened a registration for online courses"}
                    image={NewsImage}
                    date={new Date(2024, 1, 11)}
                />
            </div>
        </PageContent>
        <Footer />
    </>
}