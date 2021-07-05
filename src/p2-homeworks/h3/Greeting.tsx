import React, {KeyboardEvent} from 'react';
import s from './Greeting.module.scss'

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void // need to fix any
  error: string // need to fix any
  totalUsers: number // need to fix any
  onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : s.form_input      // need to fix with (?:)

  return (
    <div className={s.form}>
      <input value={name}
             onChange={setNameCallback}
             className={inputClass}
             onKeyPress={onKeyPressHandler}
             onBlur={setNameCallback}
      />
      <span className={s.error}>{error}</span>
      <button className={s.btn} onClick={addUser} disabled={!name}>add</button>
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
