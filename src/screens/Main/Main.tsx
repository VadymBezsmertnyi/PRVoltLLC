import React, { FunctionComponent } from "react";

// components
import { Header } from "../../components/Header/Header";
import { InfoLine } from "../../components/InfoLine/InfoLine";
import { List } from "../../components/List/List";

// styles
import styles from "./Main.module.css";

export const Main: FunctionComponent = () => (
  <div className={styles.container}>
    <div className={styles.body}>
      <Header />
      <InfoLine />
      <List />
    </div>
  </div>
);
