import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function MyRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/add-category" element={<AddCategory />} />
				<Route path="/add-product" element={<AddProduct />} />
				<Route path="/category" element={<ListCategory />} />
				<Route path="/edit-category" element={<EditCategory />} />
				<Route path="/edit-product" element={<EditProduct />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/login" element={<Login />} />
				<Route path="/order-detail" element={<OrderDetails />} />
				<Route path="/orders" element={<ListOrder />} />
				<Route path="/product" element={<ListProduct />} />
				<Route path="/send-email" element={<SendEmail />} />
				{/* <Route path="/template" element={<Template />} /> */}
				<Route path="/users" element={<ListUser />} />
			</Routes>
		</BrowserRouter>
	);
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyRouter />);
