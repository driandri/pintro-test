import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
} from "@/data";
import PieCharts from "@/widgets/charts/piechart";
import LineCharts from "@/widgets/charts/line-chart";

export const data = {
  chartDataRegister: [
    { component: 'Lunas', count: 65, color: '#20bf6a' },
    { component: 'Belum Lunas', count: 35, color: '#ec407a' },
  ],
  chartDataStudentActive: [
    { component: 'Lunas', count: 87, color: '#20bf6a' },
    { component: 'Belum Lunas', count: 13, color: '#ec407a' },
  ],
};

export const dataRecapTransaction = [
  {
    periode: 'Januari', component: 'SPP', spp: 50, reRegistration: 0, transaction: 50,
  },
  {
    periode: 'Februari', component: 'SPP', spp: 57, reRegistration: 10, transaction: 67,
  },
  {
    periode: 'Maret', component: 'Daftar Ulang', spp: 10, reRegistration: 35, transaction: 45,
  },
  {
    periode: 'April', component: 'Daftar Ulang', spp: 0, reRegistration: 32, transaction: 32,
  },
  {
    periode: 'Mei', component: 'SPP', spp: 45, reRegistration: 0, transaction: 45,
  },
  {
    periode: 'Juni', component: 'Daftar Ulang', spp: 0, reRegistration: 44, transaction: 44,
  },
]

function generateLegend(legend) {
  return <div className="grid grid-cols-1 gap-x-3">
    {legend.map((item, index) => {
      return (
        <div className="flex">
          <div style={{ background: item.color, height: 20, width: 20, marginRight: 10 }}></div>
          <div>{item.component} = {item.count} %</div>
        </div>
      )
    })}
  </div>
}



export function Home() {
  return (
    <div className="mt-12">
      <div className="mb-12">
        <Typography className="text-3xl">
          Selamat Datang, Ririh!
        </Typography>
        <Typography variant="p">
          {"Di halaman Administrasi Pintro :)"}
        </Typography>
      </div>
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-12 grid lg:md:grid-cols-2 xs:grid-cols-1 gap-y-10 gap-x-6">
        <div className="h-72">
          <Card className="h-full p-4 grid-cols-1">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-semibold capitalize"
            >
              Presentase Tagihan Pendaftar
            </Typography>
            <PieCharts data={data.chartDataRegister} total={100} />
            {generateLegend(data.chartDataRegister)}
          </Card>
        </div>
        <div className="h-72">
          <Card className="h-full p-4 grid-cols-1">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-semibold capitalize"
            >
              Presentase Tagihan Murid Aktif
            </Typography>
            <PieCharts data={data.chartDataStudentActive} total={100} />
            {generateLegend(data.chartDataStudentActive)}
          </Card>
        </div>
      </div>
      <div className="mb-12">
        <Card className="h-96 p-4 grid grid-cols-1 gap-y-5">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-semibold capitalize"
          >
            Transaksi Periode Januari - Juni
          </Typography>
          <div className="w-full h-full lg:px-4">
            <LineCharts data={dataRecapTransaction} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;
