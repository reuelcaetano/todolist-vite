import { PlusCircle } from '@phosphor-icons/react'
import styles from './button.module.css'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={styles.button}
    >
      <div>
        <span>Criar</span>
        <PlusCircle size={16} weight='bold' />
      </div>
    </button>
  )
}