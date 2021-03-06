import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import {Loader} from './loader/Loader';
import s from './HW10.module.scss'

function HW10() {
  const dispatch = useDispatch()
  const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

  // *** Зачем мы указываем в 9 строке булевый тип, если и так у нас типизация в сторе


  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => {
      dispatch(loadingAC(false))
    }, 2000)
    console.log('loading...')
  };
  return (
    <div className={s.wrapper}>

      {isLoading
        ? (
          <div><Loader/></div>
        ) : (
          <div className={s.loader}>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  )
}

export default HW10
