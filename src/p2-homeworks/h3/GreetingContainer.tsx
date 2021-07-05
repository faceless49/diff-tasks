import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
  users: Array<UserType>
  addUserCallback: (newName: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('')

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const trimName = e.currentTarget.value.trim()

    if (trimName) {
      setName(trimName)
      error && setError('')
    } else {
      name && setName('')
      setError('name is require')
    }
  }


  const addUser = () => {
    addUserCallback(name)
    alert(`Hello  ${name}!`)
    setName('')
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && name) {
      addUser()
      setName('')
    }
  }

  const totalUsers = users.length

  return (

    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
      onKeyPressHandler={onKeyPressHandler}
    />

  )
}

export default GreetingContainer
