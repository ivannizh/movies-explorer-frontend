import './App.css';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "../NotFound/NotFound";

function App() {
    return (
        <>

            <BrowserRouter>
                <Header/>
                <Routes>
                    {/*<Route path='/sign-up' element={*/}
                    {/*    <Register handleSubmit={handleSubmitRegister}/>*/}
                    {/*}/>*/}
                    {/*<Route path='/sign-in' element={*/}
                    {/*    <Login email={userEmail} handleSubmitLogin={handleSubmitLogin}/>*/}
                    {/*}/>*/}
                    {/*<Route path='/movies' element={*/}
                    {/*    <Login email={userEmail} handleSubmitLogin={handleSubmitLogin}/>*/}
                    {/*}/>*/}
                    {/*<Route path='/s </NotFound>aved-movies' element={*/}
                    {/*    <Login email={userEmail} handleSubmitLogin={handleSubmitLogin}/>*/}
                    {/*}/>*/}
                    {/*<Route path='/profile' element={*/}
                    {/*    <Login email={userEmail} handleSubmitLogin={handleSubmitLogin}/>*/}
                    {/*}/>*/}
                    <Route path='/' element={
                        <>
                            <Main/>
                            <Footer/>
                        </>
                    }/>

                    <Route path='*' element={
                        <NotFound />
                    }/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
