import { Button } from "@mui/material"
import React from "react"
import { HeaderContainer } from "./styled"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }
    return(
        <HeaderContainer>
            <Button onClick={goToHomePage}>Inicio</Button>
        </HeaderContainer>
    )
}
export default Header