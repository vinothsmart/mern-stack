import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSumbit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(createGoal(text));
      setText("");
    },
    [dispatch, text]
  );

  return (
    <section className="form">
      <form onSubmit={handleSumbit}>
        <div className="form-group">
          <label htmlFor="text"></label>
          <input type="text" name="text" value={text} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
