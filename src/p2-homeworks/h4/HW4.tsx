import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.scss'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
  const [text, setText] = useState<string>('')
  const error = text ? '' : 'error'

  const showAlert = () => {
    if (error) {
      alert('введите текст...')
    } else {
      alert(text) // если нет ошибки показать текст
    }
  }

  const [checked, setChecked] = useState<boolean>(false)
  const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

  return (
    <div>
      <div className={s.column}>
        <h3 className={s.title}>Get over here</h3>
        <SuperInputText
          value={text}
          onChangeText={setText}
          onEnter={showAlert}
          error={error}
          spanClassName={s.testSpanError}
          className={s.superInput}
        />

        <SuperInputText
          type={'password'}
          className={s.blue} // проверьте, рабоет ли смешивание классов
        />
        {/*----------------------------------------------------*/}
        <div className={s.checkbox_wrap}>
          <SuperCheckbox
            checked={checked}
            onChangeChecked={setChecked}
          >
            Forgot {/*// этот текст попадёт в children*/}
          </SuperCheckbox>

          {/*// onChange тоже должен работать*/}
          <SuperCheckbox checked={checked} onChange={testOnChange}/>
        </div>
        <div className={s.btn_wrapper}>
          <SuperButton>
            default
          </SuperButton>

          <SuperButton disabled>
            disabled
          </SuperButton>

          <SuperButton
            red // пропсу с булевым значением не обязательно указывать true
            onClick={showAlert}
          >
            delete {/*// название кнопки попадёт в children*/}
          </SuperButton>
        </div>
      </div>
    </div>
  )
}

export default HW4
