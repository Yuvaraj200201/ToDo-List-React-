import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [activities, setActivities] = useState([]);
  const [newActivities, setNewActivities] = useState();

  const handleChange = (e) => {
    setNewActivities(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (newActivities.length === 0) {
      setActivities([]);
      alert("You didn't type any activities");
    } else {
      setActivities([
        ...activities,
        { id: activities.length + 1, activity: newActivities },
      ]);
      setNewActivities([]);
    }
  };
  const handleDelete = (deleteId) => {
    var tempact = activities.filter((item) => {
      if (item.id === deleteId) {
        return false;
      } else {
        return true;
      }
    });
    setActivities(tempact);
  };

  return (
    <div className="flex gap-5 flex-wrap">
      <AddTodoForm
        newActivities={newActivities}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />
      <TodoList
        activities={activities}
        handleDelete={handleDelete}
        newActivities={newActivities}
      />
    </div>
  );
};

export default Todo;
