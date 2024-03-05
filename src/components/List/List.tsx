import React, { FunctionComponent } from "react";
import { Typography } from "@mui/material";

// redux
import { useAppSelector } from "../../redux/reducers.hooks";

// components
import { ItemList } from "../ItemList/ItemList";

// styles
import styles from "./List.module.css";

export const List: FunctionComponent = () => {
  const { showTasks } = useAppSelector((state) => state.tasks);
  return (
    <div className={styles.container}>
      {showTasks.length > 0 ? (
        showTasks.map((task) => (
          <ItemList key={`task-${task.id}`} option={task} />
        ))
      ) : (
        <Typography color={"InfoText"} fontSize={20} textAlign={"center"}>
          Unfortunately, you haven't added any tasks yet
        </Typography>
      )}
    </div>
  );
};
