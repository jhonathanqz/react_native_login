import { Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
};

export function Button({ title }: Props) {
  return (
    <TouchableOpacity className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg mt-5">
      <Text> {title} </Text>
    </TouchableOpacity>
  );
}
