const ToppersTable = ({ toppers }) => {
  if (!toppers || toppers.length === 0) {
    return null;
  }
  return (
    <div className="overflow-x-auto">
      <div className="border border-accent rounded-lg overflow-hidden ">
        {" "}
        {/* Add rounded-lg here */}
        <table className="md:w-[550px] w-80">
          <thead className="bg-accent text-white">
            <tr>
              <th className="px-6 py-3  border-b border-gray-300 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3  border-b border-gray-300 text-left text-xs font-semibold text-white uppercase tracking-wider">
                %
              </th>
            </tr>
          </thead>
          <tbody>
            {toppers.map((topper, index) => (
              <tr key={index} className="hover:bg-accentbg font-bold">
                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                  {topper.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm text-gray-700">
                  {topper.percentage}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToppersTable;
