const Table = ({
    columns,
    renderRow,
    data = [], // Defina um valor padrão (array vazio) para `data`
}: {
    columns: { header: string; accessor: string; className?: string }[];
    renderRow: (item: any) => React.ReactNode;
    data: any[]; // Este tipo já garante que `data` deve ser um array
}) => {
    return (
        <table className="w-full mt-4">
            <thead>
                <tr className="text-left text-gray-500 text-sm">
                    {columns.map((col) => (
                        <th key={col.accessor} className={col.className}>
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((item) => renderRow(item)) // Se `data` for um array válido, faça o map
                ) : (
                    <tr>
                        <td
                            colSpan={columns.length}
                            className="text-center text-gray-500"
                        >
                            No data available
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Table;
