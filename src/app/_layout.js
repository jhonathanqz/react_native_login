import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Loading } from "../components/loading";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import "../styles/global.css";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return;
  }
  return (
    <>
      <StatusBar style="auto" />
      {fontsLoaded ? <Slot /> : <Loading />}
    </>
  );
}
