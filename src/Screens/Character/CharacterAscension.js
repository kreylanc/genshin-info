import React, { useMemo } from "react";
import { useTable } from "react-table";

function CharacterAscension({ title, linkId }) {
  //  defining the columns for the table
  // ** using React.useMemo here to ensure that our data isn't recreated on every render

  const columns = useMemo(
    () => [
      {
        Header: "Rank",
        accessor: "col1",
      },
      {
        Header: "Required Lvl",
        accessor: "col2",
      },
      {
        Header: "Mora Cost",
        accessor: "col3",
      },
      {
        Header: "Material #1",
        accessor: "col4",
      },
      {
        Header: "Material #2",
        accessor: "col5",
      },
      {
        Header: "Material #3",
        accessor: "col6",
      },
      {
        Header: "Material #4",
        accessor: "col7",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        col1: "Hello",

        col2: "World",
      },

      {
        col1: "react-table",

        col2: "rocks",
      },

      {
        col1: "whatever",

        col2: "you want",
      },
    ],

    []
  );

  //  creating an instance of the table from react-table
  const tableInstance = useTable({ columns, data });

  //destructuring the instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div id={linkId}>
      <h2 className="mt-10 text-2xl md:text-3xl font-bold tracking-wide text-white">
        {title}
      </h2>
      <div className="border-gray-750 border shadow mt-3 overflow-x-scroll lg:overflow-hidden">
        <table {...getTableProps()} className="table-fixed w-full text-base">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="bg-gray-medium text-sm md:text-base"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="p-2 md:p-3 w-24 font-normal"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="text-center even:bg-orange-100">
            <tr className="bg-gray-light">
              <td className="p-3 ">1</td>
              <td className="p-3 ">1</td>
              <td className="p-3 ">1</td>
              <td className="p-3 ">1</td>
              <td className="p-3 ">1</td>
              <td className="p-3 ">1</td>
            </tr>
            <tr className="bg-gray-light">
              <td className="p-3 ">1</td>
              <td className="p-3 ">1</td>
              <td className="p-3 ">1</td>
              <td className="p-3 ">1</td>
              <td className="p-3 ">1</td>
              <td className="p-3 ">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CharacterAscension;
