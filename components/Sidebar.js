// components/Sidebar.js
import { useState } from "react";
import Image from "next/image"; // Importando o componente Image do Next.js
import imgSrc from "../styles/img.webp"; // Importando a imagem

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
    onFilterChange({ ...filters, [name]: value }); // Passa todos os filtros para o componente pai
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
        <div className="flex justify-center mb-4"> {/* Centraliza a imagem */}
      <Image 
        src={imgSrc} // Usando o src da imagem importada
        alt="Logo do Catálogo"
        width={150} // Definindo a largura da imagem
        height={150} // Definindo a altura da imagem
        className="mb-4" // Classe para margens
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
