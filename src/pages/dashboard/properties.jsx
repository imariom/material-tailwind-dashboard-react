import {
  Card,
  CardBody,
  CardHeader,
  Typography
} from "@material-tailwind/react";
import { Button, Table } from 'antd';
import { useState } from "react";
import { Navigate } from "react-router-dom";

const columns = [
  {
    title: 'Número',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Quarteirão',
    dataIndex: 'block',
    key: 'block',
  },
  {
    title: 'Responsável',
    dataIndex: 'headOfFamily',
    key: 'headOfFamily',
    render: (text) => <a className="block text-blue-300">{text}</a>
  },
  {
    title: 'Rua',
    dataIndex: 'street',
    key: 'street',
  },
  {
    title: 'Contacto',
    dataIndex: 'telephone',
    key: 'telephone',
  }
];

const data = [
  {
    number: 342,
    block: "24",
    headOfFamily: 'John Brown',
    street: 'New York No. 1 Lake Park',
    telephone: "846689073"
  },
  {
    number: 567,
    block: "11",
    headOfFamily: 'Alice Smith',
    street: 'San Francisco St. 123',
    telephone: "555-123-4567"
  },
  {
    number: 123,
    block: "7B",
    headOfFamily: 'Michael Johnson',
    street: 'Chicago Ave. 789',
    telephone: "555-789-1234"
  },
  {
    number: 987,
    block: "42",
    headOfFamily: 'Emily Davis',
    street: 'Los Angeles Rd. 456',
    telephone: "555-987-6543"
  },
  {
    number: 234,
    block: "15",
    headOfFamily: 'David Wilson',
    street: 'Boston Blvd. 321',
    telephone: "555-321-7890"
  },
  {
    number: 876,
    block: "8C",
    headOfFamily: 'Olivia Harris',
    street: 'Miami Dr. 654',
    telephone: "555-654-3210"
  }
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

export function Properties() {
  return (
    <div className="mt-12 mb-4 flex flex-col">
      <Card>
        <CardHeader variant="gradient" className="flex justify-between items-center mb-8 p-4 bg-primary">
          <Typography variant="h6" color="white">
            Propriedas Registadas
          </Typography>
          
          <Button type="primary" size="large" className="bg-white text-[#0E749B] font-semibold">
            Registar
          </Button>
        </CardHeader>

        <CardBody className="overflow-x-scroll px-0 p-2">
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </CardBody>
      </Card>
    </div>
  );
}

export default Properties;
