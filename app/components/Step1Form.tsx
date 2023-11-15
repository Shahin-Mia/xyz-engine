"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type inputType = {
  project_name: string;
  project_description: string;
  client: string;
  contractor: string;
};

export default function Step1Form() {
  const [inputValues, setInputValues] = useState<inputType>({
    project_name: "",
    project_description: "",
    client: "",
    contractor: "",
  });
  const router = useRouter();

  const onBlurHandler = (e: { target: { value: string; name: string } }) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-6">
      <div></div>
      <form
        className="col-span-4 m-10 p-10 border rounded shadow"
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
                    required
                    onBlur={onBlurHandler}
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
                    onBlur={onBlurHandler}
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
                    onBlur={onBlurHandler}
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
                    required
                    onBlur={onBlurHandler}
                    type="text"
                    name="contractor"
                    id="contractor"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
      <div></div>
    </div>
  );
}
