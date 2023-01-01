import TransactionsHistory from "./pages/transactionsHistory/TransactionsHistory";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signUp/SignUp";
import AddTransaction from "./pages/addTransaction/AddTransaction";
import Categories from "./pages/categories/Categories";
import Home from "./pages/home/Home";
import ChangeProfile from "./pages/changeProfile/ChangeProfile";
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import ContextWrapper from "./context/wrapper/ContextWrapper";
import {QueryClient, QueryClientProvider} from "react-query";
import {queryClientConfig} from "./config/config";
import DefaultLayout from "./components/layouts/defaultLayout/DefaultLayout";

const queryClient = new QueryClient(queryClientConfig);

const router = createBrowserRouter(
    createRoutesFromElements (
        <>
            <Route path="sign-in" element={<SignUp/>}/>
            <Route path="login" element={<ContextWrapper><LogIn/></ContextWrapper>}/>
            <Route path="/" element={<ContextWrapper><DefaultLayout/></ContextWrapper>}>
                <Route index element={<Home/>}/>
                <Route path={"/transactions-history"} element={<TransactionsHistory/>}/>
                <Route path={"/change-profile"} element={<ChangeProfile/>}/>
                <Route path={"/add-transaction"} element={<AddTransaction/>}/>
                <Route path={"/categories"} element={<Categories/>}/>
            </Route>
        </>
    )
)

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
      </QueryClientProvider>
  );
}

export default App;
