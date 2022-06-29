import store from "app/store";
import Header from "components/Header";
import CartFeature from "features/Cart";
import CounterFeature from "features/Counter";
import DetailPage from "features/Product/pages/DetailPage";
import ListPage from "features/Product/pages/ListPage";
import { SnackbarProvider } from "notistack";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClockFeature from "./features/Clock/index";
import NotFound from "./features/NotFound";
import TodoFeature from "./features/Todo/pages/index";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <SnackbarProvider
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="clock/*" element={<ClockFeature />} />
          <Route path="todo" element={<TodoFeature />} />
          <Route path="counter" element={<CounterFeature />} />
          <Route path="products" element={<ListPage />} />
          <Route path="products/:productId" element={<DetailPage />}>
            <Route path="description" element={<div>description</div>} />
            <Route path="additional" element={<div>additional</div>} />
            <Route path="reviews" element={<div>reviews</div>} />
          </Route>
          <Route path="cart" element={<CartFeature />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  </Provider>
);
