import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HeaderHomeProps {
  title?: string;
  icon?: React.ReactNode;
  onPressIcon?: () => void;
}

const HeaderHome = (props: HeaderHomeProps) => {
  const { title, icon, onPressIcon } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {!!title && (
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
      )}
      {icon && (
        <TouchableOpacity onPress={onPressIcon}>{icon}</TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({});
