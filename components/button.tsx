import React from "react";
import { MutableRefObject, useEffect, useState } from "react";

type Props = {
  ref: MutableRefObject<boolean>;
};

export const Button = ({ ref }: Props) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <a
        style={{
          border: "none",
          width: "100px",
          height: "100px",
          borderRadius: "50px",
          backgroundColor: checked ? "white" : "gray",
        }}
        onClick={() => {
          if (ref.current !== null) {
            ref.current = !ref.current;
            setChecked(ref.current);
          }
        }}
      ></a>
    </>
  );
};
