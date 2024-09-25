// components/ProductCard.js
export default function ProductCard({ product }) {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-4">
        <div className="mb-4 h-40 bg-gray-200 rounded">
          {/* Image placeholder */}
          <span className="text-gray-500 flex justify-center items-center h-full">
            Image Placeholder
          </span>
        </div>
        <h3 className="text-lg font-semibold">{product.dsref}</h3>
        <p className="text-gray-700">{product.dssku}</p>
        <p className="text-gray-500">REF: {product.ref}</p>
        <p className="text-gray-500">Cor: {product.dscor}</p>
        <p className="text-gray-900 font-bold">R$ {product.valor.toFixed(2)}</p>
        <p className="text-gray-500">Estoque: {product.estoque}</p>
      </div>
    );
  }
  