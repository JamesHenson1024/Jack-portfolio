import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/javascript.png";
import react from "../../../assets/react.png";
import expressjs from "../../../assets/expressjs.png";
import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import node from "../../../assets/node.png";
import nextjs from "../../../assets/nextjs.png";
import laravel from "../../../assets/laravel.png";
import redux from "../../../assets/redux.png";
import aws from "../../../assets/aws.svg";
import sql from "../../../assets/sql.svg";
import tailwind from "../../../assets/tailwind.png";
import mongoDB from "../../../assets/mongoDB.svg";
import postgres from "../../../assets/postgres.png";
import django from "../../../assets/django.png";
import cicd from "../../../assets/cicd.png";
import solana from "../../../assets/solana.png";
import solidity from "../../../assets/solidity.svg";

import { Link as ScrollLink } from "react-scroll";

const Techs = () => {
  const techs = [
    {
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      src: react,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      src: solana,
      title: "Solana",
      style: "shadow-blue-400",
    },
    {
      src: solidity,
      title: "Solidity",
      style: "shadow-gray-400",
    },
    {
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-cyan-700",
    },
    {
      src: node,
      title: "Node JS",
      style: "shadow-lime-400",
    },

    {
      src: expressjs,
      title: "Express JS",
      style: "shadow-gray-500",
    },
    {
      src: redux,
      title: "Redux",
      style: "shadow-violet-700",
    },
    {
      src: sql,
      title: "SQL",
      style: "shadow-gray-800",
    },
    {
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-emerald-500",
    },
    {
      src: postgres,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      src: laravel,
      title: "Laravel",
      style: "shadow-red-700",
    },
    {
      src: django,
      title: "Django",
      style: "shadow-green-900",
    },
    {
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      src: cicd,
      title: "CI/CD",
      style: "shadow-blue-600",
    },
    {
      src: aws,
      title: "AWS",
      style: "shadow-orange-500",
    },
  ];

  return (
    <section
      name="Technologies"
      className="relative w-full md:h-screen h-unset"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h2 className="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl">
            Technologies
          </h2>
          <p className="py-6">These are the technologies I`ve worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 sm:px-0">
          {techs.map(({ src, title, style }, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img className="w-20 mx-auto py-2 md:py-4" src={src} alt="" />
              <p className="mt-4 md:mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <ScrollLink
        to="Education"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default Techs;
