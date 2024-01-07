import React from "react";
import { MutableRefObject, useEffect, useState } from "react";

type Props = {
  valueRef: MutableRefObject<boolean>;
};

export const Button = ({ valueRef }: Props) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <a
        style={{
          border: "none",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: checked ? "white" : "gray",
        }}
        onClick={() => {
          if (valueRef.current !== null) valueRef.current = !checked;
          setChecked(!checked);
        }}
      ></a>
    </>
  );
};
