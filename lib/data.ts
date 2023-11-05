import React from "react";
import { CiPlane } from "react-icons/ci";
import { SiSelenium } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import skinetImg from "@/public/skinet.png";
import gameHubImg from "@/public/gameHub.png";
import betterPhotosImg from "@/public/betterPhotos.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Athens, GR",
    description:
      "I graduated after 3 months of studying. After a few months I found a job as a Software Test Engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Test Automation Engineer",
    location: "Athens, GR",
    description:
      "I worked as a sub-contractor Test Automation Engineer in various high profile EU projects.",
    icon: React.createElement(SiSelenium),
    date: "2018 - 2022",
  },

  {
    title: "Software Test Engineer",
    location: "Athens, GR",
    description:
      "I am currently working as a Software Test Engineer in aviation industry projects.",
    icon: React.createElement(CiPlane),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Skinet",
    description: "E-shop created with ASP.Net Core 7 and Angular 16.",
    tags: ["Angular", "ASP.net", "Bootstrap", "SQL Server"],
    imageUrl: skinetImg,
  },
  {
    title: "GameHub",
    description: "Online search engine for games.",
    tags: ["React", "TypeScript", "ChakraUI"],
    imageUrl: gameHubImg,
  },
  {
    title: "Better Photos",
    description: "A css template for an image uploading website.",
    tags: ["HTML", "CSS", "SaSS"],
    imageUrl: betterPhotosImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
