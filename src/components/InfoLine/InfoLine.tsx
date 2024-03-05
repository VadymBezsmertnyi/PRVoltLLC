import React, { FunctionComponent } from "react";
import { Button, Typography } from "@mui/material";
import {
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineIcon,
  FilterList as FilterListIcon,
} from "@mui/icons-material";

// redux
import { useAppDispatch, useAppSelector } from "../../redux/reducers.hooks";

// styles
import styles from "./InfoLine.module.css";
import { changeTypeShow } from "../../redux/reducers/tasks/tasksReducer";

export const InfoLine: FunctionComponent = () => {
  const { count, countCompleted, typeShow } = useAppSelector(
    (state) => state.tasks
  );
  const dispatch = useAppDispatch();

  const onShowAll = () => {
    dispatch(changeTypeShow("all"));
  };

  const onShowCompleted = () => {
    dispatch(changeTypeShow("completed"));
  };

  const onShowWork = () => {
    dispatch(changeTypeShow("work"));
  };

  if (count === 0) return <></>;
  return (
    <div className={styles.container}>
      <div className={styles.containerButtons}>
        <Button
          disabled={typeShow === "all"}
          variant={"outlined"}
          size="small"
          color="success"
          onClick={onShowAll}
        >
          <FilterListIcon />
        </Button>
        <Button
          disabled={typeShow === "completed"}
          variant={"outlined"}
          size="small"
          color="success"
          onClick={onShowCompleted}
        >
          <CheckBoxIcon />
        </Button>
        <Button
          disabled={typeShow === "work"}
          variant={"outlined"}
          size="small"
          color="success"
          onClick={onShowWork}
        >
          <CheckBoxOutlineIcon />
        </Button>
      </div>
      <Typography
        fontSize={12}
        color={countCompleted === count ? "green" : "gray"}
      >
        Completed {countCompleted} out of {count} task{count > 1 ? "s" : ""}
      </Typography>
    </div>
  );
};
