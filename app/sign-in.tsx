import images from "@/constants/images";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function SignIn() {
  return (
    // 노치 디자인을 고려한 SafeAreaView 사용
    <SafeAreaView className="bg-white h-full">
      {/* 스크롤이 가능한 이미지 컴포넌트 */}
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6 "
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Sub title
          </Text>
          <Text className="text-3xl font-rubik-bold text-center mt-2">
            Main Title
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
