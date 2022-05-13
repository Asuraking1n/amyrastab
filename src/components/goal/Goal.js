import { useEffect, useReducer } from "react";
import { reducerFunc } from "../../reducer/LandingPageReducer";
import { BsFillPenFill } from "react-icons/bs";
import { GiCrossedSwords } from "react-icons/gi";
import "./goal.css";
const Goal = () => {
    const initialState = {
        goalFinal: "",
        goal: "",
        todoCompleted: false,
        edit: false,
    };
    const [state, dispatch] = useReducer(reducerFunc, initialState);

    const inputGoalHandler = () => {
        const finalgoal = JSON.parse(localStorage.getItem("goal"));
        dispatch({ type: "SET_FINAL_GOAL", payload: { value: finalgoal } });
        dispatch({ type: "SET_EDIT", payload: { value: false } });
    };

    const onChangeHandler = (e) => {
        localStorage.setItem(
            "goal",
            JSON.stringify({
                ...JSON.parse(localStorage.getItem("goal")),
                goal: e.target.value,
            })
        );
        dispatch({
            type: "SET_GOAL",
            payload: { value: e.target.value },
        });
    };

    useEffect(() => {
        const goal = JSON.parse(localStorage.getItem("goal")) ?? {};
        dispatch({ type: "SET_FINAL_GOAL", payload: { value: goal } });
    }, []);

    return (
        <>
            {state.goalFinal && !state.edit ? (
                <>
                    <div className="mail-goal-sec">Main Goal for Today</div>
                    <div className="todo-sec">
                        <input
                            type="checkbox"
                            checked={JSON.parse(localStorage.getItem("goal")).todoCompleted}
                            className="focus-checkbox"
                            onClick={() =>
                                dispatch({
                                    type: "SET_TODO_COMPLETED",
                                })
                            }
                        />
                        <div className={`mygoal ${state.todoCompleted && 'completed'}`}>{state.goalFinal}</div>
                        <div className="btn-cont"><BsFillPenFill onClick={() => dispatch({ type: "SET_EDIT", payload: { value: true } })} /></div>
                        <div className="btn-cont"><GiCrossedSwords onClick={() => dispatch({ type: "CLEAR_GOAL" })} /></div>
                    </div>
                </>
            ) : (
                <>
                    <div className="goal-question-sec">
                        What's your main goal for today?
                    </div>
                    <input
                        type="text"
                        className="userInput"
                        value={
                            state.edit
                                ? JSON.parse(localStorage.getItem("goal")).goal
                                : state.goal
                        }
                        onChange={(e) => onChangeHandler(e)}
                        onKeyPress={(e) => {
                            e.key === "Enter" && inputGoalHandler();
                        }}
                    />
                </>
            )}
        </>
    );
};

export default Goal;
