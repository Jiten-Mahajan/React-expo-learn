import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const heroImage =
  "https://images.pexels.com/photos/14114785/pexels-photo-14114785.jpeg?auto=compress&cs=tinysrgb&w=1400";

const stats = [
  { label: "Range", value: "620 km" },
  { label: "0-100", value: "3.2s" },
  { label: "Charge", value: "18 min" },
];

const features = [
  {
    title: "Dual motor control",
    body: "Instant torque split keeps the drive settled through city traffic and open highway pulls.",
  },
  {
    title: "Quiet cabin",
    body: "Acoustic glass, active noise control, and soft-touch trim make every seat feel first class.",
  },
  {
    title: "Smart cockpit",
    body: "A clean digital interface puts navigation, drive modes, and media within easy reach.",
  },
];

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-neutral-950" edges={["top"]}>
      <StatusBar style="light" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 40 }}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <View className="gap-8 px-5 pt-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-black uppercase text-white">
              Apex GT
            </Text>
            <View className="flex-row gap-4">
              <Text className="text-sm font-semibold text-neutral-300">
                Specs
              </Text>
              <Text className="text-sm font-semibold text-neutral-300">
                Design
              </Text>
            </View>
          </View>

          <View className="gap-5">
            <View className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
              <Image
                accessibilityLabel="Black sports car parked on a road at sunset"
                contentFit="cover"
                source={heroImage}
                style={{ height: 310, width: "100%" }}
                transition={500}
              />
            </View>

            <View className="gap-4">
              <Text className="text-xs font-bold uppercase tracking-widest text-amber-300">
                Electric performance coupe
              </Text>
              <Text className="text-5xl font-black leading-tight text-white">
                Built for fast roads and quiet mornings.
              </Text>
              <Text className="text-base leading-7 text-neutral-300">
                Apex GT blends long-range electric power with a calm, premium
                cabin made for daily drives, weekend escapes, and every stretch
                in between.
              </Text>
            </View>

            <View className="flex-row gap-3">
              <Pressable
                accessibilityRole="button"
                className="flex-1 rounded-lg bg-amber-300 px-5 py-4"
              >
                <Text className="text-center text-base font-bold text-neutral-950">
                  Book test drive
                </Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                className="flex-1 rounded-lg border border-neutral-700 px-5 py-4"
              >
                <Text className="text-center text-base font-bold text-white">
                  View specs
                </Text>
              </Pressable>
            </View>
          </View>

          <View className="flex-row gap-3">
            {stats.map((item) => (
              <View
                className="flex-1 rounded-lg border border-neutral-800 bg-neutral-900 p-4"
                key={item.label}
              >
                <Text className="text-2xl font-black text-white">
                  {item.value}
                </Text>
                <Text className="mt-1 text-xs font-semibold uppercase text-neutral-500">
                  {item.label}
                </Text>
              </View>
            ))}
          </View>

          <View className="gap-3">
            <Text className="text-2xl font-black text-white">
              Why drivers care
            </Text>
            <View className="gap-3">
              {features.map((feature) => (
                <View
                  className="rounded-lg border border-neutral-800 bg-neutral-900 p-5"
                  key={feature.title}
                >
                  <Text className="text-lg font-bold text-white">
                    {feature.title}
                  </Text>
                  <Text className="mt-2 text-sm leading-6 text-neutral-400">
                    {feature.body}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View className="gap-2 border-t border-neutral-800 pt-6">
            <Text className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Launch edition
            </Text>
            <Text className="text-base leading-7 text-neutral-300">
              Reserve the first production batch with priority color selection,
              home charger installation support, and five years of connected
              services.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
