import { useQuery } from "react-query";
import CarouselComponent from "../components/Carousel";
import CompanyDiv from "../components/CompanyDiv";
import { BASE_URL } from "../store/config";
import { Button } from "flowbite-react";

interface Category {
  id: number;
  name: string;
}

interface Company {
  id: number;
  name: string;
  image: string;
  soon: number;
}

interface Offer {
  id: number;
  product: number;
  image: string;
  company: string;
}

function Home() {
  const { isLoading, error, data } = useQuery("home", () =>
    fetch(`${BASE_URL}`).then((res) => res.json())
  );

  const categories: Category[] = data?.categories ?? [];
  const companies: Company[] = data?.companies ?? [];
  const offers: Offer[] = data?.offers ?? [];

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred: {(error as Error).message}</p>;

  return (
    <>
      <CarouselComponent offers={offers} />
      <main>
        <div className="w-full overflow-x-scroll grid place-items-center">
          <div className="categories w-full flex items-center gap-2 md:gap-5 px-2 md:px-5 my-3 justify-center">
            {categories.map((category: Category) => (
              <Button
                href={`/category/${category.name}`}
                key={category.id}
                className="bg-primary text-nowrap shadow-md"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="companies my-6 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5 px-2 md:px-5 place-items-center">
          {companies.map((company: Company) => (
            <CompanyDiv key={company.id} {...company} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
