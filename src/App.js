import { MainSection } from "./components/MainSection";
import { createStore } from "redux";
import { Provider } from "react-redux";
import userReducer from "./components/reducers/reducers";
import './app.scss'

function App() {

  const store = createStore(userReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return (
    <div className="App">
      <Provider store={store}>
        <MainSection />
      </Provider>
    </div>
  );
}

export default App;
