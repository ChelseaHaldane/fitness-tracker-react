import React, { useState, useEffect } from "react";

const baseUrl = "http://fitnesstrac-kr.herokuapp.com/api";

const getRoutines = async (setRoutines) => {
  try {
    const response = await fetch(`${baseUrl}/routines`);
    const data = await response.json();
    // console.log(`getRoutines API Call `, data);
    setRoutines(data);
  } catch (error) {
    console.error(error);
  }
};

const getActivities = async (setActivities) => {
  try {
    const response = await fetch(`${baseUrl}/activities`);
    const data = await response.json();
    setActivities(data);
  } catch (error) {
    console.error(error);
  }
};

export { getRoutines, getActivities };
