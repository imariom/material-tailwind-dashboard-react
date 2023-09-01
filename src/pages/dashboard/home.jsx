import { StatisticsCard } from "@/widgets/cards";
import { BanknotesIcon, ChartBarIcon, UserIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Typography
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
     async function fetchData() {
      const response = await axios.get("https://localhost:7258/api/Statistics");
      setStatistics([
      // total registered
      {
        color: "blue",
        icon: BanknotesIcon,
        title: "Total Registadas",
        value: response.data.totalProperties,
        footer: {
          color: "text-green-500",
          label: "Total",
        },
      },
      // total rented
      {
        color: "pink",
        icon: UserIcon,
        title: "Total Arrendadas",
        value: response.data.totalRented,
        footer: {
          color: "text-green-500",
          label: "Arrendadas",
        },
      },
      // total not rented
      {
        color: "green",
        icon: UserPlusIcon,
        title: "Total não arendadas",
        value: response.data.totalNotRented,
        footer: {
          color: "text-red-500",
          label: "Não arendadas",
        },
      },
      // some other
      {
        color: "orange",
        icon: ChartBarIcon,
        title: "Total não identificadas",
        value: "0",
        footer: {
          color: "text-green-500",
          label: "Não identificadas",
        },
      },
    ]);

    }

    fetchData();
  }, [statistics]);

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statistics.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>

      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Graphs go here */}
      </div>

      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Short table go here */}
      </div>
    </div>
  );
}

export default Home;
