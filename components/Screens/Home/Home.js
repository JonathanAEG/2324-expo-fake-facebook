import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import ToolBar from "./ToolBar";
import MainSeparator from "../../MainSeparator";

const View = styled.View`

    align-items: center;
    height: 500px;
`
export default Home=()=>{

    return(

        <View>
            <ToolBar/>
            <MainSeparator/>
        </View>
    )
}