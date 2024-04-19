import React, { useState } from "react";

import { Button, Datepicker, Label, Select, Table } from "flowbite-react";

function Year() {
  const years = Array.from({ length: 2025 - 2001 + 1 }, (_, index) => 2001 + index);
  
  const [vehicleInfo, setVehicleInfo] = useState([]);
  const [year, setYear] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  const onSubmit = async () => {
    //console.log(dateEnd, dateStart);
    try {
      const response = await fetch(
        `https://electric-vehicle-report-api.onrender.com/get-yearly-report/?year=${year}`,
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
            <Label htmlFor="startDate" value="Select Year" />
          </div>
          <Select id="M" required>
            {years.reverse().map((year, index) => (
              <option>{year}</option>
            ))}
          </Select>
        </div>

        <Button gradientMonochrome="success" className="flex items-center align-middle m-auto mt-5">
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
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Apple MacBook Pro 17"'}
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Microsoft Surface Pro
              </Table.Cell>
              <Table.Cell>White</Table.Cell>
              <Table.Cell>Laptop PC</Table.Cell>
              <Table.Cell>$1999</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default Year;
