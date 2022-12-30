import TransactionsHistory from "./pages/transactionsHistory/TransactionsHistory";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signUp/SignUp";
import AddTransaction from "./pages/addTransaction/AddTransaction";
import Categories from "./pages/categories/Categories";
import Home from "./pages/home/Home";
import ChangeProfile from "./pages/changeProfile/ChangeProfile";
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import AuthLayout from "./components/layouts/authLayout/AuthLayout";


const router = createBrowserRouter(
    createRoutesFromElements (
        <>
            <Route path="sign-in" element={<SignUp/>}/>
            <Route path="login" element={<LogIn/>}/>
            <Route path="/" element={<AuthLayout/>}>
                <Route index element={<Home/>}/>
                <Route path={"/transactions-history"} element={<TransactionsHistory/>}/>
                <Route path={"/change-profile"} element={<ChangeProfile/>}/>
                <Route path={"/add-transaction"} element={<AddTransaction/>}/>
                <Route path={"/categories"} element={<Categories/>}/>
                <Route path="sign-in" element={<SignUp/>}/>
            </Route>
        </>
    )
)

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
