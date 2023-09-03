import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const CustomizedAxisTick = (props) => {
   const {
      x, y, stroke, payload,
   } = props;

   return (
      <g transform={`translate(${x},${y})`}>
         <text style={{ fontSize: 10 }} x={0} y={0} dy={16} textAnchor="end" fill="#A3A3A3">{payload.value}</text>
      </g>
   );

}

const CustomizedAxisYTick = (props) => {
   const {
      x, y, stroke, payload,
   } = props;

   return (
      <g transform={`translate(${x},${y})`}>
         <text style={{ fontSize: 10 }} x={0} y={0} dy={16} textAnchor="end" fill="#A3A3A3">{payload.value}</text>
      </g>
   );

}

export default function LineCharts({ data }) {
   return (
      <ResponsiveContainer>
         <LineChart data={data}>
            <CartesianGrid />
            <XAxis
               dataKey="periode"
               tick={<CustomizedAxisTick />}
            />
            <YAxis tick={<CustomizedAxisYTick />} />
            <Tooltip
            // content={<CustomTooltip />}
            />
            <Legend
               align="left"
               iconType="circle"
               wrapperStyle={{
                  paddingTop: 12,
                  fontSize: 12
               }}
               height={30}
            />
            <Line strokeWidth={2} activeDot={true} name="Spp" type="monotone" dataKey="spp" stroke="#42a5f5" />
            <Line strokeWidth={2} activeDot={true} name={'Daftar Ulang'} type="monotone" dataKey="reRegistration" stroke="#ec407a" />
         </LineChart>
      </ResponsiveContainer>
   )
}
