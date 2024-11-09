import { InputHTMLAttributes } from 'react'
import styles from './input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={styles.input}
      placeholder="Adicione uma nova tarefa"
    />
  )
}