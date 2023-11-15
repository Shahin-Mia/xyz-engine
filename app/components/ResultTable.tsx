import { useSearchParams } from "next/navigation";

export default function ResultTable() {
  const searchParams = useSearchParams();
  const project_name = searchParams.get("project_name");
  const project_description = searchParams.get("project_description");
  const client = searchParams.get("client");
  const contractor = searchParams.get("contractor");
  const max_x = searchParams.get("max_x");
  const min_x = searchParams.get("min_x");
  const max_y = searchParams.get("max_y");
  const min_y = searchParams.get("min_y");
  const max_z = searchParams.get("max_z");
  const min_z = searchParams.get("min_z");

  const tableHeader = [
    "Project Name",
    "Project Description",
    "Client",
    "Contractor",
    "max_X",
    "min_X",
    "max_Y",
    "min_Y",
    "max_Z",
    "min_Z",
  ];

  const tableRows = [
    {
      project_name,
      project_description,
      client,
      contractor,
      max_x,
      min_x,
      max_y,
      min_y,
      max_z,
      min_z,
    },
  ];
  return (
    <div className="grid grid-cols-4 m-10">
      <div className="col-span-2 col-start-2">
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <tr>
              {tableHeader.map((name, index) => (
                <th className="border border-slate-600" key={index}>
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index}>
                <td className="border border-slate-600">{row.project_name}</td>
                <td className="border border-slate-600">
                  {row.project_description}
                </td>
                <td className="border border-slate-600">{row.client}</td>
                <td className="border border-slate-600">{row.contractor}</td>
                <td className="border border-slate-600">{row.max_x}</td>
                <td className="border border-slate-600">{row.min_x}</td>
                <td className="border border-slate-600">{row.max_y}</td>
                <td className="border border-slate-600">{row.min_y}</td>
                <td className="border border-slate-600">{row.max_z}</td>
                <td className="border border-slate-600">{row.min_z}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
