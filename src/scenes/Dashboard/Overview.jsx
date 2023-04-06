import React from "react";
import { ResponsiveLine } from "@nivo/line";
function Overview() {
  const data = [
    {
      id: "japan",
      color: "hsl(169, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 162,
        },
        {
          x: "helicopter",
          y: 215,
        },
        {
          x: "boat",
          y: 210,
        },
        {
          x: "train",
          y: 98,
        },
        {
          x: "subway",
          y: 246,
        },
        {
          x: "bus",
          y: 222,
        },
        {
          x: "car",
          y: 254,
        },
        {
          x: "moto",
          y: 208,
        },
        {
          x: "bicycle",
          y: 63,
        },
        {
          x: "horse",
          y: 194,
        },
        {
          x: "skateboard",
          y: 82,
        },
        {
          x: "others",
          y: 216,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(22, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 98,
        },
        {
          x: "helicopter",
          y: 85,
        },
        {
          x: "boat",
          y: 26,
        },
        {
          x: "train",
          y: 27,
        },
        {
          x: "subway",
          y: 199,
        },
        {
          x: "bus",
          y: 73,
        },
        {
          x: "car",
          y: 239,
        },
        {
          x: "moto",
          y: 139,
        },
        {
          x: "bicycle",
          y: 283,
        },
        {
          x: "horse",
          y: 243,
        },
        {
          x: "skateboard",
          y: 66,
        },
        {
          x: "others",
          y: 279,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(157, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 293,
        },
        {
          x: "helicopter",
          y: 176,
        },
        {
          x: "boat",
          y: 106,
        },
        {
          x: "train",
          y: 191,
        },
        {
          x: "subway",
          y: 288,
        },
        {
          x: "bus",
          y: 22,
        },
        {
          x: "car",
          y: 102,
        },
        {
          x: "moto",
          y: 151,
        },
        {
          x: "bicycle",
          y: 262,
        },
        {
          x: "horse",
          y: 69,
        },
        {
          x: "skateboard",
          y: 18,
        },
        {
          x: "others",
          y: 63,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(99, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 149,
        },
        {
          x: "helicopter",
          y: 32,
        },
        {
          x: "boat",
          y: 156,
        },
        {
          x: "train",
          y: 100,
        },
        {
          x: "subway",
          y: 271,
        },
        {
          x: "bus",
          y: 129,
        },
        {
          x: "car",
          y: 85,
        },
        {
          x: "moto",
          y: 139,
        },
        {
          x: "bicycle",
          y: 2,
        },
        {
          x: "horse",
          y: 94,
        },
        {
          x: "skateboard",
          y: 8,
        },
        {
          x: "others",
          y: 205,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(195, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 255,
        },
        {
          x: "helicopter",
          y: 2,
        },
        {
          x: "boat",
          y: 13,
        },
        {
          x: "train",
          y: 281,
        },
        {
          x: "subway",
          y: 272,
        },
        {
          x: "bus",
          y: 239,
        },
        {
          x: "car",
          y: 286,
        },
        {
          x: "moto",
          y: 76,
        },
        {
          x: "bicycle",
          y: 233,
        },
        {
          x: "horse",
          y: 254,
        },
        {
          x: "skateboard",
          y: 58,
        },
        {
          x: "others",
          y: 296,
        },
      ],
    },
  ];
  return (
    <div className="custom-bg-primary-dark text-white dashboard-outlet-item">
      <div className="mb-2">
        <h3 className="fs-3 m-0 p-0">OVERVIEWS</h3>
        <small className="">See your list of overviews.</small>
      </div>
      <div className="" style={{height:'80%',width:'100%'}}>
        <ResponsiveLine
          data={data}
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
      </div>
    </div>
  );
}

export default Overview;
