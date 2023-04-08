import React from "react";
import { ResponsiveBar } from "@nivo/bar";
const BarChart = () => {
  const data = [
    {
      country: "AD",
      "hot dog": 3,
      "hot dogColor": "hsl(163, 70%, 50%)",
      burger: 89,
      burgerColor: "hsl(181, 70%, 50%)",
      sandwich: 98,
      sandwichColor: "hsl(314, 70%, 50%)",
      kebab: 76,
      kebabColor: "hsl(171, 70%, 50%)",
      fries: 20,
      friesColor: "hsl(267, 70%, 50%)",
      donut: 100,
      donutColor: "hsl(350, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 53,
      "hot dogColor": "hsl(146, 70%, 50%)",
      burger: 42,
      burgerColor: "hsl(3, 70%, 50%)",
      sandwich: 89,
      sandwichColor: "hsl(147, 70%, 50%)",
      kebab: 158,
      kebabColor: "hsl(224, 70%, 50%)",
      fries: 80,
      friesColor: "hsl(138, 70%, 50%)",
      donut: 164,
      donutColor: "hsl(136, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 170,
      "hot dogColor": "hsl(269, 70%, 50%)",
      burger: 21,
      burgerColor: "hsl(154, 70%, 50%)",
      sandwich: 171,
      sandwichColor: "hsl(105, 70%, 50%)",
      kebab: 40,
      kebabColor: "hsl(50, 70%, 50%)",
      fries: 17,
      friesColor: "hsl(291, 70%, 50%)",
      donut: 133,
      donutColor: "hsl(110, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 101,
      "hot dogColor": "hsl(316, 70%, 50%)",
      burger: 81,
      burgerColor: "hsl(268, 70%, 50%)",
      sandwich: 155,
      sandwichColor: "hsl(59, 70%, 50%)",
      kebab: 56,
      kebabColor: "hsl(348, 70%, 50%)",
      fries: 81,
      friesColor: "hsl(301, 70%, 50%)",
      donut: 194,
      donutColor: "hsl(267, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 73,
      "hot dogColor": "hsl(333, 70%, 50%)",
      burger: 169,
      burgerColor: "hsl(64, 70%, 50%)",
      sandwich: 96,
      sandwichColor: "hsl(125, 70%, 50%)",
      kebab: 53,
      kebabColor: "hsl(167, 70%, 50%)",
      fries: 187,
      friesColor: "hsl(137, 70%, 50%)",
      donut: 145,
      donutColor: "hsl(32, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 177,
      "hot dogColor": "hsl(106, 70%, 50%)",
      burger: 161,
      burgerColor: "hsl(28, 70%, 50%)",
      sandwich: 47,
      sandwichColor: "hsl(353, 70%, 50%)",
      kebab: 161,
      kebabColor: "hsl(71, 70%, 50%)",
      fries: 150,
      friesColor: "hsl(222, 70%, 50%)",
      donut: 20,
      donutColor: "hsl(125, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 68,
      "hot dogColor": "hsl(346, 70%, 50%)",
      burger: 128,
      burgerColor: "hsl(132, 70%, 50%)",
      sandwich: 169,
      sandwichColor: "hsl(273, 70%, 50%)",
      kebab: 19,
      kebabColor: "hsl(89, 70%, 50%)",
      fries: 105,
      friesColor: "hsl(47, 70%, 50%)",
      donut: 44,
      donutColor: "hsl(156, 70%, 50%)",
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
