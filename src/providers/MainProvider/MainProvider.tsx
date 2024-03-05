import React, { FunctionComponent, useEffect, useMemo } from "react";

// redux
import { useAppDispatch } from "../../redux/reducers.hooks";
import { getLocalStorageDate } from "../../redux/reducers/tasks/tasksReducer";

type MainProviderProps = {
  children: JSX.Element;
};

export const mainContext = React.createContext({});

export const MainProvider: FunctionComponent<MainProviderProps> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const contextValue = useMemo(() => ({}), []);

  useEffect(() => {
    dispatch(getLocalStorageDate());
  }, []);

  return (
    <mainContext.Provider value={contextValue}>{children}</mainContext.Provider>
  );
};
