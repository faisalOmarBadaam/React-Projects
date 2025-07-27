import Modal from "react-modal";
import { useState } from "react";

export default function ShowDialog({ isOpen, onClose, onSubmit }) {
  const [item, setItem] = useState("");
  const [money, setMoney] = useState("");
  const [isExpense, setIsExpense] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ item, money: +money, isExpense });
    onClose();
    setItem("");
    setMoney("");
    setIsExpense(true);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Add New Transaction
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="type"
              checked={isExpense}
              onChange={() => setIsExpense(true)}
              className="form-radio"
            />
            <span className="ml-2 text-red-600">Expense</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="type"
              checked={!isExpense}
              onChange={() => setIsExpense(false)}
              className="form-radio"
            />
            <span className="ml-2 text-green-600">Income</span>
          </label>
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </form>
    </Modal>
  );
}
