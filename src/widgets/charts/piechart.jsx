import React from 'react'
import { Cell, Label, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

export default function PieCharts({ data, total }) {
   function onPieEnter(e){
      console.log(e);
      if(e){
        let toolTipWrapper = document.getElementsByClassName("recharts-tooltip-wrapper")[0];
        toolTipWrapper.style.transition = 'transform 400ms ease 0s';
        toolTipWrapper.style.transform = "translate("+ (e.chartX + 10) +"px, "+ (e.chartY + 10) +"px)";
      }
  }

   return (
      <ResponsiveContainer>
         <PieChart>
            <Pie
               dataKey="count"
               data={data}
               outerRadius={60}
               innerRadius={40}
               paddingAngle={2}
            >
               <Label
                  width={30}
                  position="center"
                  style={{
                     fontSize: 16,
                     fontWeight: 800
                  }}
                  value={total || 0}
               />
               {data.map((el, index) => (
                  <Cell key={`cell-${index}`} fill={el.color} />
               ))}
               <Tooltip />
            </Pie>
         </PieChart>
      </ResponsiveContainer>
   )
}
