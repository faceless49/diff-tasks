import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import React, { useState } from "react";
import { RequestsApi } from "./RequestsAPI";

export const Request = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const onSubmit = async () => {
    try {
      let promise = await RequestsApi.request(checked);
      console.log(promise.data.errorText);
      return setResult(promise.data.errorText);
    } catch (e) {
      console.log({ ...e });
      console.log(e.response ? e.response.data.errorText : e.message);
      return setResult(e.response.data.errorText);
    }
  };

  return (
    <div>
      <SuperCheckbox checked={checked} onChangeChecked={setChecked} />
      <SuperButton onClick={onSubmit}>Post</SuperButton>
      <div>{result}</div>
    </div>
  );
};
