import { MainButton } from "@/src/shared/components";
import { logout } from "@/src/store/features/auth";
import { AppDispatch } from "@/src/store/store";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleLogout = () => {
    setLoading(true);

    setTimeout(() => {
      dispatch(logout());
      setLoading(false);
    }, 1000);
  };
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Profile
      </Text>

      <MainButton loading={loading} title="Logout" onPress={handleLogout} />
      <View style={{ height: 20 }} />
      <MainButton
        variant="secondary"
        title="Go to Settings"
        onPress={() => router.push("/profile/setting")}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
