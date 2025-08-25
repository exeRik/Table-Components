import FormInput from "./FormInput";

const StudentFormModal = ({ columns, formData, handleChange, handleSubmit, closeModal, isEdit }) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50 overflow-auto p-4">
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {columns.filter(c => c !== 'id').map((col) => (
        <FormInput key={col} col={col} value={formData[col]} handleChange={handleChange} />
      ))}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 transition-colors text-white px-4 py-2 rounded col-span-1 sm:col-span-2 shadow-md"
      >
        {isEdit ? "Update Student" : "Save Student"}
      </button>
      <button
        type="button"
        onClick={closeModal}
        className="bg-gray-500 hover:bg-gray-400 transition-colors text-white px-4 py-2 rounded col-span-1 sm:col-span-2 shadow-md"
      >
        Cancel
      </button>
    </form>
  </div>
);

export default StudentFormModal;
