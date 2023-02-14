import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import styled from "styled-components";

const Error = () => {
    return (
        <Wrapper>
            <div className="container">
                <h2>Oops..</h2>
                <h3>url not found</h3>
                <NavLink to="/">
                    <Button>
                        Home
                    </Button>
                </NavLink>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
text-align: center;
    margin-top: 50px;
    h2{
        padding-bottom: 50px;
    }
    h3{
        padding-bottom: 40px;
    }

`;
export default Error;