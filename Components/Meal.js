import { View, Text, Image } from "react-native";
import React from "react";

export default function Meal({ meal }) {
  const { strMeal, idMeal, strMealThumb } = meal;
  return (
    <View style={{ marginBottom: 20 }}>
      <Image
        source={{ uri: strMealThumb }}
        style={{ width: 200, height: 200 }}
      />
      <Text>
        {idMeal} - {strMeal}
      </Text>
    </View>
  );
}
