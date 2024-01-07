import { MutableRefObject, useEffect, useState } from "react";

type Props = {
  ref: MutableRefObject<boolean>;
};

export const Button = ({ ref }: Props) => {
  const [checked, setChecked] = useState<boolean>(false);
  useEffect(() => {
    console.log(checked);
    if (ref !== undefined) ref.current = checked;
  }, [checked]);
  return (
    <>
      <a
        style={{
          border: "none",
          width: "100px",
          height: "100px",
          borderRadius: "50px",
          backgroundColor: checked ? "white" : "red",
        }}
        onClick={() => {
          setChecked(!checked);
        }}
      ></a>
    </>
  );
};
