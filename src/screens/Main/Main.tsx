import React, { FunctionComponent } from "react";
import { useAppSelector } from "../../redux/reducers.hooks";

export const Main: FunctionComponent = () => {
  const tasks = useAppSelector((state) => state.tasks);
  console.log("tasks", tasks);
  return <div>Main</div>;
};
