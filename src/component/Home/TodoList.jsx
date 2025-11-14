import { FaTrash } from "react-icons/fa";
import "../../index.css";

const TodoList = ({ activities, handleDelete }) => {
  var count = 0;
  return (
    <div className="flex flex-col sm:flex-row w-full min-h-0">
      <div className="bg-[#BDB4EA] border rounded-md p-4 sm:px-7 sm:py-4 flex-grow min-w-64 overflow-y-auto no-scrollbar">
        <h1 className="text-xl sm:text-2xl font-medium mb-2 font-serif">
          Today's Activity
        </h1>
        {activities.length === 0 ? (
          <p className="text-xs sm:text-lg">You haven't added anything yet</p>
        ) : (
          activities.map((items, index) => {
            return (
              <div
                key={items.id}
                className="flex justify-between items-start gap-2 py-2 break-words"
              >
                <div className="flex flex-1 items-center justify-center">
                  <span className="font-bold mr-2 mt-[2px] min-w-[15px] text-right">
                    {index + 1}.
                  </span>
                  <p className="text-sm sm:text-base break-words flex-1">{items.activity}</p>
                </div>

                <button
                  onClick={() => handleDelete(items.id)}
                  className="mb-1 mr-2 text-white bg-red-700 p-2 rounded-full flex-shrink-0"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TodoList;
