import React from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function SimpleQR() {
  return <QRCode value="https://www.buymeacoffee.com/ongyishen" size={300} />;
}

const styles = StyleSheet.create({});
