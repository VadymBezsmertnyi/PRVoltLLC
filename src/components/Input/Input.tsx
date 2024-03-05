import React, { FunctionComponent, useMemo } from "react";
import { TextField } from "@mui/material";

type InputProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  min?: number;
  max?: number;
};

export const Input: FunctionComponent<InputProps> = ({
  value,
  setValue,
  min = 5,
  max = 40,
}) => {
  const amountTitle = useMemo(() => {
    if (value.length === 0) return `New task`;
    if (value.length < min) return `${value.length} out of ${min} minimum`;
    if (value.length >= min && value.length <= max) {
      return `${value.length} characters out of ${max} maximum`;
    }
    return `Too many characters`;
  }, [value]);
  const colorInput: "info" | "success" | "warning" | "error" = useMemo(() => {
    if (value.length === 0) return "info";
    if (value.length < min) return "warning";
    if (value.length >= min && value.length <= max) {
      return "success";
    }
    return "error";
  }, [value]);

  return (
    <TextField
      value={value}
      onChange={(event) => setValue(event.target.value)}
      label={amountTitle}
      variant="outlined"
      size="small"
      color={colorInput}
    />
  );
};
