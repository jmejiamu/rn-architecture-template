import { MainButton } from "@/src/shared/components";
import { login } from "@/src/store/features/auth";
import { AppDispatch } from "@/src/store/store";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = React.useState(false);
  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(login());
      setLoading(false);
    }, 1000);
  };
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        React Native Architecture Template
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Register
      </Text>

      <MainButton
        loading={loading}
        title="Go to Login"
        onPress={() => router.replace("/")}
        variant="outline"
      />
      <View style={{ height: 10 }} />
      <MainButton loading={loading} title="Register" onPress={handleRegister} />
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
