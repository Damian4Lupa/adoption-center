const initialState = {
    notes: [
      {
        id: 1,
        title: "damian",
        content:
          "Aliquip dolore exercitation quis laboris mollit sunt labore cupidatat. Officia consequat ut Lorem nisi laborum nostrud laborum aute ea aute nisi. Ea qui in irure laborum eu ut sint commodo commodo non."
      },
      {
        id: 2,
        title: "lucas",
        content:
          "Eiusmod aliqua eiusmod ut enim eiusmod ipsum est commodo. Sit deserunt irure ad culpa ex officia qui nulla pariatur. Laboris eu laborum sint ut esse laboris officia aliquip anim occaecat aute amet laboris."
      },
      {
        id: 3,
        title: "bunia",
        content:
          "Commodo consectetur fugiat consectetur minim enim eu Lorem adipisicing commodo mollit magna et."
      }
    ]
  };
  
  const rootReducer = (state = initialState, action) => {
    // console.log(action);
    return state;
  };
  
  export default rootReducer;