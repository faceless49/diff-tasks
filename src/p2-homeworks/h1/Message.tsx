import React from 'react';
import s from './Message.module.scss';

type MessagePropsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: MessagePropsType) {
  return (
    <div className={s.message}>
      <img src={props.avatar} alt="" className={s.avatar}/>
      <div className={s.dialog_wrapper}>
        <h2 className={s.title}>{props.name}</h2>
        <div className={s.text}>{props.message}</div>
        <time className={s.time}>{props.time}</time>
      </div>
    </div>
  );
}

export default Message;
