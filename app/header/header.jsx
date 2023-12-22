import Link from "next/link";
import variables from '../variables.module.scss'

export default function Header() {
  const skillsList = [
    "HTML",
    "CSS",
    "SASS",
    "Javascript",
    "Next JS",
    "TailwindCSS",
    "Bootstrap",
    "Git",
    "VS Code"
  ]
  return (
    <>
      <nav className={variables.navbar}>
        <Link href={`https://github.com/RidloGhifary`} target="_blank"
          className={variables.link}>Github</Link>
        <Link href={`https://www.linkedin.com/in/ridlo-ghifary/`} target="_blank"
          className={variables.link}>LinkedIn</Link>
        <Link href={`https://www.instagram.com/rdllghifary_`} target="_blank"
          className={variables.link}>Instagram</Link>
      </nav>

      <header className={variables.header}>
        <div className={`${variables.heading}`}>
          <h1>Hey There</h1>
          <h1>I`m Ridlo</h1>
        </div>
        <div className={variables.headerContainer}>
          <article className={variables.sayHi}>
            <p className={variables.desc}>This portfolio is my testament, a showcase of my blossoming skills and the fruits of my tireless learning. It&apos;s an invitation to embark on a collaborative journey, where together we can transform digital dreams into tangible realities. So, come, explore, and let&apos;s craft something extraordinary, line by line, pixel by pixel.</p>
          </article>
          <article className={variables.skills}>
            {skillsList?.map((skill, index) => <p key={index} className={variables.skillsList}>#{skill}</p>)}
          </article>
        </div>
      </header>
    </>
  )
}