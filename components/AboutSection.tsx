/* eslint-disable react/no-unescaped-entities */
import React from "react"


const skills = [
  { skill: "Ethereum" },
  { skill: "Blockchain" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Solidity" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "NodeJs" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Hardhat" },
  { skill: "Ethers" },
  { skill: "Remix" },
  { skill: "ERC20" },
  { skill: "ERC721" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Aditya and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, a
              <span className="font-bold">{" Smart Contract"}</span> Engineer
              based in Deoghar, India.
            </p>
            <br />
            <p>
            I graduated from KIIT University, Bhubaneswar in 2020 with a bachelor's degree in Information Technology and have been working in the field ever since.
            </p>
            <br />
            <p>
              I have a wide range of passions and hobbies that keep me busy.
              From reading, playing sports, traveling, to building Web3 Dapps,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
              My work aims to manifest the values of ease and meaning, bringing them to life through exceptional creations that exist on the internet.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
