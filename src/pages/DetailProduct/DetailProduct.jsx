import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import svg from "../../assets/svg";
import FormKarton from "./components/FormKarton";
import Alerts from "../../components/Alerts";
import FormDus from "./components/FormDus";
import FormSablon from "./components/FormSablon";
import FormSticker from "./components/FormSticker";
import FormStandingPouch from "./components/FormStandingPouch";

const DetailProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(parseInt(productId));
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
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6">
              <div className="mb-5">
                <Link to="/" className="flex items-center mb-3">
                  <HiOutlineArrowSmLeft className="text-2xl mr-3" />
                  <span className="leading-10">Kembali</span>
                </Link>
              </div>
              <img src={svg.karton} alt="karton" className="w-full" />
              <p className="text-3xl mb-[6px]">Karton</p>
              <h1 className="!text-[45px] mb-[6px] text-orange-900">
                Box A1 Pound
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem temporibus hic dolorem maiores nostrum a quidem
                explicabo enim quasi eum, esse nisi rem soluta ipsa doloremque
                tempore laboriosam asperiores quas vitae sunt aliquam magni et
                numquam? Explicabo doloremque ea impedit dolore adipisci iste
                sed, commodi tenetur reiciendis, esse dolorum eius illum veniam
                praesentium molestiae assumenda. Culpa consequatur, incidunt
                facere molestiae quae repudiandae quos magni illum facilis
                assumenda natus pariatur. Numquam accusantium repellat fuga!
                Nisi excepturi magni similique dolores reiciendis rem? Numquam
                corrupti alias ipsum fugit laudantium deserunt saepe eaque
                mollitia aperiam iure explicabo sint ad tempore quas eos,
                tenetur perferendis.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 pt-14">
              <div className="form-content md:px-10">{form}</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DetailProduct;
