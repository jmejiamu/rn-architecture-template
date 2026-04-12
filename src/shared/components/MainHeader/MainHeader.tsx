import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MainHeaderProps {
  icon?: React.ReactNode;
  title?: string;
  onPressIcon?: () => void;
}

const MainHeader = (props: MainHeaderProps) => {
  const { icon, title, onPressIcon } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressIcon} disabled={!icon}>
        {icon}
      </TouchableOpacity>
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
