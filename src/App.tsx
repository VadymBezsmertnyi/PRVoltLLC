import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";

// redux
import { store } from "./redux/reducers";

// screens
import { Main } from "./screens/Main/Main";

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
