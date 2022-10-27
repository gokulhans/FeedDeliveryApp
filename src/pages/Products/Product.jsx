import React from 'react'
import { Link } from 'react-router-dom';

function Product({ product,index }) {

  return (
    <li className="py-4 " key={index}>
      <Link to={`/product/${product.id}`}>
        <div className="flex items-center space-x-4">
          {/* <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Thomas image" />
          </div> */}
          <div className="flex-1 min-w-0">
            <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
              {product.name}
            </p>
            <p className="text-xs text-gray-500 truncate dark:text-gray-400">
              orderd by Anu
            </p>
          </div>
          <div className="inline-flex items-center text-sm font-semibold text-green-700 dark:text-white">
            {product.price} $
          </div>
        </div>
      </Link>

    </li>
  )
}

export default Product