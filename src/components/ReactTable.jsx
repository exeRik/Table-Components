import { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import StudentFormModal from "./StudentFormModal";

const ReactTable = ({ columns, rows, onSaveStudent, onDelete }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    onSaveStudent(formData, isEdit, editIndex);
    setFormData({});
    setIsEdit(false);
    setEditIndex(null);
    setShowForm(false);
  };
  

  const openEditModal = (index) => {
    setFormData(rows[index]);
    setIsEdit(true);
    setEditIndex(index);
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
    setIsEdit(false);
    setFormData({});
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto mt-6 p-4 sm:p-6 bg-white rounded-lg shadow-lg border border-gray-300 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between w-full mb-6 gap-4 text-center">
        <p className="text-3xl font-bold text-gray-700">Library Students Table</p>
        <button
          className="bg-green-600 hover:bg-green-500 transition-colors text-white px-4 py-2 rounded flex items-center gap-2 shadow-md"
          onClick={() => setShowForm(true)}
        >
          + Add Student
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full rounded-lg shadow-lg border border-gray-300">
        <table className="table-auto w-full border-collapse bg-white text-sm">
          <TableHeader columns={columns} />
          <TableBody 
            columns={columns} 
            rows={rows} 
            openEditModal={openEditModal} 
            onDelete={onDelete} 
          />
        </table>
      </div>

      {showForm && (
        <StudentFormModal
          columns={columns}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeModal={closeModal}
          isEdit={isEdit}
        />
      )}
    </div>
  );
};

export default ReactTable;
