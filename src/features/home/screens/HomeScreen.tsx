import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../components/HeaderHome/HeaderHome";

export const HomeScreen = () => {
  const router = useRouter();
  const icon = <Entypo name="help" size={24} color="black" />;
  const handleIconPress = () => {
    router.push("/help");
  };

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <HeaderHome
        title="Welcome to the Home Screen"
        icon={icon}
        onPressIcon={handleIconPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
