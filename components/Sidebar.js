// components/Sidebar.js
import { useState } from "react";
import Image from "next/image";

export default function Sidebar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    seqgrupo: "",
    ref: "",
    dsref: "",
    sku: "",
    dssku: "",
    dscor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    onFilterChange({ ...filters, [name]: value });
  };

  const filterLabels = {
    seqgrupo: "SEQ GRUPO",
    ref: "REFERENCIA",
    dsref: "REF DESCRIÇÃO",
    sku: "SKU",
    dssku: "SKU DESCRIÇÃO",
    dscor: "COR",
  };

  return (
    <div className="bg-orange-50 p-4 shadow-lg">
      <div className="flex justify-center mb-4">
        <Image 
          src="https://drive.google.com/uc?export=view&id=1M8MdbIQ-K9GB0dFeLKWtIg_80uBjVtXQ"
          alt="Logo do Catálogo"
          width={150}
          height={150}
          className="mb-4"
        />
      </div>
      <h2 className="font-bold mb-2">Filtros</h2>
      {Object.keys(filters).map((key) => (
        <div key={key} className="mb-4">
          <label className="block mb-1 font-medium">{filterLabels[key]}:</label>
          <input
            type="text"
            name={key}
            value={filters[key]}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            placeholder={`Pesquisar por ${filterLabels[key]}`}
          />
        </div>
      ))}
    </div>
  );
}
