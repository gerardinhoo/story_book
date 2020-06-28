import React from "react";
import Profile from "./Profile"


export default {
  title: "Profile",
  component: Profile
}

export const Default = () => {
  return (
    <Profile />
  )
}


Default.story = {
  name: "Profile"
}



// import React from "react";
// import Title from "./Title";

// export default {
//   title: "Title",
//   component: Title,
// };

// export const Default = () => <Title />;

// Default.story = {
//   name: "default",
// };