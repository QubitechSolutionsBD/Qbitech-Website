import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "JAN",
    "FEB",
    "MARCH",
    "APR",
    "MAY",
    "JUN",
    "JULY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      label: "DEVELOPMENT",
      data: [4, 1, 2, 1, 2, 0, 1, 1, 0, 0, 1, 3],
      backgroundColor: "#855CF8",
    },
    {
      label: "BRANDING & MARKETING",
      data: [4, 4, 4, 2, 2, 0, 7, 1, 1, 0, 4, 4],
      backgroundColor: "#855CF809",
    },
  ],
};

const options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      ticks: {
        beginAtZero: true,
      },
    },
  },
  responsive: true,
};

function Barchart() {
  return <Bar data={data} options={options} />;
}

export default Barchart;
