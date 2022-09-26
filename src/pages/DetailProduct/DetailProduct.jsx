import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Zoom from 'react-img-zoom';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { dummyImg } from '../../assets/image';
import FormKarton from './components/FormKarton';
import Alerts from '../../components/Alerts';
import FormDus from './components/FormDus';
import FormSablon from './components/FormSablon';
import FormSticker from './components/FormSticker';
import FormStandingPouch from './components/FormStandingPouch';

const DetailProduct = () => {
  const { productId } = useParams();
  const product = parseInt(productId);
  const [form, setForm] = useState();
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertFail, setAlertFail] = useState(false);
  console.log(typeof product);

  // Use Custom Hook
  // useEffect(()=>{
  //   const getItem = async()=>{
  //     const response = await axios.get('blablabla').then(resp => setproduct(resp))
  //   }
  // },[])

  // Set Dynamic Form
  useEffect(() => {
    switch (product) {
      case 1:
        return setForm(
          <FormKarton
            setAlertSuccess={setAlertSuccess}
            setAlertFail={setAlertFail}
          />
        );
      case 2:
        return setForm(
          <FormDus
            categoryName="Slobokan"
            setAlertSuccess={setAlertSuccess}
            setAlertFail={setAlertFail}
          />
        );
      case 3:
        return setForm(
          <FormSablon
            setAlertSuccess={setAlertSuccess}
            setAlertFail={setAlertFail}
          />
        );
      case 4:
        return setForm(
          <FormSticker
            setAlertSuccess={setAlertSuccess}
            setAlertFail={setAlertFail}
          />
        );
      case 5:
        return setForm(
          <FormStandingPouch
            setAlertSuccess={setAlertSuccess}
            setAlertFail={setAlertFail}
          />
        );
      default:
        break;
    }
  }, [product]);

  return (
    <>
      <main>
        {alertSuccess && (
          <Alerts
            background="bg-green-100"
            textColor="text-green-600"
            textContent="Pemesanan Berhasil"
            closeButton="true"
          />
        )}
        {alertFail && (
          <Alerts
            background="bg-red-100"
            textColor="text-red-600"
            textContent="Login Terlebih Dahulu"
            closeButton="true"
          />
        )}
        <section className="containers">
          <div className="mb-5 mt-0 xs:mt-7 flex">
            <Link
              to="/produk-kemasan"
              className="flex items-center mb-3"
            >
              <HiOutlineArrowSmLeft className="text-2xl mr-3" />
              <span className="leading-10">Kembali</span>
            </Link>
          </div>
          <div className="grid grid-systems gap-8 ">
            <div className="col-span-4 2xsm:col-span-8 2md:col-span-6">
              <div className="p-6 border rounded-xl mb-5 border-secondary-800/50">
                {/* <img
                  src={dummyImg.kardus}
                  alt="kardus"
                  className="w-full"
                /> */}
                <div className="w-full overflow-auto flex justify-center items-center">
                  <div>
                    <Zoom
                      img={dummyImg.kardus}
                      zoomScale={2}
                      height={window.innerWidth < 576 ? 227 : 360}
                      width={window.innerWidth < 576 ? 340 : 540}
                    />
                  </div>
                </div>
              </div>
              <p className="text-3xl">
                Bahan: <span>Karton</span>
              </p>
              <h2 className="text-orange-900 mb-2">Box A1 Pound</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem temporibus hic dolorem maiores nostrum a quidem
                explicabo enim quasi eum, esse nisi rem soluta ipsa doloremque
                tempore laboriosam asperiores quas vitae sunt aliquam magni et
                numquam? Explicabo doloremque ea impedit dolore adipisci iste
                sed, commodi tenetur reiciendis.
              </p>
            </div>
            <div className="col-span-4 2xsm:col-span-8 2md:col-span-6">
              <div className="form-content 2md:px-10">{form}</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DetailProduct;
