import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  ImageBackground,
  View,
  Platform,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import { BaseTouch, BaseView, TextImage } from "../../atoms";
import * as ImagePicker from "expo-image-picker";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import ViewShot from "react-native-view-shot";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

export function ImageUpload() {
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);
  const viewShotRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHasPermission(status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setOpen(true);
    }
  };

  async function captureViewShot() {
    const ImageURI = await viewShotRef.current.capture();
    MediaLibrary.createAssetAsync(ImageURI);
    setOpen(false);
  }

  const coordinate = "-15.202102, 16.828151";
  const city = "Entre Rios";
  const data = "17/06/2021";

  return (
    <BaseView mt={2}>
      <BaseTouch onPress={pickImage}>
        <AntDesign name="upload" size={24} color="black" />
      </BaseTouch>

      {image && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <BaseView fullHeight fullWidth align={"center"} justify={"center"}>
            <ViewShot
              ref={viewShotRef}
              style={{
                width: "80%",
                height: "80%",

                borderRadius: 20,
              }}
              options={{ format: "jpg", quality: 0.9 }}
            >
              <ImageBackground
                source={{ uri: image }}
                style={{ resizeMode: "cover", width: "100%", height: "100%" }}
              >
                <BaseView mt={500} ml={8}>
                  <TextImage>{coordinate}</TextImage>
                  <TextImage>{city}</TextImage>
                  <TextImage>{data}</TextImage>
                </BaseView>
              </ImageBackground>
            </ViewShot>
            <View style={{ margin: 10, flexDirection: "row" }}>
              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={() => setOpen(false)}
              >
                <FontAwesome name="window-close" size={50} color="#FF0000" />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ margin: 10 }}
                onPress={captureViewShot}
              >
                <FontAwesome name="upload" size={50} color="#121212" />
              </TouchableOpacity>
            </View>
          </BaseView>
        </Modal>
      )}
    </BaseView>
  );
}
