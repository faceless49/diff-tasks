import React from "react";
import Message from "./Message";
import s from "./HW1.module.scss";
const messageData = {
  avatar:
    "https://i.pinimg.com/originals/32/62/8c/32628c0b689967a8c044a35f8217d838.jpg",
  name: "Some Name",
  message: "some text",
  time: "22:00"
};

function HW1() {
  return (
    <div className={s.hw_wrap}>
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
    </div>
  );
}

export default HW1;
