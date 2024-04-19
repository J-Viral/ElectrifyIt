import React, { useState } from "react";

import { Button, Label, Table } from "flowbite-react";

function Weekly() {
  const [vehicleInfo, setVehicleInfo] = useState([]);
  const [dateEnd, setDateEnd] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  const onSubmit = async () => {
    console.log("click");
    try {
      const response = await fetch(
        `https://electric-vehicle-report-api.onrender.com/getweekly-report/?startDate=${dateStart}&endDate=${dateEnd}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );

      const res = await response.json();
      if (!response.ok) {
        setErrorMsg(res.error);
        throw Error;
      }
      // console.log(res);
      setErrorMsg("")
      setVehicleInfo(res.sampleData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const totalMIles = vehicleInfo.reduce((acc, current) => acc + current["Miles Driven"], 0);
  console.log(totalMIles);
  return (
    <div>
      <div className=" w-96 m-6">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="startDate" value="Start Date" />
          </div>
          <div class="relative max-w-sm">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              datepicker
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Date in YYYY/MM/DD"
              value={dateStart}
              onChange={(e) => setDateStart(e.target.value)}
            />
          </div>{" "}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="endDate" value="End Date" />
          </div>
          <div class="relative max-w-sm">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              datepicker
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Date in YYYY/MM/DD"
              value={dateEnd}
              onChange={(e) => setDateEnd(e.target.value)}
            />
          </div>{" "}
          <p className=" text-red-800">{errorMsg}</p>
        </div>
        <Button
          onClick={onSubmit}
          gradientMonochrome="success"
          className="flex items-center align-middle m-auto mt-5"
        >
          Submit
        </Button>
      </div>
      <div>
        <h1 className=" flex justify-center items-center font-bold text-4xl mt-10 mb-8">
          Vahical Data
        </h1>
      </div>
      <div className="overflow-x-auto mt-7 ">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>License Plate</Table.HeadCell>
            <Table.HeadCell>Make</Table.HeadCell>
            <Table.HeadCell>VIN</Table.HeadCell>

            <Table.HeadCell>Model</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Miles Driven</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {vehicleInfo.map((item, index) => (
              <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{item.Date}</Table.Cell>
                <Table.Cell>{item["License Plate"]}</Table.Cell>
                <Table.Cell>{item.Make}</Table.Cell>
                <Table.Cell>{item.VIN}</Table.Cell>
                <Table.Cell>{item.Model}</Table.Cell>
                <Table.Cell>{item.Type}</Table.Cell>
                <Table.Cell>{item["Miles Driven"]}</Table.Cell>
              </Table.Row>
            ))}
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell className="font-bold text-xl">Total Miles Driven</Table.Cell>
              <Table.Cell className=" font-bold text-xl">{totalMIles} Miles</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default Weekly;
