import React from "react";
import styled from "styled-components";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Header from "../../Header";

const Container = styled.View`
    flex-direction: row;
    width: 100%;
    height: 235px;
`
const ProfileImageHeaderContainer = styled.View`
    width: 100%;
    height: 235px;
`

const ProfileImageHeaderImage = styled.Image`

    width: 100%;
    height: 200px;
`
const ProfileHeaderIconCircle = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    border-radius: 20px;
    background: #EEEEEE;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 158px;
    left: 88%;
`

const ProfileImageCircle = styled.View`
    width: 150px;
    height: 150px;
    border-radius: 100px;
    background: #FFFFFF;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 90px;
    left: 3%;
    border: 3px solid #EEEEEE;
`

const ProfileImage = styled.Image`

    width: 100%;
    height: 100%;
    border-radius: 100px;
`

const ProfileImageIconCircle = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    border-radius: 20px;
    background: #EEEEEE;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 117px;
    left: 79%;
`

const ProfileNameText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

const ProfileDescription = styled.Text`

    font-size: 12px;
    padding: 5px 0;

`

const Footer = styled.View`
    width: 100%;
    height: 120px;
    padding: 10px;
`

const ProfileMenu = styled.View`
    height: 50px;
    width: 100%;
    padding: 10px;
`

const Button = styled.TouchableOpacity`

    height: 40px;
    width: 50px;
`


export default ProfileHeader=()=>{

    return(
        <>
        <Container>
            <ProfileImageHeaderContainer>

                <ProfileImageHeaderImage source={require('../../../assets/profileImage.jpg')} />
                <ProfileHeaderIconCircle>
                    <MaterialCommunityIcons name="camera" size={25} color="#000000" />
                </ProfileHeaderIconCircle>

                <ProfileImageCircle>
                    <ProfileImage source={require('../../../assets/m-mortimer-min.webp')} />
                    <ProfileImageIconCircle>
                        <MaterialCommunityIcons name="camera" size={20} color="#000000" />
                    </ProfileImageIconCircle>
                </ProfileImageCircle>
            </ProfileImageHeaderContainer>
            <Footer></Footer>
        </Container>
        <Footer>
        <ProfileNameText>Mortimer el Mentor</ProfileNameText>
        <ProfileDescription>Vienvenidos acólitos</ProfileDescription>
        <ProfileMenu></ProfileMenu>
        </Footer>
        </>
        
    )
}
