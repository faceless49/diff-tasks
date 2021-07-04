import React from 'react'
import s from './Header.module.scss'
import {NavLink} from 'react-router-dom';
import {PATH} from '../../Routes';


export const Header = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.menu_list}>
        <li className={s.menu_item}>
          <NavLink to={PATH.PRE_JUNIOR} className={s.menu_link} activeClassName={s.menu_activeLink}>Pre Junior</NavLink>
        </li>
        <li className={s.menu_item}>
          <NavLink to={PATH.JUNIOR} className={s.menu_link} activeClassName={s.menu_activeLink}>Junior</NavLink>
        </li>
        <li className={s.menu_item}>
          <NavLink to={PATH.JUNIOR_PLUS} className={s.menu_link} activeClassName={s.menu_activeLink}>Junior+</NavLink>
        </li>
        <li className={s.menuBurgerInFuture}></li>
      </ul>
    </nav>
  )
}
