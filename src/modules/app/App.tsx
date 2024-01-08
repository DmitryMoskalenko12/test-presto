import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailProductPage from "../../pages/DetailProductPage";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import HomePage from "../../pages/HomePage";
import RootLayout from "../root-layout/RootLayout";
import BasketPage from "../../pages/BasketPage";
import OrderingPage from "../../pages/OrderingPage";
import NotFound from "../../pages/NotFoundPage";

const App: React.FC = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound/>,
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/product/:id", element: <DetailProductPage /> },
        { path: "/basket", element: <BasketPage /> },
        { path: "/ordering", element: <OrderingPage /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
};

export default App;
