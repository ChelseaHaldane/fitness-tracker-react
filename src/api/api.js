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

// const getUserRoutinesWithAuth = async (setRoutines, token) => {
//   var myHeaders = new Headers();
//   myHeaders.append("Authorization", `Bearer ${token}`);

//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   fetch(`${baseUrl}/users/${username}/routines`, requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// };

const getActivities = async (setActivities) => {
  try {
    const response = await fetch(`${baseUrl}/activities`);
    const data = await response.json();
    setActivities(data);
  } catch (error) {
    console.error(error);
  }
};

const createNewRoutine = async (name, goal, isPublic, token) => {
  try {
    const response = await fetch(`${baseUrl}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    });
    const data = await response.json();
    console.log("YYYYYYYYYYYY", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getRoutinesByUser = async (token, username) => {
  try {
    const response = await fetch(`${baseUrl}/users/${username}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(`getUserRoutines API Call `, data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const deleteRoutine = async (token, routineIdToDelete) => {
  try {
    const response = await fetch(`${baseUrl}/routines/${routineIdToDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const reply = await response.json();
    console.log("%%%%%%%%", reply);
    return reply;
  } catch (error) {
    console.error(error);
  }
};

const createNewActivity = async (name, description, token) => {
  try {
    const response = await fetch(`${baseUrl}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const data = await response.json();
    console.log("YYYYYYYYYYYY", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const attachActivityToRoutine = async ({
  activityId,
  count,
  duration,
  routineId,
  token,
}) => {
  try {
    const parseCount = parseInt(count);
    const parseDur = parseInt(duration);
    const parseAct = parseInt(activityId);
    console.log("XXXXXXXXXXX", parseCount);
    const response = await fetch(
      `${baseUrl}/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          activityId: parseAct,
          count: parseCount,
          duration: parseDur,
        }),
      }
    );
    const data = await response.json();
    console.log("YYYYYYYYYYYY", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export {
  getRoutines,
  getActivities,
  createNewRoutine,
  getRoutinesByUser,
  deleteRoutine,
  createNewActivity,
  attachActivityToRoutine,
};
