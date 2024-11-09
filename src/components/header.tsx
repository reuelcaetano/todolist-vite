import { Rocket } from '@phosphor-icons/react'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Rocket size={32} />
      <h1>to<span>do</span></h1>
    </header>
  )
}