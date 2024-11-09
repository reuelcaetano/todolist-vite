import { Check, Trash } from '@phosphor-icons/react';
import styles from './task.module.css'

export interface TaskProps {
  checked: boolean;
  content: string;
  onDeleteTask: (task: string) => void
}

export function Task({ checked, content, onDeleteTask }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(content)
  }
  
  const checkboxCheckedClassname = checked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassname = checked
    ? styles['paragraph-checked']
    : ''

  return (
    <div className={styles.task}>
      <div>
        <input type="checkbox" defaultChecked={checked}></input>
        <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
          { checked && <Check /> }
        </span>
        <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
          {content}
        </p>
      </div>
      <button className={styles.deleteBtn} onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  )
}