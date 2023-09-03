import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {
   Card,
   CardHeader,
   CardBody,
   Typography,
   Avatar,
   Chip,
   Tooltip,
   Progress,
   CardFooter,
   Button,
   Select,
   Option,
   TablePagination
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { studentTableData, projectsTableData } from "@/data";
import { NumericFormat } from 'react-number-format';

const results = [
   { page: 1, data: studentTableData },
   { page: 2, data: studentTableData.slice(0, 3) },
   { page: 3, data: studentTableData.slice(4) },
]

const listClass = [{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }, { value: 4, label: '4' }, { value: 5, label: '5' }, { value: 6, label: '6' }, { value: 7, label: '7' }, { value: 8, label: '8' }, { value: 9, label: '9' }, { value: 10, label: '10' }, { value: 11, label: '11' }, { value: 12, label: '12' }];

const listFilter = [
   { level: 'SD', listClass: listClass.slice(0, 6) },
   { level: 'SMP', listClass: listClass.slice(6, 9) },
   { level: 'SMA', listClass: listClass.slice(9, 12) },
];

export default function Transaction() {
   const [page, setPage] = useState(0);
   const [rowsPerPage] = useState(3);

   const [selectedLevel, setSelectedLevel] = useState(null);
   const [selectedClass, setSelectedClass] = useState(null);
   const [filterValue, setFilterValue] = useState(null);


   const { data } = useQuery('data', () => Promise.resolve(studentTableData));

   const filteredData = data
      ? data.filter((item) => {
         return (
            (!filterValue || filterValue.level === item.grade)
            &&
            (!filterValue || filterValue.listClass.some(el => el.value == item.class))
         );
      })
      : [];

   const handleChangePage = (newPage) => {
      setPage(newPage);
   };

   const handleSelectLevelOption = (selected) => {
      setSelectedLevel(selected);
   }

   const handleSelectClassOption = (selected) => {
      setSelectedClass(selected);
   }

   const handleReset = () => {
      setSelectedLevel(null);
      setSelectedClass(null);
      setFilterValue(null);;
   }

   const handleApply = () => {
      if (selectedLevel && selectedClass == null) {
         setFilterValue(selectedLevel)
      } else if (selectedLevel && selectedClass) {
         setFilterValue({ ...selectedLevel, listClass: [selectedClass] })
      } else if (selectedClass && selectedLevel == null) {

      }
   }

   const listClassSelected = selectedLevel ? selectedLevel.listClass : listClass;
   const totalPages = Math.ceil(filteredData.length / rowsPerPage);
   const paginatedData = filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);


   return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
         <Typography variant="h4">
            Rekap Transaksi
         </Typography>
         <Card>
            <CardHeader variant="gradient" color="blue" className="mb-4 p-6">
               <Typography variant="h6" color="white">
                  List Transaksi Pembayaran Murid
               </Typography>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
               <div className='p-6'>
                  <Typography>
                     Filter List
                  </Typography>
                  <div className='flex flex-row  gap-4 lg:w-32 my-4'>
                     <Select label='Pilih Tingkat' value={selectedLevel && selectedLevel} onChange={handleSelectLevelOption}>
                        {listFilter.map((item, i) => (
                           <Option key={i} value={item}>{item.level}</Option>
                        ))}
                     </Select>
                     <Select label='Pilih Kelas' value={selectedClass && selectedClass} onChange={handleSelectClassOption}>
                        {listClassSelected.map((item, i) => (
                           <Option key={i} value={item}>{item.label}</Option>
                        ))}
                     </Select>
                     <Button disabled={(selectedLevel != null) || (setSelectedClass != null) ? false : true} className='min-w-[80px]' variant='outlined' color='red' onClick={() => handleReset()}>Reset</Button>
                     <Button disabled={(selectedLevel != null) || (setSelectedClass != null) ? false : true} className='min-w-[80px]' color='green' onClick={() => handleApply()}>Apply</Button>
                  </div>
               </div>
               <table className="w-full min-w-[640px] table-auto">
                  <thead>
                     <tr>
                        {["Nama", "Tingkat", "Kelas", "nominal", ""].map((el) => (
                           <th
                              key={el}
                              className="border-b border-blue-gray-50 py-3 px-5 text-left"
                           >
                              <Typography
                                 variant="small"
                                 className="text-[11px] font-bold uppercase text-blue-gray-400"
                              >
                                 {el}
                              </Typography>
                           </th>
                        ))}
                     </tr>
                  </thead>
                  <tbody>
                     {paginatedData.map(
                        ({ img, name, nis, grade, class: number, nominal, }, key) => {
                           const className = `py-3 px-5 ${key === studentTableData.length - 1
                              ? ""
                              : "border-b border-blue-gray-50"
                              }`;

                           return (
                              <tr key={name}>
                                 <td className={className}>
                                    <div className="flex items-center gap-4">
                                       <Avatar src={img} alt={name} size="sm" />
                                       <div>
                                          <Typography
                                             variant="small"
                                             color="blue-gray"
                                             className="font-semibold"
                                          >
                                             {name}
                                          </Typography>
                                          <Typography className="text-xs font-normal text-blue-gray-500">
                                             {nis}
                                          </Typography>
                                       </div>
                                    </div>
                                 </td>
                                 <td className={className}>
                                    <Typography className="text-xs font-semibold text-blue-gray-600">
                                       {grade}
                                    </Typography>
                                 </td>
                                 <td className={className}>
                                    <Typography className="text-xs font-semibold text-blue-gray-600">
                                       {number}
                                    </Typography>
                                 </td>
                                 <td className={className}>
                                    <Typography className="text-xs font-semibold text-blue-gray-600">
                                       Rp. <NumericFormat allowLeadingZeros value={nominal} thousandSeparator="," />
                                    </Typography>
                                 </td>
                                 <td className={className}>
                                    <Typography
                                       as="a"
                                       href="#"
                                       className="text-xs font-semibold text-blue-gray-600"
                                    >
                                       Edit
                                    </Typography>
                                 </td>
                              </tr>
                           );
                        }
                     )}
                     {paginatedData.length > 0 && (
                        <tr>
                           <td className='py-3 px-5 border-b border-blue-gray-50'></td>
                           <td className='py-3 px-5 border-b border-blue-gray-50'></td>
                           <td className='py-3 px-5 border-b border-blue-gray-50'>
                              <Typography className="text-xs font-semibold text-blue-gray-600">
                                 Total
                              </Typography>
                           </td>
                           <td className='py-3 px-5 border-b border-blue-gray-50'>
                              <Typography className="text-xs font-semibold text-blue-gray-600">
                                 Rp. <NumericFormat allowLeadingZeros value={paginatedData.reduce((accumulator, currentValue) => accumulator + currentValue.nominal, 0)} thousandSeparator="," />
                              </Typography>
                           </td>
                           <td className='py-3 px-5 border-b border-blue-gray-50'></td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </CardBody>
            <CardFooter className="border-t border-blue-gray-50 p-4">
               <div className='flex items-center justify-between'>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                     Halaman {page + 1} dari {totalPages}
                  </Typography>
                  <div className="flex gap-2">
                     <Button onClick={() => handleChangePage(page - 1)} disabled={page === 0} variant="outlined" size="sm">
                        Previous
                     </Button>
                     <Button onClick={() => handleChangePage(page + 1)} disabled={page === totalPages - 1} variant="outlined" size="sm">
                        Next
                     </Button>
                  </div>
               </div>
            </CardFooter>
         </Card>
      </div>
   )
}
