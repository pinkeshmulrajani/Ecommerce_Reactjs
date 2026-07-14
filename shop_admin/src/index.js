import React from "react";
import ReactDOM from "react-dom/client";
import AddCategory from "./Category/add_category";
import AddProduct from "./Product/add_product";
import EditCategory from "./Category/edit_category";
import EditProduct from "./Product/edit_product";
import ListCategory from "./Category/list_category";
import ListProduct from "./Product/list_product";
import OrderDetails from "./Order/order_details";
import ListOrder from "./Order/list_order";
import SendEmail from "./User/send_email";
import ListUser from "./User/list_user";
import Login from "./Auth/login";
import ForgotPassword from "./Auth/forgot_password";
import Dashboard from "./Dashboard/dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Dashboard />);
