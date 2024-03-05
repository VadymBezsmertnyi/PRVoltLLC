import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";

// redux
import { store } from "./redux/reducers";

// providers
import { MainProvider } from "./providers/MainProvider/MainProvider";

// screens
import { Main } from "./screens/Main/Main";

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <MainProvider>
        <Main />
      </MainProvider>
    </Provider>
  );
};

export default App;
