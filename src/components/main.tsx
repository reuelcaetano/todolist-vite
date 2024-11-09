import { ClipboardText } from '@phosphor-icons/react'
import styles from './main.module.css'
import { Task, TaskProps } from './task'
import { FormEvent, useState } from 'react'
import { Input } from './input'
import { Button } from './button'

export function Main() {
  const [ tasks, setTasks ] = useState<TaskProps[]>([])

  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, {
      checked: false,
      content: newTask,
      onDeleteTask: deleteTask
    }])

    setNewTask('')
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(
      task => task.content != taskToDelete
    )

    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <>
      <form
        onSubmit={handleCreateNewTask}
        className={styles.inputbar}
      >
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button type="submit" />
      </form>
      <main className={styles.main}>
        <div>
          <header>
            <p className={styles.countLeft}>
              Tarefas criadas <span>{tasks.length}</span>
            </p>
            <p className={styles.countRight}>
              Concluídas <span>{tasks.filter(task => task.checked).length} de {tasks.length}</span>
            </p>
          </header>
          {tasks.length > 0
          ?
          tasks.map(task => {
            return (
              <Task
                key={task.content}
                checked={task.checked}
                content={task.content}
                onDeleteTask={deleteTask}
              />
            )
          })
          :
          <div className={styles.content}>
            <ClipboardText size={60} weight='thin' />
            <div>
              <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
          }
        </div>
      </main>
    </>
  )
}