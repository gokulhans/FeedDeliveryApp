import React from 'react'
import { useParams } from 'react-router-dom';
import { query, collection, getDoc, doc } from 'firebase/firestore';
import { db } from './../../firebase-config';
import { useEffect } from 'react';
import { useState } from 'react';
import { setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function SingleProduct() {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [status, setStatus] = useState("deliverd");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function ProjectGet(id) {
      const docRefq = doc(db, "products", id);
      try {
        const docSnap = await getDoc(docRefq);
        setProduct(docSnap.data())
        setName(docSnap.data().name)
        setDesc(docSnap.data().desc)
        setPrice(docSnap.data().price)
        // setStatus(docSnap.data().status)
      } catch (error) {
        console.log(error)
      }
    }
    ProjectGet(id)
  }, []);

  const productsCollectionRef = collection(db, "products");
  let navigate = useNavigate();

  const editProject = async () => {
    await setDoc(doc(db, "products", id), {
      name: name,
      desc: desc,
      price: price,
      status: status,
    });
    navigate("/");
  };


  return (
    <div className='pt-5 px-8 flex flex-col justify-start items-start'>
      <h5 className="pt-3 text-3xl font-bold leading-none text-gray-900 dark:text-white">{product.name}</h5>

      <p className="pt-5 text-sm font-medium leading-none text-gray-600 dark:text-white">{product.desc}</p>

      {/* <p className="pt-5 text-xl font-bold leading-none text-green-600 dark:text-white">Address</p> */}
      <p className="pt-5 text-lg font-bold leading-none text-green-600 dark:text-white">Gokul</p>
      <p className="pt-2 text-md font-semibold leading-none text-gray-600 dark:text-white">Kattangel</p>
      {/* <p className="pt-2 text-md font-semibold leading-none text-gray-900 dark:text-white">Poolakode</p> */}
      <p className="pt-2 text-md font-semibold leading-none text-gray-600 dark:text-white">PIN:- 673601</p>
      <p className="pt-2 text-md font-semibold leading-none text-gray-600 dark:text-white">Kozhikode,Kerala,India</p>
      <p className="pt-2 text-md font-semibold leading-none text-gray-600 dark:text-white">7034598461</p>
      <p className="pt-5 text-4xl font-bold leading-none text-green-600 dark:text-white">{product.price} $</p>

      <button className='fixed bottom-20 left-0 right-0 h-12 w-full rounded text-white font-semibold'>
        <div className='bg-blue-500 mx-5 py-3 h-12 rounded text-white font-semibold'>
          <i className="fa-solid fa-location-dot mr-3"></i>Track Location
        </div>
      </button>

      <button onClick={editProject} className='fixed bottom-5 left-0 right-0 h-12 w-full rounded text-white font-semibold'>
        <div className='bg-green-500 mx-5 py-3 h-12 rounded text-white font-semibold'>
          <i className="fa-solid fa-truck"></i> Mark as Deliverd
        </div>
      </button>

    </div>
  )
}

export default SingleProduct