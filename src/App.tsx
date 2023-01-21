import React from 'react';
import StartPage from "./components/StartPage";
import styles from "./styles/App.module.css";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
      <Provider store={store}>
            <div className={styles.App}>
                <StartPage />
            </div>
      </Provider>
  );
}

export default App;
