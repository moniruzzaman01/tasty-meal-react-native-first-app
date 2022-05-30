import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Meal from "./Meal";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=A`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  return (
    <ScrollView>
      <Text style={styles.mealContainer}>Meals found - {meals.length} </Text>
      {meals.map((meal, key) => (
        <Meal key={key} meal={meal} />
      ))}
    </ScrollView>
  );
};

export default Meals;

const styles = StyleSheet.create({
  mealContainer: {
    fontSize: 20,
    color: "lime",
    marginBottom: 20,
  },
});
