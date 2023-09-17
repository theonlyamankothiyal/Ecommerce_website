import { RouterProvider } from 'react-router-dom';
import router from './router/config';
import './App.css';
import { Provider } from 'react-redux';
import  {store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router}/>
        </PersistGate>
    </Provider>
  );
}

export default App;
