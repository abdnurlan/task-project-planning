import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Table, Button, Pagination, Select, Input } from "antd";
import type { PlanningData } from "../types/PlanningData";

const data: PlanningData[] = [
  {
    documentNumber: "1213213",
    projectName: "Layihə1",
    planningYear: 2025,
    description: "İllik planlama11",
    volumeDivision: "Bərabər Bölünmə",
    status: "Aktiv",
  },
  {
    documentNumber: "1213213",
    projectName: "Layihə1",
    planningYear: 2025,
    description: "İllik planlama11",
    volumeDivision: "Tarixi Məlumatlara Əsaslanan Bölüş",
    status: "Deaktiv",
  },
];

const columns = [
  {
    title: "Sənədin nömrəsi",
    dataIndex: "documentNumber",
    key: "documentNumber",
  },
  {
    title: "Layihə adı",
    dataIndex: "projectName",
    key: "projectName",
  },
  {
    title: "Planlamanın aid olduğu il",
    dataIndex: "planningYear",
    key: "planningYear",
  },
  {
    title: "Təsvir",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Həcmi bölünmə",
    dataIndex: "volumeDivision",
    key: "volumeDivision",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Podratçı şirkət üzrə planlama</h1>

            <div className="flex items-center gap-4">
              <Input placeholder="Axtarış edin" className="w-64" allowClear />
              <Button type="default">Cədvəl tənzimləmələri</Button>
              <Button type="default">Filtrləri təmizlə</Button>
              <Button type="primary" danger>
                Yeni planlama
              </Button>
            </div>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
          />
          <div className="flex justify-between items-center mt-4">
            <span>Total 85 items</span>
            <Pagination defaultCurrent={6} total={85} />
            <Select defaultValue="10 / page" style={{ width: 120 }}>
              <Select.Option value="10">10 / page</Select.Option>
              <Select.Option value="20">20 / page</Select.Option>
              <Select.Option value="50">50 / page</Select.Option>
            </Select>
          </div>
        </main>
      </div>
    </div>
  );
}
