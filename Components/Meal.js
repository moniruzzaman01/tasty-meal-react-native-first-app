import { View, Text, Image } from "react-native";
import React from "react";

export default function Meal({ meal }) {
  const { strMeal, idMeal, strMealThumb } = meal;
  return (
    <View>
      <Text>
        {idMeal} - {strMeal}
      </Text>
      <Image
        source={{ uri: strMealThumb }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
