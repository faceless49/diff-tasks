import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-regular-svg-icons'

function HW6() {
  const [value, setValue] = useState<string>('')

  const save = () => {
    saveState<string>('editable-span-value', value)
  }
  const restore = () => {
    setValue(restoreState('editable-span-value', value))
  }

  return (
    <section className={s.homework_task6}>
      <h2 className={s.title}>SuperEditableSpan with localStorage</h2>
      <div className={s.span_wrapper}>


        <SuperEditableSpan
          value={value}
          onChangeText={setValue}
          spanProps={{
            children: value
              ? undefined
              : 'Enter text'
          }}
        />
      </div>
      <div className={s.button_wrapper}>
        <SuperButton onClick={save}>Save</SuperButton>
        <SuperButton onClick={restore}>Restore</SuperButton>
      </div>
    </section>
  )
}

export default HW6
