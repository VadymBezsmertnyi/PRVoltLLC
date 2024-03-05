import React, { FunctionComponent, useMemo, useState } from "react";
import { Button, Typography } from "@mui/material";

// redux
import { useAppDispatch } from "../../redux/reducers.hooks";
import { addTask } from "../../redux/reducers/tasks/tasksReducer";

// components
import { Input } from "../Input/Input";

// styles
import styles from "./Header.module.css";

export const Header: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const isCurrent = useMemo(
    () => value.length >= 5 && value.length <= 40,
    [value]
  );

  const onSubmit = () => {
    if (isCurrent) {
      dispatch(addTask({ title: value }));
      setValue("");
    }
  };

  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant="h4">
        Todo List
      </Typography>
      <div className={styles.containerInput}>
        <Input value={value} setValue={setValue} />
        <Button disabled={!isCurrent} variant="contained" onClick={onSubmit}>
          Add
        </Button>
      </div>
    </div>
  );
};
