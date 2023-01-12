import React, { useState, useEffect } from "react";
import "./Activities.css";
import { createNewActivity } from "../api/api";

const Activities = (props) => {
  const [name, setActivityName] = useState("");
  const [description, setActivityDescription] = useState("");
  const [stateError, setStateError] = useState("");
  const allActivites = props.activities;
  const { token, setActivities, activities } = props;
  console.log("ssssssss", props);
  return (
    <>
      <h1>All Public Activities</h1>
      {token ? (
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const result = await createNewActivity(name, description, token);
            if (result.error) {
              const errorMessage = "Activity name already exists";
              console.log(errorMessage);
              setStateError(errorMessage);
            } else {
              setActivities([...activities, result]);
            }
          }}
        >
          <h3>Create a New Activity</h3>
          <input
            name="activity name"
            type="text"
            placeholder="Activity Name"
            value={name}
            onChange={(e) => setActivityName(e.target.value)}
          />
          <input
            name="description"
            type="text"
            placeholder="Activity Description"
            value={description}
            onChange={(e) => setActivityDescription(e.target.value)}
          />
          <button type="submit" className="create-new-activity-button">
            Create New Activity
          </button>
          {stateError ? <h3>{stateError}</h3> : ""}
        </form>
      ) : (
        ""
      )}
      ;
      {allActivites.map((activity, index) => {
        return (
          <div className="activity-block" key={index}>
            <div className="single-activity">
              <h2 className="activity-name">{activity.name}</h2>
              <h3 className="activity-description">{activity.description}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Activities;
