import { useMemo, useState } from "react";
import ShowDialog from "./Dialog";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

export default function ExpanseTracker() {
  const [bills, setBills] = useState([
    { item: "back1", money: 500, isExpense: true },
    { item: "back2", money: 500, isExpense: true },
    { item: "back3", money: 500, isExpense: false },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const COLORS = ["#38A169", "#E53E3E"];
  function handleBillsSubmit(bill) {
    if (bill) {
      const temp = [...bills, bill];
      setBills(temp);
    }
  }
  function handleDeleteCard(currentIndex, isExpense) {
    const Expenses = bills.filter((item) => item.isExpense);
    const Incomes = bills.filter((item) => item.isExpense === false);

    if (isExpense) {
      const temp = Expenses.filter((_, index) => index !== currentIndex);
      console.log(temp);

      setBills([...Incomes, ...temp]);
    } else {
      const temp = Incomes.filter((_, index) => index !== currentIndex);

      setBills([...Expenses, ...temp]);
    }
  }

  const TotalExpenses = useMemo(() => {
    return bills.reduce(
      (sum, { money, isExpense }) => sum + (isExpense ? money : 0),
      0
    );
  }, [bills]);
  const TotalIncome = useMemo(() => {
    return bills.reduce(
      (sum, { money, isExpense }) => sum + (!isExpense ? money : 0),
      0
    );
  }, [bills]);

  const chartData = [
    { name: "Income", value: TotalIncome },
    { name: "Expense", value: TotalExpenses },
  ];
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-blue-600">Expense Tracker</h1>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex-1 space-y-4">
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-500 text-lg">
              Balance is ${TotalIncome - TotalExpenses}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-gray-600">Total Income</p>
              <p className="mt-2 text-2xl font-semibold text-green-600">
                ${TotalIncome}
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-gray-600">Total Expense</p>
              <p className="mt-2 text-2xl font-semibold text-red-600">
                ${TotalExpenses}
              </p>
            </div>
          </div>
        </div>

        <div className="w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={40}
                outerRadius={80}
                startAngle={90}
                endAngle={-270}
                paddingAngle={2}
              >
                {chartData.map((_, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => `$${value}`}
                wrapperStyle={{ outline: "none" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="text-right">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add New Transaction
        </button>
      </div>
      <ShowDialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleBillsSubmit}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-red-600 mb-4">Expense</h2>
          <ul className="space-y-3">
            {bills
              .filter((item) => item.isExpense)
              .map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between bg-red-50 border-l-4 border-red-400 p-4 rounded-lg"
                >
                  <span>{item.item}</span>
                  <span className="font-semibold text-red-600">
                    - ${item.money}
                  </span>
                  <span
                    onClick={() => {
                      handleDeleteCard(index, item.isExpense);
                    }}
                    className="font-bold cursor-pointer"
                  >
                    ×
                  </span>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-600 mb-4">Income</h2>
          <ul className="space-y-3">
            {bills
              .filter((item) => !item.isExpense)
              .map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between bg-green-50 border-l-4 border-green-400 p-4 rounded-lg"
                >
                  <span>{item.item}</span>
                  <span className="font-semibold text-green-600">
                    + ${item.money}
                  </span>
                  <span
                    onClick={() => {
                      handleDeleteCard(index, item.isExpense);
                    }}
                    className=" font-bold cursor-pointer"
                  >
                    ×
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
