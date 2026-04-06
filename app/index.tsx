import { Redirect } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const Root = () => {
  return <Redirect href="/login" />;
};

export default Root;

const styles = StyleSheet.create({});
