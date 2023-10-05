import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Container = styled.View`

    width: 40px;
    height: 40px;
    position: relative;
`

const ProfileImage = styled.Image`

    width: 40px;
    height: 40px;
    border-radius: 20px;
`
const UserActive = styled.View`
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 15px;
    height: 15px;
    border-radius: 8px;
    background: #18D24B;
    border: 2px solid #FFFFFF;
`

export default Avatar=({source, online})=>{

    return(
        <Container>
            <ProfileImage source ={source}/>
            {online && <UserActive/>}
        </Container>
    )
}