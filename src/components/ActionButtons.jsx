const ActionButtons = ({ index, openEditModal, onDelete }) => {
  return (
    <div className="flex gap-2">
      <button
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded text-xs sm:text-sm"
        onClick={() => openEditModal(index)}
      >
        Edit
      </button>
      <button
        className="bg-red-900 hover:bg-red-700 text-white px-2 py-1 rounded text-xs sm:text-sm"
        onClick={() => onDelete(index)}
      >
        Delete
      </button>
    </div>
  );
};

export default ActionButtons;
