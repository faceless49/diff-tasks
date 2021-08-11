import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.scss'

function Clock() {
  const [timerId, setTimerId] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)


  const stop = () => {
    clearInterval(timerId)
  }
  const start = () => {
    stop()
    const id: number = window.setInterval(() => {
      console.log('Clock tick')
      setDate(new Date())
    }, 1000)
    setTimerId(id)
  }

  const onMouseEnter = () => {
    setShow(!show)
  }
  const onMouseLeave = () => {
    setShow(false)
  }

  const stringTime = date.toLocaleTimeString() // fix with date
  const stringDate = date.toLocaleDateString() // fix with date

  return (
    <div className={s.clock_wrap}>
      <div className={s.string_time}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {stringTime}
      </div>

      {show && (
        <div className={s.string_date}>
          {stringDate}
        </div>
      )}
      <div className={s.btn_wrapper}>
        <SuperButton onClick={start}>start</SuperButton>
        <SuperButton onClick={stop}>stop</SuperButton>
      </div>
    </div>
  )
}

export default Clock
