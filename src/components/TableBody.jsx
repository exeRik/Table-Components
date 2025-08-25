import ActionButtons from "./ActionButtons";

const TableBody = ({ columns, rows, openEditModal, onDelete }) => {
  if (rows.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={columns.length + 1} className="text-center py-4 text-gray-500">
            No entries
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {rows.map((row, i) => (
        <tr key={i} className="hover:bg-gray-50">
          {columns.map((col, j) => (
            <td key={j} className="border border-gray-300 px-4 py-2">
              {row[col]}
            </td>
          ))}
          <td className="border border-gray-300 px-4 py-2">
            <ActionButtons index={i} openEditModal={openEditModal} onDelete={onDelete} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
