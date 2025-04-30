"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
const chartData = [
  { date: "2025-04-01", desktop: 234, mobile: 312 },
  { date: "2025-04-02", desktop: 198, mobile: 279 },
  { date: "2025-04-03", desktop: 275, mobile: 350 },
  { date: "2025-04-04", desktop: 322, mobile: 408 },
  { date: "2025-04-05", desktop: 143, mobile: 190 },
  { date: "2025-04-06", desktop: 301, mobile: 275 },
  { date: "2025-04-07", desktop: 412, mobile: 334 },
  { date: "2025-04-08", desktop: 364, mobile: 298 },
  { date: "2025-04-09", desktop: 285, mobile: 376 },
  { date: "2025-04-10", desktop: 256, mobile: 220 },
  { date: "2025-04-11", desktop: 178, mobile: 202 },
  { date: "2025-04-12", desktop: 317, mobile: 410 },
  { date: "2025-04-13", desktop: 298, mobile: 305 },
  { date: "2025-04-14", desktop: 241, mobile: 289 },
  { date: "2025-04-15", desktop: 384, mobile: 390 },
  { date: "2025-04-16", desktop: 190, mobile: 240 },
  { date: "2025-04-17", desktop: 222, mobile: 260 },
  { date: "2025-04-18", desktop: 406, mobile: 320 },
  { date: "2025-04-19", desktop: 175, mobile: 190 },
  { date: "2025-04-20", desktop: 328, mobile: 300 },
  { date: "2025-04-21", desktop: 259, mobile: 280 },
  { date: "2025-04-22", desktop: 387, mobile: 412 },
  { date: "2025-04-23", desktop: 195, mobile: 218 },
  { date: "2025-04-24", desktop: 266, mobile: 345 },
  { date: "2025-04-25", desktop: 421, mobile: 390 },
  { date: "2025-04-26", desktop: 189, mobile: 174 },
  { date: "2025-04-27", desktop: 343, mobile: 368 },
  { date: "2025-04-28", desktop: 237, mobile: 322 },
];

const chartConfig = {
  verified: {
    label: "Verified",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("30d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

const latestDate = new Date(
  Math.max(...chartData.map((item) => new Date(item.date).getTime()))
);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = latestDate;
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Verified vs pending stats</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:block hidden">
            Total for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <div className="absolute right-4 top-4">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="@[767px]/card:flex hidden"
          >
            <ToggleGroupItem value="90d" className="h-8 px-2.5">
              Last 3 months
            </ToggleGroupItem>
            <ToggleGroupItem value="30d" className="h-8 px-2.5">
              Last 30 days
            </ToggleGroupItem>
            <ToggleGroupItem value="7d" className="h-8 px-2.5">
              Last 7 days
            </ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="@[767px]/card:hidden flex w-40"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl bg-white">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
