import React from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const Container = styled.View`
  padding: 20px 0;
`;
const Label = styled.Text`
  color: #e9ecef;
  font-size: 16px;
  margin: 0 0 5px 10px;
  fontWeight: bold;
`;
const VideoScroll = styled.ScrollView`
  padding-left: 10px;
`;
const VideoCard = styled.View`
  padding: 4px;
`;
const VideoPoster = styled.Image`
  width: ${(Dimensions.get("window").width * 75) / 100}px;
  height: 150px;
  border-radius: 3px;
`;
const VideoButton = styled.TouchableOpacity``;

function Videos({ label, videos }) {
  const navigation = useNavigation();
  return (
    <Container>
      <Label>{label}</Label>
      <VideoScroll horizontal>
        {videos.map((video) => {
          return (
            <VideoCard key={String(video.id)}>
              <VideoButton
                onPress={() => {
                  navigation.navigate("Player", {
                    videoId: video.id,
                  });
                }}
              >
                <VideoPoster
                  source={{
                    uri: video.thumb,
                  }}
                />
              </VideoButton>
            </VideoCard>
          );
        })}
      </VideoScroll>
    </Container>
  );
}

export default Videos;
