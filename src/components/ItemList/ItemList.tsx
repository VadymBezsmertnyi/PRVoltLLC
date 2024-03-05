import React, { FunctionComponent, useMemo, useState } from "react";
import {
  Edit as EditIcon,
  DeleteOutline as DeleteOutlineIcon,
  Check as CheckIcon,
} from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import classNames from "classnames";

// redux
import { useAppDispatch } from "../../redux/reducers.hooks";
import {
  changeTask,
  deleteTask,
} from "../../redux/reducers/tasks/tasksReducer";

// types
import { TaskType } from "../../redux/reducers/tasks/tasksReducer.types";

// components
import { Input } from "../Input/Input";

// styles
import styles from "./ItemList.module.css";

type ItemListProps = {
  option: TaskType;
};

export const ItemList: FunctionComponent<ItemListProps> = ({ option }) => {
  const dispatch = useAppDispatch();
  const [isChange, setIsChange] = useState(false);
  const [value, setValue] = useState("");
  const isCurrent = useMemo(
    () => value.length >= 5 && value.length <= 40,
    [value]
  );

  const onChange = () => {
    setValue(option.title);
    setIsChange(true);
  };

  const onSaveChange = () => {
    dispatch(changeTask({ ...option, title: value }));
    setValue("");
    setIsChange(false);
  };

  const onToggleCompleted = () => {
    dispatch(changeTask({ ...option, isCompleted: !option.isCompleted }));
  };

  const onDelete = () => {
    dispatch(deleteTask(option));
  };

  if (isChange) {
    return (
      <div className={styles.container}>
        <Input value={value} setValue={setValue} />
        <Button
          disabled={!isCurrent}
          variant="outlined"
          size="small"
          color="success"
          onClick={onSaveChange}
        >
          <CheckIcon />
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Typography
        color={option.isCompleted ? "GrayText" : "InfoText"}
        className={classNames(styles.title, {
          [styles.titleCompleted]: option.isCompleted,
        })}
        onClick={onToggleCompleted}
      >
        {option.title}
      </Typography>
      <div className={styles.containerButtons}>
        <Button
          variant="outlined"
          size="small"
          color="warning"
          onClick={onChange}
        >
          <EditIcon />
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="error"
          onClick={onDelete}
        >
          <DeleteOutlineIcon />
        </Button>
      </div>
    </div>
  );
};
