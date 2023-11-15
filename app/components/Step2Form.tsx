import { useSearchParams } from "next/navigation";
import csv from "papaparse";
import { useState } from "react";

export default function Step2From(props: any) {
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);
  const [zValues, setZValues] = useState([]);

  const searchParams = useSearchParams();

  const projectName = searchParams.get("project_name")?.toString();
  const projectDescription = searchParams
    .get("project_description")
    ?.toString();
  const client = searchParams.get("client")?.toString();
  const contractor = searchParams.get("contractor")?.toString();

  console.log(projectName, projectDescription, client, contractor);

  function changeHandler(e: {
    target: {
      files: any;
    };
  }) {
    csv.parse(e.target.files[0], {
      complete: function (results) {
        const xArray: any = [];
        const yArray: any = [];
        const zArray: any = [];
        results.data.forEach((row: any, i: Number) => {
          if (i !== 0 && i !== results.data.length - 1) {
            xArray.push(row[1]);
            yArray.push(row[2]);
            zArray.push(row[3]);
          }
        });

        setXValues(xArray);
        setYValues(yArray);
        setZValues(zArray);
      },
    });
  }

  console.log(Math.max(...xValues), yValues, zValues);

  return (
    <div className="grid grid-cols-6">
      <form
        className="col-span-4 col-start-2 m-10 p-10 border rounded shadow"
        action={"/Step2"}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="project_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Project name
                </label>
                <div className="mt-2">
                  <input
                    value={projectName}
                    required
                    disabled
                    type="text"
                    name="project_name"
                    id="project_name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="project_description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Project Description
                </label>
                <div className="mt-2">
                  <textarea
                    required
                    disabled
                    value={projectDescription}
                    name="project_description"
                    id="project_description"
                    cols={30}
                    rows={5}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="client"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Client
                </label>
                <div className="mt-2">
                  <input
                    required
                    disabled
                    value={client}
                    id="client"
                    name="client"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="contractor"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contractor
                </label>
                <div className="mt-2">
                  <input
                    value={contractor}
                    required
                    disabled
                    type="text"
                    name="contractor"
                    id="contractor"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="csv"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  CSV File
                </label>
                <div className="mt-2">
                  <input
                    required
                    id="csv"
                    type="file"
                    name="csv"
                    accept=".csv"
                    onChange={changeHandler}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="max_x"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    max_X
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="max_x"
                      type="number"
                      name="max_x"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="min_x"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    min_X
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="min_x"
                      type="number"
                      name="min_x"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="max_y"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    max_Y
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="max_y"
                      type="number"
                      name="max_y"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="min_y"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    min_Y
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="min_y"
                      type="number"
                      name="min_y"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="max_z"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    max_Z
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="max_z"
                      type="number"
                      name="max_z"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="min_z"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    min_Z
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="min_z"
                      type="number"
                      name="min_z"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save & Go to Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
