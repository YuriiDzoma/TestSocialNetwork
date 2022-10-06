import './App.scss';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            {/*<Navbar state={props.state.navigation} arrayFriends={props.state.arrayFriends}/>*/}
            <div className='app-wrapper-content'>
                <Routes>
                    {/*<Route path="/profile/*" element={<Profile/>}/>*/}
                    {/*<Route path="/messages/*" element={<DialogsContainer/>}/>*/}
                    {/*<Route path="/my_training/*" element={<Profile/>}/>*/}
                    {/*<Route path="/profile/*" element={<Profile/>}/>*/}
                    {/*<Route path="/music/*" element={<Profile/>}/>*/}
                    {/*<Route path="/video/*" element={<Profile/>}/>*/}
                    {/*<Route path="/settings/*" element={<Profile/>}/>*/}
                    {/*<Route path="/my_friends/*" element={}/>*/}
                </Routes>
            </div>
        </div>
    );
}


export default App;
