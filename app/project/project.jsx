import variables from "../variables.module.scss";
import gymSyncBg from "/public/gymsync.png";
import carRentalBg from "/public/carrental.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react/dist/ssr";

export default function Project() {
  const Projects = [
    {
      title: "GymSync",
      desc: "GymSync is a fitness-oriented term that could be associated with activities related to synchronizing or coordinating workouts, exercise routines, or fitness tracking. It might involve t integration of technology, apps, or devices to streamline a optimize fitness experiences.",
      image: gymSyncBg,
      linkDemo: "https://gymsync.vercel.app/",
      linkCode: "https://github.com/RidloGhifary/gymsync",
    },
    {
      title: "Car Rental",
      desc: "Car Rental is a service-oriented project that focuses on providing an efficient and user-friendly platform for renting vehicles. The system allows users to search, book, and manage car rentals, offering features such as real-time availability, various vehicle options, and secure payment methods.",
      image: carRentalBg,
      linkDemo: "https://car-rental-fawn-iota.vercel.app/",
      linkCode: "https://github.com/RidloGhifary/car-rental",
    },
  ];

  return (
    <section className={variables.projectSection}>
      <div className={variables.projectTitle}>
        <h1>Project</h1>
        <h1>Project</h1>
      </div>

      <div className={variables.listProjects}>
        {Projects?.map((project, index) => (
          <div className={variables.project} key={index}>
            <div className={variables.imageBox}>
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                placeholder="blur"
                className={variables.image}
              />
            </div>
            <div className={variables.projectDesc}>
              <h1>{project.title}</h1>
              <p>{project.desc}</p>
              <div className={variables.linkProject}>
                <Link
                  href={project.linkDemo}
                  target="_blank"
                  className={variables.projectLink}>
                  <ArrowSquareOut size={28} color="#cfd0d5" weight="bold" />
                  <span>Demo</span>
                </Link>
                <Link
                  href={project.linkCode}
                  target="_blank"
                  className={variables.projectLink}>
                  <GithubLogo size={28} color="#cfd0d5" weight="fill" />
                  <span>Code</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
