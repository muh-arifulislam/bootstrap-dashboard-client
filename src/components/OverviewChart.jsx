import React from "react";
import { ResponsiveLine } from "@nivo/line";
const OverviewChart = () => {
  const data = [
    {
      id: "Sales",
      color: "hsl(169, 70%, 50%)",
      data: [
        {
          x: "Jan",
          y: 15000,
        },
        {
          x: "Feb",
          y: 25000,
        },
        {
          x: "Mar",
          y: 30000,
        },
        {
          x: "Apr",
          y: 50000,
        },
        {
          x: "May",
          y: 60000,
        },
        {
          x: "Jun",
          y: 62000,
        },
        {
          x: "Jul",
          y: 70000,
        },
        {
          x: "Aug",
          y: 68000,
        },
        {
          x: "Sep",
          y: 67000,
        },
        {
          x: "Nov",
          y: 76000,
        },
        {
          x: "Dec",
          y: 80000,
        },
      ],
    },
  ];
  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "#ffd166",
            },
          },
          legend: {
            text: {
              fill: "#ffd166",
            },
          },
          ticks: {
            line: {
              stroke: "#ffd166",
              strokeWidth: 1,
            },
            text: {
              fill: "#ffd166",
            },
          },
        },
        legends: {
          text: {
            fill: "#ffd166",
          },
        },
        tooltip: {
          container: {
            color: "#191F45",
          },
        },
      }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default OverviewChart;
