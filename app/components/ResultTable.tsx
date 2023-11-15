import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useSearchParams } from "next/navigation";

type row = {
  project_name: string | any;
  project_description: string | any;
  client: string | any;
  contractor: string | any;
  max_x: string | any;
  min_x: string | any;
  max_y: string | any;
  min_y: string | any;
  max_z: string | any;
  min_z: string | any;
};

export default function ResultTable() {
  const searchParams = useSearchParams();
  const project_name = searchParams.get("project_name")?.toString();
  const project_description = searchParams
    .get("project_description")
    ?.toString();
  const client = searchParams.get("client")?.toString();
  const contractor = searchParams.get("contractor")?.toString();
  const max_x = searchParams.get("max_x")?.toString();
  const min_x = searchParams.get("min_x")?.toString();
  const max_y = searchParams.get("max_y")?.toString();
  const min_y = searchParams.get("min_y")?.toString();
  const max_z = searchParams.get("max_z")?.toString();
  const min_z = searchParams.get("min_z")?.toString();

  function createHeaders(keys: string[] | any[]) {
    let result = [];
    for (let i = 0; i < keys.length; i += 1) {
      result.push({
        id: keys[i],
        name: keys[i],
        prompt: keys[i],
        width: i === 2 ? 300 : 65,
        align: "center",
        padding: 0,
      });
    }
    return result;
  }

  const tableHeader: string[] = [
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

  const tableRows: row[] = [
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

  const pdfHeader: any[] = createHeaders(tableHeader);

  const doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape" });

  const onClickHandler = () => {
    autoTable(doc, {
      head: [tableHeader],
      body: [Object.values(tableRows[0])],
    });
    doc.save("result.pdf");
  };

  return (
    <div className="grid grid-cols-6 m-10">
      <div className="col-span-4 col-start-2">
        <button
          onClick={onClickHandler}
          className=" bg-gray-600 px-1 py-1 my-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Export as PDF
        </button>
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
