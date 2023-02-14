// import React, { useContext } from "react";
// import { AppContext } from "./context/productcontext";
import Hero from "./components/HeroSection";
import {useProductContext} from './context/productcontext';

const About = () => {
    const {myName}= useProductContext();
    /* const {myName}= useContext(AppContext); another way*/ 

    const data = {
        name: "About Banner"
    }
    return (
        <>
        {myName}
        <Hero myData={data} />
        </>

    )
}

export default About;