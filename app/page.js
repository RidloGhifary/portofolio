import Header from './header/header'
import variables from './variables.module.scss'

export default function Home() {
  return (
    <div className={variables.container}>
      <Header />
    </div>
  )
}
