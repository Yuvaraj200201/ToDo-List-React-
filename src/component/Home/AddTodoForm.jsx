const AddTodoForm = ({ newActivities, handleChange, handleAdd }) => {
  return (
      <div className="w-full">
        <h1 className="text-xl sm:text-2xl font-medium pb-2 sm:pb-5 font-serif">Manage Activities</h1>
        <input
          value={newActivities}
          onChange={handleChange}
          className="border border-black p-1 sm:py-1 sm:px-2 w-[60vw]"
          placeholder="Next Activity?"
          type="text"
          required
        />
        <button
          onClick={handleAdd}
          className="bg-black border border-black text-white font-extrabold p-1 sm:px-3 sm:py-1"
        >
          Add
        </button>
      </div>
  );
};

export default AddTodoForm;
