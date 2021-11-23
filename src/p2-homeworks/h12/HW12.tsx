import React, { ChangeEvent } from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";

export type changeThemeType = {
  type: "dark" | "red" | "some";
};
const themes = ["dark", "red", "some"];
function HW12() {
  const theme = useSelector<AppStoreType, { theme: string }>(
    (state) => state.theme
  );
  const dispatch = useDispatch();

  const changeTheme = (theme: string) => ({ type: theme } as const);

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    debugger;
    dispatch(changeTheme(e.currentTarget.value));
  };

  return (
    <div className={s[theme.theme]}>
      <hr />
      <span className={s[theme + "-text"]}>homeworks 12</span>

      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}
      <SuperSelect onChange={onChangeCallback} options={themes} />
      <hr />
    </div>
  );
}
// * TODO: HW on help.
export default HW12;
