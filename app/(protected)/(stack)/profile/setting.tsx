import { MainButton } from "@/src/shared/components";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Setting() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Setting</Text>
      <MainButton title="Go Back" onPress={() => router.back()} />
      <Text>Setting</Text>
      <MainButton title="Modal" onPress={() => router.push("/help")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
