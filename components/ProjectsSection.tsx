import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Web3 Paypal Dapp",
    description:
      "Send and Request payments with onclick on matic network. (Solidity, React, Hardhat, Web3Api)",
    image: "/gpay.png",
    github: "https://github.com/Aditarya/web3_paypal",
    link: "https://web3-paypal-one.vercel.app/",
  },
  {
    name: "Real-time Crypto Explorer",
    description:
      "A RealTime Cryptocurrency coins listed by market capitalization.",
    image: "/tracker.png",
    github: "https://github.com/Aditarya/crypto_price_tracker",
    link: "https://crypto-price-tracker-iota.vercel.app/",
  },
  {
    name: "UTTER Cabs",
    description:
      "We'll drive you anywhere you need, Call us and book your first ride.",
    image: "/utter.png",
    github: "https://www.google.com/search?q=utter+cabs&sxsrf=APwXEdcz47iv1BKfaT5kV9ZDdUlU5kxtkw%3A1681915203233&ei=Q_0_ZO7nDcXb4-EP1tCX4Ac&ved=0ahUKEwiuleyxlrb-AhXF7TgGHVboBXwQ4dUDCA8&uact=5&oq=utter+cabs&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQsAMQJzIKCAAQRxDWBBCwAzINCAAQRxDWBBDJAxCwAzILCAAQigUQkgMQsAMyCwgAEIoFEJIDELADSgQIQRgAUABYAGCXBGgBcAF4AIABAIgBAJIBAJgBAMgBBcABAQ&sclient=gws-wiz-serp",
    link: "https://uttercabs-pick-drop-service.business.site/",
  },
  {
    name: "Defi Explorer App",
    description:
      "You can safely store your crypto in a highly secure environment.",
    image: "/defi.png",
    github: "https://github.com/Aditarya/Defi-client-app",
    link: "https://defi-onclick.vercel.app/",
  },
  {
    name: "AI Image Generator",
    description:
      "A Full-stack MERN AI Text-2-Image Generation App.(MERN, TailwindCSS, OpenAI, Cloudinary)",
    image: "/onclick.png",
    github: "https://github.com/Aditarya/AI_Image_Generator",
    link: "https://onclick-app.onrender.com/",
  },
  {
    name: "Google Clone",
    description: "GOOGLE Version 2.0 with Tailwind CSS & Next.js! (NodeJs, Responsive, SSR, Pagination).",
    image: "/google.png",
    github: "https://github.com/Aditarya/google-next-app",
    link: "https://aditarya.vercel.app/",
  },
  {
    name: "News App",
    description:
      "Live NEWS APP with Next.js 13 (Typescript, StepZen, Tailwind, Dark Mode, GraphQL, Responsive).",
    image: "/news-app.png",
    github: "https://github.com/Aditarya/next-news-app",
    link: "https://onclicknews-app.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
