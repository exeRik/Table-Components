import { useState } from "react";
import ReactTable from "./components/ReactTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Columns for the table
  const columns = ["id", "name", "roll", "email", "phone", "department", "booksIssued"];

  // to store rows as array of objects
  const [rows, setRows] = useState([]);

  // Unique ID for new students
  const [nextId, setNextId] = useState(1);

  // Function to add or edit student
  const handleSaveStudent = (student, isEdit, index) => {
    if (!student.name || !student.roll) {
      toast.error("Name and Roll Number are required!");
      return;
    }

    // Create a clean student object with all columns
    const cleanStudent = {
      id: nextId,
      name: student.name || null,
      roll: student.roll || null,
      email: student.email || null,
      phone: student.phone || null,
      department: student.department || null,
      booksIssued: student.booksIssued || null
    };

    if (isEdit) {
      // Edit existing student
      const updatedRows = [...rows];
      updatedRows[index] = cleanStudent;
      setRows(updatedRows);
      toast.info("Student updated!");
    } else {
      // Add new student
      setRows([...rows, cleanStudent]);
      setNextId(nextId + 1);
      toast.success("New student added!");
    }
  };

  // Function to delete a student
  const handleDelete = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
    toast.error("Deleted successfully!");
  };

  return (
    <>
      <ReactTable 
        columns={columns} 
        rows={rows} 
        onSaveStudent={handleSaveStudent} 
        onDelete={handleDelete} 
      />
      
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;
