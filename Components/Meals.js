import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
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
      <Text>Hello I am from Meals. I found - {meals.length} </Text>
      {meals.map((meal, key) => (
        <Meal key={key} meal={meal} />
      ))}
    </ScrollView>
  );
};

export default Meals;
