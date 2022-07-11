import React, { useEffect, useState, useCallback } from "react";
import { Button, Space, Table } from "antd";

import { data } from "./data";

const DataTable = () => {
  var pageTitle = "User Groups";
  const columnWidth = 100;

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  //   const getMonths = useCallback(async () => {
  //     const d = new Date();

  //     let currMth = d.getMonth();
  //     let currYear = d.getFullYear();

  //     var months = [];
  //     let mthName = "";
  //     for (let i = 1; i < currMth + 1; i++) {
  //       mthName = month[d.getMonth() - i];
  //       mstore.mthLabels.push(mthName + "_" + currYear);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     // mstore.getRecords(api_endpoint, sortby);
  //     // mstore.mthLabels = [];
  //     getMonths();
  //     console.log("monthLabels - ", mstore.mthLabels);
  //   }, [mstore]);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const columns = [
    {
      title: "Countries and areas",
      dataIndex: "countries-and-areas",
      key: "countries-and-areas",
      //   filteredValue: filteredInfo.title || null,
      //   onFilter: (value, record) => record.title.includes(value),
      //   sorter: (a, b) => a.title.length - b.title.length,
      //   sortOrder: sortedInfo.columnKey === "countries-and-areas" ? sortedInfo.order : null,
      ellipsis: true,
      //       EAP	East Asia and the Pacific
      // ECA	Europe and Central Asia
      // EECA	Eastern Europe and Central Asia
      // ESA	Eastern and Southern Africa
      // LAC	Latin America and the Caribbean
      // MENA	Middle East and North Africa
      // NA	North America
      // SA	South Asia
      // SSA	Sub-Saharan Africa
      // WCA	West and Central Africa
    },
    {
      title: "Region",
      dataIndex: "region" || "",
      key: "region",
      width: columnWidth,
      filteredValue: filteredInfo.region || null,
      onFilter: (value, record) => record.region.includes(value),
      filters: [
        {
          text: "Europe and Central Asia",
          value: "ECA",
        },
        {
          text: "North America",
          value: "NA",
        },
      ],
    },
    {
      title: "UNICEF Sub-region",
      dataIndex: "unicef-sub-region" || "",
      key: "unicef-sub-region",
      width: columnWidth,
    },
    // {
    //   title: "Income Group",
    //   dataIndex: income - group || "",
    //   key: mstore.mthLabels[4],
    //   width: columnWidth,
    // },
    // {
    //   title: "Total",
    //   dataIndex: total || "",
    //   key: mstore.mthLabels[3],
    //   width: columnWidth,
    // },
    // {
    //   title: "Rural Residence",
    //   dataIndex: rural - residence || "",
    //   key: rural - residence,
    //   width: columnWidth,
    // },
    // {
    //   title: "Urban Residence",
    //   dataIndex: urban - residence || "",
    //   key: urban - residence,
    //   width: columnWidth,
    // },
    // {
    //   title: "Source - Data",
    //   dataIndex: source - data || "",
    //   key: source - data,
    //   width: columnWidth,
    // },
    // {
    //   title: "Source - Time period",
    //   dataIndex: source - time - period || "",
    //   key: source - time - period,
    //   width: columnWidth,
    // },
  ];

  return (
    <>
      <h1 className="page-title">
        <span>
          {/* <span className="adminpage-title">{pageTitle}</span> -<span>
            {mstore.items.length}</span> */}
        </span>
      </h1>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={clearFilters}>Clear filters</Button>
      </Space>
      <Table
        size="small"
        // scroll={{
        //   y: 440,
        // }}
        pagination={false}
        columns={columns}
        dataSource={data}
        onChange={handleChange}
      />
    </>
  );
};

export default DataTable;
