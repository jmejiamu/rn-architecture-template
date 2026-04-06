import { login } from "@/src/store/features/auth";
import { AppDispatch } from "@/src/store/store";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const handleLogin = () => {
    dispatch(login());
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => router.replace("/register")}>
        <Text>Go to Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
