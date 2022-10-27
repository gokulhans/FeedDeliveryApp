import React from 'react'
import Product from '../Products/Product'
import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
import { auth, db } from '../../firebase-config';
import { where } from 'firebase/firestore';
import { query } from 'firebase/firestore';
import Footer from './../../components/Footer/Footer';

function Home() {

  const [productListBreakfast, setProductListBreakfast] = useState([]);
  const [productListLunch, setProductListLunch] = useState([]);
  const [productListDinner, setProductListDinner] = useState([]);
  const productCollectionRefBreakfast = query(collection(db, "orders"),where("status", "==", "todeliver"),where("itemtype", "==", "Breakfast"))
  const productCollectionRefLunch = query(collection(db, "orders"),where("status", "==", "todeliver"),where("itemtype", "==", "Lunch"))
  const productCollectionRefDinner = query(collection(db, "orders"),where("status", "==", "todeliver"),where("itemtype", "==", "Dinner"))
  // where("status", "==", "todeliver")
  // let userid = localStorage.getItem("authorid");
  // const productCollectionRef = query(collection(db, "products"), where("author.id", "==", userid))

  useEffect(() => {
    onSnapshot(productCollectionRefBreakfast, (snapshot) => {
      setProductListBreakfast(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  useEffect(() => {
    onSnapshot(productCollectionRefLunch, (snapshot) => {
      setProductListLunch(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  useEffect(() => {
    onSnapshot(productCollectionRefDinner, (snapshot) => {
      setProductListDinner(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <>

      <div className="p-5 sm:mt-12 w-full max-w-xl bg-white rounded-lg sm:border sm:shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h5 className="pt-3 text-xl font-bold leading-none text-gray-900 dark:text-white">Breakfast</h5>
          {/* <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </a> */}
        </div>
        <div className="px-3">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {productListBreakfast.map((product, index) => {
              return (
                <Product key={index} product={product} />
              )
            })}
          </ul>
        </div>
      </div>

      <div className="p-5 sm:mt-12 w-full max-w-xl bg-white rounded-lg sm:border sm:shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h5 className="pt-3 text-xl font-bold leading-none text-gray-900 dark:text-white">Lunch</h5>
          {/* <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </a> */}
        </div>
        <div className="px-3">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {productListLunch.map((product, index) => {
              return (
                <Product key={index} product={product} />
              )
            })}
          </ul>
        </div>
      </div>

      <div className="p-5 sm:mt-12 w-full max-w-xl bg-white rounded-lg sm:border sm:shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h5 className="pt-3 text-xl font-bold leading-none text-gray-900 dark:text-white">Dinner</h5>
          {/* <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </a> */}
        </div>
        <div className="px-3">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {productListDinner.map((product, index) => {
              return (
                <Product key={index} product={product} />
              )
            })}
          </ul>
        </div>
      </div>

      <div className='fixed bottom-0 inset-x-0 z-50'> <Footer /> </div>
    </>

  )
}

export default Home