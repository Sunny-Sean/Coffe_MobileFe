import { Image, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../theme/theme";

function ProfilePic({ name, color, size }) {
  return (
    <View style={styles.ImageContainer}>
      <Image
        style={styles.Image}
        // source={{ uri: "../assets/app_images/avatar.png" }}
        source={require("../assets/app_images/chibi2.jpg")}
      />
    </View>
  );
}

export default ProfilePic;

const styles = StyleSheet.create({
  ImageContainer: {
    width: 36,
    height: 36,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  Image: {
    height: 36,
    width: 36,
  },
});
