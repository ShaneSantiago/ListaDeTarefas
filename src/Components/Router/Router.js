import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateTask from "../Pages/CreateTask/CreateTask"
import HomePage from "../Pages/Home/Home"
import Header from "../Pages/Header/Header"
import TaskPage from "../Pages/Task/Task"

const Router = () => {
    return(
        <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={<HomePage />}>
            </Route>

            <Route exact path="/task/:id" element={<TaskPage />}>
            </Route>

            <Route exact path="/newtask" element={<CreateTask />}>
            </Route>

        </Routes>
        </BrowserRouter>
    )
}
export default Router