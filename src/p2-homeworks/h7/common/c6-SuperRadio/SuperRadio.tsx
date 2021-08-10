import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.scss'
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
  {
    type, name,
    options, value,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)

    onChangeOption && onChangeOption(e.currentTarget.value)
    console.log(e.currentTarget.name)
    // onChange, onChangeOption
  }

  // map options with key
  const mappedOptions: any[] = options ? options.map((o, i) => (
    <label className={s.label} key={name + '-' + i}>
      <input

        className={s.input}
        type={'radio'}
        name={o.name}
        checked={o === value}
        value={o}
        onChange={onChangeCallback}
        // name, checked, value, onChange
        {...restProps}
      />
      {o}
    </label>
  )) : []

  return (
    <div className={s.wrapper}>
      {mappedOptions}
    </div>
  )
}

export default SuperRadio
