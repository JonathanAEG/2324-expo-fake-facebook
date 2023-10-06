import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import ProfileHeader from "./Profile/ProfileHeader";

const View = styled.View`

    align-items: center;
    height: 500px;
`
export default Profile=()=>{

    return(

        <View>
            <ProfileHeader/>
        </View>
    )
}