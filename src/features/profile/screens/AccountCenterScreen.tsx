import { MainButton, MainHeader } from "@/src/shared/components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountCenterScreen = () => {
  const router = useRouter();
  const icon = <Ionicons name="chevron-back" size={24} color="black" />;
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <MainHeader
        icon={icon}
        onPressIcon={() => router.back()}
        title="Account Center"
      />
      <Text style={styles.title}>AccountCenterScreen</Text>

      <MainButton title="Need Help?" onPress={() => router.push("/help")} />
    </SafeAreaView>
  );
};

export default AccountCenterScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
});
