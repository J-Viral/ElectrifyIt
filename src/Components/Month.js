import React, { useState } from "react";

import { Button, Label, Select, Table } from "flowbite-react";

function Month() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from({ length: 2025 - 2001 + 1 }, (_, index) => 2001 + index);

  const [vehicleInfo, setVehicleInfo] = useState([]);
  const [dateEnd, setDateEnd] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  const onSubmit = async () => {
    console.log(dateEnd, dateStart);
    try {
      const response = await fetch(
        `https://electric-vehicle-report-api.onrender.com/get-monthly-report/?month=${dateStart}&year=${dateEnd}`,
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
      setErrorMsg("");
      setVehicleInfo(res.sampleData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const totalMIles = vehicleInfo.reduce((acc, current) => acc + current["Miles Driven"], 0);

  return (
    <div>
      <div className=" w-96 m-6">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="startDate" value="Select Month" />
          </div>
          <Select id="Month" onChange={(e) => setDateStart(e.target.value)} required>
            {months.map((month, index) => (
              <option value={index + 1}>{month}</option>
            ))}
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="startDate" value="Select Year" />
          </div>
          <Select id="Month" onChange={(e) => setDateEnd(e.target.value)} required>
            {years.reverse().map((year, index) => (
              <option>{year}</option>
            ))}
          </Select>
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

export default Month;
