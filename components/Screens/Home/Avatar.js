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

export default Avatar=({source})=>{

    return(
        <Container>
            <ProfileImage source ={source}/>
        </Container>
    )
}