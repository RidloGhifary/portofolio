import Footer from './footer/footer'
import Header from './header/header'
import Project from './project/project'
import variables from './variables.module.scss'

export default function Home() {
  return (
    <div className={variables.container}>
      <Header />
      <Project />
      <Footer />
    </div>
  )
}
