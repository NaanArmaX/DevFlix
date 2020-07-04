import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import * as ScreenOrientation from "expo-screen-orientation";

import videos from "../../database/videos.json";
import videos1 from "../../database/videos1.json";
import videos2 from "../../database/videos2.json";

import Header from "../../components/Header";
import Videos from "../../components/Videos";
import Poster from "../../components/Poster";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #333333;
`;

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}
function Home() {
  changeScreenOrientation();
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster
          url={"http://i3.ytimg.com/vi/XcU9GEUZTQA/maxresdefault.jpg"}
          title={
            "Iniciando No React Native"
          }
          tags={["React Native", "Expo"]}
          content={<Header />}
        ></Poster>

        <Videos label="Lógica de programação" videos={videos} />
        <Videos label="Laravel" videos={videos1} />
        <Videos label="INSUPORTÁVEL" videos={videos2} />
      </Container>
    </>
  );
}

export default Home;
