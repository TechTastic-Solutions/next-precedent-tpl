import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { title } from "process";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-4xl px-2 xl:px-4">
        <h1
          className="animate-fade-down bg-gradient-to-br from-black to-stone-700 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{
            animationDelay: "0.3s",
            animationFillMode: "forwards",
            animationDuration: "3s",
          }}
        >
          TechTastic Solutions
        </h1>
        <br />
        <p
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-left font-display text-lg tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-xl md:leading-[1.5rem]"
          style={{
            animationDelay: "3s",
            animationFillMode: "forwards",
            animationDuration: "0.3s",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          labore pariatur quis molestiae fugiat illo, praesentium asperiores
          impedit inventore ipsa. Deleniti atque, itaque delectus saepe eaque
          sed aperiam maiores nulla.
        </p>
      </div>
      <div className="mx-0 mt-12 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-0 md:grid-cols-1 xl:px-1">
        <Card
          key="TTSNextTpl"
          title="TechTastic Solutions Next.js Tpl"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore      pariatur quis molestiae fugiat illo, praesentium asperiores impedit inventore ipsa."
          demo={`asdf Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore pariatur quis molestiae fugiat illo, praesentium asperiores impedit inventore ipsa. Deleniti atque, itaque delectus saepe eaque sed aperiam maiores nulla. asdf Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nobis quis architecto! Quisquam fuga ea corrupti, animi excepturi consequatur suscipit dolorem, repellendus veniam dolore beatae consequuntur nisi quas aperiam modi. asdf Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus consequuntur non quia vero nulla temporibus molestias numquam recusandae. Consectetur ea velit, minus hic quis fuga pariatur aliquid placeat magni eius? asdf Lorem ipsum dolor amet consectetur adipisicing elit. Ipsum hic, accusantium perferendis excepturi doloribus, beatae mollitia sunt nulla quis similique corrupti fugit temporibus deserunt! Reiciendis, voluptatum! asdf`}
          large={true}
        />
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }: tFeatures) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>
    </>
  );
}

type tFeatures = {
  title: string;
  description: string;
  large?: boolean;
  demo?: any;
};

const features: tFeatures[] = [
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    large: true,
  },
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
  },
  {
    title: "One-click Deploy",
    description:
      "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={142}
          height={36}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Built-in Auth + Database",
    description:
      "Precedent comes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
        <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
      </div>
    ),
  },
];
