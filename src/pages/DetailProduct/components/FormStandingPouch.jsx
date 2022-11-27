import React, { useState } from 'react';
import { Buffer } from 'buffer';
import { BsCartPlus, BsFillCloudPlusFill } from 'react-icons/bs';
import { postOrder } from '../../../services/api';
import { IoIosArrowDown } from 'react-icons/io';
import dummyData from './dummyDataForm';
import regex from '../../../services/regex';
import ErrorMessage from '../../../components/Alerts/ErrorMessage';
import { MdDelete, MdPermMedia } from 'react-icons/md';
import { CgSpinner } from 'react-icons/cg';

const { number: NUMBER_REGEX } = regex;

const FormStandingPouch = ({ productId, setAlertSuccess, setAlertFail }) => {
  const [fields, setFields] = useState({});
  const user = localStorage.getItem('user');
  const [isUploadDesign, setIsUploadDesign] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLetterBtnLoading, setIsLetterBtnLoading] = useState(false);
  const [isIconBtnLoading, setIsIconBtnLoading] = useState(false);
  const [validFields, setValidFields] = useState({
    order_specification: false,
    order_design: false,
    order_quantity: false,
    order_design_image: false,
  });

  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.getAttribute('name')]: e.target.value,
    });
  }

  function handleDesign(e) {
    e.preventDefault();
    if (e.target.value === 'swadesign') {
      setIsUploadDesign(true);
    } else {
      setIsUploadDesign(false);
    }
  }

  function handleFile(e) {
    if (e.target.files[0] !== '' && e.target.files[0].size < 3000000) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFields({
            ...fields,
            order_design_image: {
              name: file.name,
              data: Buffer.from(e.target.result).toString('base64'),
            },
          });
        };
        reader.readAsDataURL(file);
      }
    }
  }

  function removeFile() {
    setFields({
      ...fields,
      order_design_image: null,
    });
  }

  const validateFieldsHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'order_specification':
        setValidFields({
          ...validFields,
          order_specification: value !== '' && value !== '0',
        });
        break;
      case 'order_design':
        setValidFields({
          ...validFields,
          order_design: value !== '' && value !== '0',
        });
        break;
      case 'order_quantity':
        setValidFields({
          ...validFields,
          order_quantity: NUMBER_REGEX.test(value),
        });
        break;
      default:
        break;
    }
  };

  const valids =
    fields.order_design === 'swadesign'
      ? validFields.order_specification &&
        validFields.order_design &&
        validFields.order_quantity &&
        validFields.order_design_image
      : validFields.order_specification &&
        validFields.order_design &&
        validFields.order_quantity;

  async function handleSubmit(e, isLetterBtn, isIconBtn) {
    e.preventDefault();

    const finalSpesification =
      fields.order_design === 'swadesign'
        ? {
            panjang_1: parseInt(fields?.order_specification.split(' ')[0]),
            lebar_1: parseInt(fields?.order_specification.split(' ')[3]),
            order_design: fields?.order_design,
            order_quantity: parseInt(fields?.order_quantity),
            order_design_image: fields?.order_design_image.data,
          }
        : {
            panjang_1: parseInt(fields?.order_specification.split(' ')[0]),
            lebar_1: parseInt(fields?.order_specification.split(' ')[3]),
            order_design: fields?.order_design,
            order_quantity: parseInt(fields?.order_quantity),
          };
    setIsLoading(true);
    if (isLetterBtn) {
      setIsLetterBtnLoading(true);
    } else if (isIconBtn) {
      setIsIconBtnLoading(true);
    }

    if (user) {
      if (valids) {
        await postOrder
          .post(`/cart/${productId}`, finalSpesification, {
            headers: {
              'x-access-token': `${JSON.parse(user).data.token}`,
            },
          })
          .then(() => {
            setAlertSuccess(true);
            setIsLoading(false);
            setIsLetterBtnLoading(false);
            setIsIconBtnLoading(false);
          })
          .catch((err) => {
            console.log(err);
            removeFile();
            setAlertFail(true);
            setIsLoading(false);
            setIsLetterBtnLoading(false);
            setIsIconBtnLoading(false);
          });
      } else {
        setAlertFail(true);
        setIsLoading(false);
        setIsLetterBtnLoading(false);
        setIsIconBtnLoading(false);
      }
    } else {
      setAlertFail(true);
      setIsLoading(false);
      setIsLetterBtnLoading(false);
      setIsIconBtnLoading(false);
    }
  }

  return (
    <form>
      {/* spesifikasi */}
      <div className="relative">
        <label
          htmlFor="spesifikasi"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Spesifikasi
          <span className="text-primary-900 font-semibold">*</span>
        </label>
        <select
          id="spesifikasi"
          name="order_specification"
          required
          onChange={(e) => {
            handleChange(e);
            validateFieldsHandler(e);
          }}
          className={`input-field-select-xs ${
            fields.order_specification &&
            !validFields.order_specification &&
            'field-error'
          }`}
          aria-invalid={validFields.order_specification ? 'false' : 'true'}
          aria-describedby="orderSpecificationField"
        >
          <option value="0">Pilih Spesifikasi</option>
          {dummyData.dummySpecification.map((item, index) => (
            <option
              value={`${item.size.p} cm X ${item.size.l} cm ${item.lamination}`}
              key={index}
            >
              {item.size.p} cm X {item.size.l} cm {item.lamination}
            </option>
          ))}
        </select>
        <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
        {fields.order_specification && !validFields.order_specification && (
          <ErrorMessage
            referenceId="orderSpecifiationField"
            message="Masukkan spesifikasi produk dengan benar."
            isPasswordField={false}
          />
        )}
      </div>
      {/* order design */}
      <div className="mt-4 relative">
        <label
          htmlFor="desain"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Desain
          <span className="text-primary-900 font-semibold">*</span>
        </label>
        <select
          id="desain"
          name="order_design"
          required
          onChange={(e) => {
            handleChange(e);
            handleDesign(e);
            validateFieldsHandler(e);
          }}
          className={`input-field-select-xs ${
            fields.order_design && !validFields.order_design && 'field-error'
          }`}
          aria-invalid={validFields.order_design ? 'false' : 'true'}
          aria-describedby="orderDesignField"
        >
          <option value="0">Pilih Desain</option>
          {dummyData.dummyDesign.map((item, index) => (
            <option
              value={item.value}
              key={index}
            >
              {item.desc}
            </option>
          ))}
        </select>
        <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
        {fields.order_design && !validFields.order_design && (
          <ErrorMessage
            referenceId="orderDesignField"
            message="Pilih desain yang diinginkan."
            isPasswordField={false}
          />
        )}
      </div>
      {isUploadDesign && (
        <div className="mt-4">
          <label
            htmlFor="uploadDesign"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Unggah Desain
            <span className="text-primary-900 font-semibold">*</span>
          </label>
          <div className="w-full p-12 border-2 border-gray-500 border-dashed rounded-lg flex items-center justify-center bg-gray-100">
            <div>
              <div className="relative mb-5">
                <input
                  type="file"
                  id="uploadDesign"
                  name="order_design_image"
                  className="absolute appearance-none w-full h-full opacity-0 cursor-pointer"
                  required
                  onChange={(e) => {
                    setValidFields({
                      ...validFields,
                      order_design_image:
                        e.target.value !== '' &&
                        e.target.files[0].size < 3000000,
                    });
                    handleFile(e);
                  }}
                  aria-invalid={
                    validFields.order_design_image ? 'false' : 'true'
                  }
                  aria-describedby="orderDesignImgField"
                />
                <div className="button-fill cursor-pointer">
                  <BsFillCloudPlusFill className="inline-block text-xl fill-white mr-2" />
                  Upload
                </div>
              </div>
              <p className="text-center font-semibold">Support files</p>
              <p className="text-center text-sm">PDF, JPG, PNG</p>
            </div>
          </div>
          {!validFields.order_design_image && (
            <ErrorMessage
              referenceId="orderDesignImgField"
              message="File harus kurang dari 3MB"
              isPasswordField={false}
            />
          )}
          {fields.order_design_image && validFields.order_design_image && (
            <div className="flex items-center justify-between rounded-lg bg-orange-600 px-5 py-4 mt-4">
              <p className="truncate">
                <MdPermMedia className="text-2xl fill-dark mr-3 inline-block" />
                {fields.order_design_image.name}
              </p>

              <button
                onClick={removeFile}
                type="button"
              >
                <MdDelete className="text-2xl fill-red-600 ml-4" />
              </button>
            </div>
          )}
        </div>
      )}
      {/* order laminasi */}
      {/* <div className="mt-4 relative">
        <label
          htmlFor="laminasi"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Laminasi
        </label>
        <select
          id="laminasi"
          name="laminasi"
          onChange={(e) => handleChange(e)}
          className="input-field-select-xs"
        >
          <option>Pilih Laminasi</option>
          <option value="1">Jasa Laminasi</option>
          <option value="2">Tanpa Laminasi</option>
        </select>
        <IoIosArrowDown className="absolute right-4 top-[43px] text-lg fill-gray-400" />
      </div> */}
      {/* order quantity */}
      <div className="mt-4">
        <label
          htmlFor="jumlah"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Jumlah Pesanan
          <span className="text-primary-900 font-semibold">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            id="jumlah"
            name="order_quantity"
            placeholder="Masukkan Jumlah Pesanan"
            required
            onChange={(e) => {
              handleChange(e);
              validateFieldsHandler(e);
            }}
            className={`input-field-xs !pr-12 ${
              fields.order_quantity &&
              !validFields.order_quantity &&
              'field-error'
            }`}
            aria-invalid={validFields.order_quantity ? 'false' : 'true'}
            aria-describedby="orderQuantityField"
          />
          <span className="text-gray-400 absolute right-3 top-[11px]">pcs</span>
          {fields.order_quantity && !validFields.order_quantity && (
            <ErrorMessage
              referenceId="orderQuantityField"
              message="Masukkan jumlah pesanan dengan benar dan sesuai."
              isPasswordField={false}
            />
          )}
        </div>
      </div>
      {/* button */}
      <div className="buttons flex justify-end mt-8 gap-5">
        <button
          onClick={(e) => handleSubmit(e, true, false)}
          className={`button-fill !py-4 flex items-center justify-center ${
            isLoading ? '!bg-primary-600' : ''
          }`}
          type="submit"
          disabled={isLoading}
        >
          {isLetterBtnLoading ? (
            <>
              <CgSpinner className="animate-spin text-xl mr-2 icon-white" />
              Pesan Sekarang
            </>
          ) : (
            <>Pesan Sekarang</>
          )}
        </button>
        <button
          className={`button-white !p-4 ${isLoading ? '!bg-gray-100' : ''}`}
          onClick={(e) => handleSubmit(e, false, true)}
          type="submit"
          disabled={isLoading}
        >
          {isIconBtnLoading ? (
            <CgSpinner className="animate-spin text-xl" />
          ) : (
            <BsCartPlus
              size={20}
              className="mx-auto"
            />
          )}
        </button>
      </div>
    </form>
  );
};

export default FormStandingPouch;
