import variables from '../variables.module.scss'
import gymSyncBg from '/public/gymsync.png'
import carRentalBg from '/public/carrental.png'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react/dist/ssr'

export default function Project() {
  return (
    <section className={variables.projectSection}>
      <div className={variables.projectTitle}>
        <h1>Project</h1>
        <h1>Project</h1>
      </div>

      <div className={variables.listProjects}>
        <div className={variables.project}>
          <div className={variables.imageBox}>
            <Image src={gymSyncBg} alt="gymsync" width={500}
              height={500} placeholder="blur" className={variables.image} />
          </div>
          <div className={variables.projectDesc}>
            <h1>GymSync</h1>
            <p>GymSync is a fitness-oriented term that could be associated with activities related to synchronizing or coordinating workouts, exercise routines, or fitness tracking. It might involve the integration of technology, apps, or devices to streamline and optimize fitness experiences. </p>
            <div className={variables.linkProject}>
              <Link href='https://gymsync.vercel.app/' target='_blank' className={variables.projectLink}>
                <ArrowSquareOut size={28} color="#cfd0d5" weight="bold" />
                <span>Demo</span>
              </Link>
              <Link href='https://gymsync.vercel.app/' target='_blank' className={variables.projectLink}>
                <GithubLogo size={28} color="#cfd0d5" weight="fill" />
                <span>Code</span>
              </Link>
            </div>
          </div>
        </div>
        <div className={variables.project}>
          <div className={variables.imageBox}>
            <Image src={carRentalBg} alt="carRentalBg" width={500}
              height={500} placeholder="blur" className={variables.image} />
          </div>
          <div className={variables.projectDesc}>
            <h1>Car Rental</h1>
            <p>GymSync is a fitness-oriented term that could be associated with activities related to synchronizing or coordinating workouts, exercise routines, or fitness tracking. It might involve the integration of technology, apps, or devices to streamline and optimize fitness experiences. </p>
            <div className={variables.linkProject}>
              <Link href='https://car-rental-fawn-iota.vercel.app/' target='_blank' className={variables.projectLink}>
                <ArrowSquareOut size={28} color="#cfd0d5" weight="bold" />
                <span>Demo</span>
              </Link>
              <Link href='https://github.com/RidloGhifary/car-rental' target='_blank' className={variables.projectLink}>
                <GithubLogo size={28} color="#cfd0d5" weight="fill" />
                <span>Code</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}