import { StyleSheet, View } from "react-native";
import { COLORS, SPACING } from "../theme/theme";
import CustomIcon from "./CustomIcon";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";

function GradientBGIcon({ name, color, size }) {
  return (
    <View style={styles.Container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.LinearGradient}
      >
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
}

export default GradientBGIcon;

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: "hidden",
  },
  LinearGradient: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: "center",
    justifyContent: "center",
  },
});
