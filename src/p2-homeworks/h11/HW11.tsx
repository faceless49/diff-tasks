import React, { ChangeEvent, useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue1(Number(e.currentTarget.value));
  };

  return (
    <div>
      <hr />
      homeworks 11
      {/*should work (должно работать)*/}
      <div>
        <span>{value1}</span>
        <SuperRange value={value1} onChange={onChangeHandler} />
        <SuperRange onChange={onChangeHandler} value={value1} />
      </div>
      <div>
        <span>{value1}</span>
        <div>
          <SuperDoubleRange
            // сделать так чтоб value1 и value2 изменялось
            onChange={({ min, max }: { min: number; max: number }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
            max={100}
            min={0}
          />
        </div>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr />
    </div>
  );
}

export default HW11;
