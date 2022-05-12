const reducerFunc = (state, action) => {
    switch (action.type) {
        case "SET_GOAL":
            return { ...state, goal: action.payload.value }
        case "SET_FINAL_GOAL":
            return { ...state, goalFinal: action.payload.value.goal, todoCompleted: action.payload.value.todoCompleted }
        case "SET_TODO_COMPLETED":
            localStorage.setItem(
                "goal",
                JSON.stringify({ ...JSON.parse(localStorage.getItem("goal")), todoCompleted: !state.todoCompleted })
            );
            return { ...state, todoCompleted: !state.todoCompleted }
        case "SET_EDIT":
            return { ...state, edit: action.payload.value }
        case "CLEAR_GOAL":
            localStorage.removeItem("goal");
            return { ...state, goal: "", goalFinal: "", todoCompleted: false, edit: false }
        default:
            return state
    }
}

export { reducerFunc }