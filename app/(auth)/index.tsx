import { MainButton } from "@/src/shared/components";
import { login } from "@/src/store/features/auth";
import { AppDispatch } from "@/src/store/store";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = React.useState(false);
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(login());
      setLoading(false);
    }, 1000);
  };

  const goToRegister = () => {
    router.replace("/register");
  };
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        React Native Architecture Template
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
        Login
      </Text>

      <MainButton variant="outline" title="Register" onPress={goToRegister} />
      <View style={{ height: 10 }} />
      <MainButton loading={loading} title="Login" onPress={handleLogin} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
