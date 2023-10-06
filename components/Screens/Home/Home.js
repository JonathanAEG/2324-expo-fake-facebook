import React from "react";
import { Text, ScrollView } from "react-native";
import styled from "styled-components";
import ToolBar from "./ToolBar";
import MainSeparator from "../../MainSeparator";
import Users from "../../Users";
import Story from "./Story";
import Post from "./Post";

const View = styled.View`

    align-items: center;
    height: 500px;
`
export default Home=()=>{

    return(

        <ScrollView>
            <ToolBar/>
            <MainSeparator/>
            <Users/>
            <MainSeparator/>
            <Story/>
            <MainSeparator/>
            <Post/>
        </ScrollView>
    )
}