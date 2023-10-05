import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import ToolBar from "./ToolBar";
import MainSeparator from "../../MainSeparator";
import Users from "../../Users";
import Story from "./Story";

const View = styled.View`

    align-items: center;
    height: 500px;
`
export default Home=()=>{

    return(

        <View>
            <ToolBar/>
            <MainSeparator/>
            <Users/>
            <MainSeparator/>
            <Story/>
            <MainSeparator/>

        </View>
    )
}