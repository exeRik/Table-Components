const TableHeader = ({ columns, showActions = true }) => {
  return (
    <thead className="bg-gray-100 text-gray-700">
      <tr>
        {columns.map((col, i) => (
          <th
            key={i}
            className="border border-gray-300 px-4 py-2 text-left text-sm sm:text-base"
          >
            {col.toUpperCase()}
          </th>
        ))}
        {showActions && (
          <th className="border border-gray-300 px-4 py-2 text-left text-sm sm:text-base">
            ACTIONS
          </th>
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;
