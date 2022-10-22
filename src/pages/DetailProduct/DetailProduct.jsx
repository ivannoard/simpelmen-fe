import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Zoom from "react-img-zoom";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { dummyImg } from "../../assets/image";
import FormKarton from "./components/FormKarton";
import Alerts from "../../components/Alerts";
import FormDus from "./components/FormDus";
import FormSablon from "./components/FormSablon";
import FormSticker from "./components/FormSticker";
import FormStandingPouch from "./components/FormStandingPouch";
import useProductDetail from "../../hooks/useProductDetail";
const DetailProduct = () => {
  const { productId } = useParams();
  const [form, setForm] = useState();
  const navigate = useNavigate();
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertFail, setAlertFail] = useState(false);
  const { data, isLoading } = useProductDetail(
    `https://simpelmen.herokuapp.com/api/product/${productId}`
  );

  // Use Custom Hook
  // useEffect(()=>{
  //   const getItem = async()=>{
  //     const response = await axios.get('blablabla').then(resp => setproduct(resp))
  //   }
  // },[])

  // Set Dynamic Form
  useEffect(() => {
    switch (data?.product_category) {
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
  }, [data]);

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
            <Link to="/" className="flex items-center mb-3">
              <HiOutlineArrowSmLeft className="text-2xl mr-3" />
              <span className="leading-10">Kembali</span>
            </Link>
          </div>
          <div className="grid grid-systems gap-8 ">
            <div className="col-span-4 2xsm:col-span-8 2md:col-span-6">
              <div className="p-6 border rounded-xl mb-5 border-secondary-800/50">
                <div className="w-full overflow-auto flex justify-center items-center rounded-xl">
                  <div>
                    {isLoading ? (
                      "isLoading"
                    ) : (
                      <img
                        src={`data:image/jpg;base64,${data?.product_image}`}
                        alt="kardus"
                        className="w-full"
                      />
                    )}
                    {/* <Zoom
                      img={`data:image/jpg;base64,${data?.product_image}`}
                      zoomScale={2}
                      height={window.innerWidth < 576 ? 227 : 360}
                      width={window.innerWidth < 576 ? 340 : 540}
                    /> */}
                  </div>
                </div>
              </div>
              {isLoading ? (
                "isLoading"
              ) : (
                <>
                  <p className="text-3xl">
                    Bahan:{" "}
                    <span>{data?.product_materials.product_material_name}</span>
                  </p>

                  <h2 className="text-orange-900 mb-2">{data?.product_name}</h2>
                  <p>{data?.product_materials.product_material_description}</p>
                </>
              )}
            </div>
            <div className="col-span-4 2xsm:col-span-8 2md:col-span-6">
              {isLoading ? (
                "isLoading"
              ) : (
                <div className="form-content 2md:px-10">{form}</div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DetailProduct;
