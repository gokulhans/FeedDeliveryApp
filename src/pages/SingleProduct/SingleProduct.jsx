import React from 'react'
import { useParams } from 'react-router-dom';
import { query, collection, getDoc, doc } from 'firebase/firestore';
import { db } from './../../firebase-config';
import { useEffect } from 'react';
import { useState } from 'react';
import { setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';


function SingleProduct() {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [status, setStatus] = useState("deliverd");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function ProjectGet(id) {
      const docRefq = doc(db, "orders", id);
      try {
        const docSnap = await getDoc(docRefq);
        setProduct(docSnap.data())
        setName(docSnap.data().hostel)
        setDesc(docSnap.data().desc)
        setPrice(docSnap.data().price)
        setLoading(false);
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

  if (isLoading) {

    return (
      <div className="spinner">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    )
  }
  {
    return (
      <div className='pt-5 px-8 flex flex-col justify-start items-start'>
        <p className="pt-5 text-4xl font-bold leading-none text-green-600 dark:text-white">{product.hosteldata.name}</p>
        <h5 className="pt-3 text-2xl font-bold leading-none text-gray-900 dark:text-white">{product.product}</h5>

        <div className="my-3">
          <p className="pt-2 text-md font-semibold leading-none text-gray-600 dark:text-white">{product.hosteldata.address}</p>
          <p className="pt-2 text-md font-semibold leading-none text-gray-600 dark:text-white">{product.hosteldata.phone}</p>
          <p className="pt-2 text-md font-semibold leading-none text-green-600 dark:text-white">{product.hosteldata.users} orders</p>
          <p className="pt-2 text-md font-semibold leading-none text-gray-600 dark:text-white">{product.itemtype}</p>
          <p className="pt-5 text-4xl font-bold leading-none text-green-600 dark:text-white">{product.price}</p>
        </div>

        <iframe src={product.hosteldata.location} width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        {/* <button className='fixed bottom-20 left-0 right-0 h-12 w-full rounded text-white font-semibold'>
          <div className='bg-blue-500 mx-5 py-3 h-12 rounded text-white font-semibold'>
            <i className="fa-solid fa-location-dot mr-3"></i>Track Location
          </div>
        </button> */}

        <button onClick={editProject} className='fixed bottom-5 left-0 right-0 h-12 w-full rounded text-white font-semibold'>
          <div className='bg-green-500 mx-5 py-3 h-12 rounded text-white font-semibold'>
            <i className="fa-solid fa-truck"></i> Mark as Deliverd
          </div>
        </button>

      </div>
    )
  }
}

export default SingleProduct