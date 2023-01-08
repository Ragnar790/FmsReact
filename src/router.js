import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Loads from './Pages/Loads/Loads';
import Fleets from './Pages/Fleets/Fleets';
import Rates from './Pages/Rates/Rates';
import Orders from './Pages/Orders/Orders';
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "loads",
        element: <Loads />,
      },
      {
        path: "fleets",
        element: <Fleets />,
      },
      {
        path: "rates",
        element: <Rates />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
]);

export default router