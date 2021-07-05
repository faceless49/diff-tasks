import React from 'react'
import s from './Error404.module.scss'


function Error404() {
    return (
        <div className={s.error_page}>
          <h1 className={s.title}>404</h1>
          <h2 className={s.subtitle}>Server Error</h2>
          <h3 className={s.descr}>Go away!</h3>
          <button className={s.btn}>Go Back</button>
        </div>
    )
}

export default Error404
