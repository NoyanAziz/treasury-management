"use client";

import { useFormik } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";
import { CURRENCY_OPTIONS } from "~/helpers/constants";

const validationSchema = Yup.object({
  payerAccount: Yup.string()
    .required("Payer account is required")
    .length(16, "Account number must be 16 digits"),
  payeeAccount: Yup.string()
    .required("Payee account is required")
    .length(16, "Account number must be 16 digits"),
  amount: Yup.number()
    .min(1, "Amount must be greater than 0")
    .required("Amount is required"),
  currency: Yup.string()
    .oneOf(CURRENCY_OPTIONS, "Invalid currency")
    .required("Currency is required"),
});

const PaymentForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const formik = useFormik({
    initialValues: {
      payerAccount: "",
      payeeAccount: "",
      amount: "",
      currency: "",
    },
    validationSchema,
    onSubmit: (values) => {
      try {
        toast.promise(
          fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/accounts/`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          }),
          {
            loading: "Initiating payment...",
            success: async (response) => {
              if (!response.ok) {
                throw new Error(
                  `Failed to initiate payment. Status: ${response.status}`,
                );
              }

              const data = await response.json();
              return `Payment initiated successfully. Transaction ID: ${data.transactionId}`;
            },
            error: (error: Error) => {
              return error instanceof Error
                ? error.message
                : "Failed to initiate payment.";
            },
          },
        );

        formik.resetForm();
        onClose();
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred while initiating payment.",
        );
      }
    },
  });

  return (
    <>
      {isOpen && (
        <div
          id="crud-modal"
          aria-hidden={!isOpen}
          className="fixed left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-800 bg-opacity-90 md:inset-0"
          tabIndex={-1}
        >
          <div className="relative max-h-full w-full max-w-md p-4">
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Initiate Payment
                </h3>
                <button
                  onClick={onClose}
                  type="button"
                  className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form className="p-4 md:p-5" onSubmit={formik.handleSubmit}>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label
                      htmlFor="payerAccount"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Payer account
                    </label>
                    <input
                      type="text"
                      name="payerAccount"
                      id="payerAccount"
                      className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="i.e 4242424242424242"
                      value={formik.values.payerAccount}
                      onChange={(e) => {
                        formik.setFieldValue("payeeAccount", e.target.value);
                      }}
                      onBlur={formik.handleBlur}
                      maxLength={16}
                    />
                    {formik.touched.payerAccount &&
                      formik.errors.payerAccount && (
                        <div className="text-sm text-red-500">
                          {formik.errors.payerAccount}
                        </div>
                      )}
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="payeeAccount"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Payee account
                    </label>
                    <input
                      type="text"
                      name="payeeAccount"
                      id="payeeAccount"
                      className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="i.e 4242424242424242"
                      value={formik.values.payeeAccount}
                      onChange={(e) => {
                        formik.setFieldValue("payeeAccount", e.target.value);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.payeeAccount &&
                      formik.errors.payeeAccount && (
                        <div className="text-sm text-red-500">
                          {formik.errors.payeeAccount}
                        </div>
                      )}
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="amount"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Amount
                    </label>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="i.e 1000"
                      value={formik.values.amount}
                      onChange={(e) => {
                        formik.setFieldValue("amount", e.target.value);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.amount && formik.errors.amount && (
                      <div className="text-sm text-red-500">
                        {formik.errors.amount}
                      </div>
                    )}
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="currency"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Currency
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      value={formik.values.currency}
                      onChange={(e) => {
                        formik.setFieldValue("currency", e.target.value);
                      }}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Select currency</option>
                      {CURRENCY_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {formik.touched.currency && formik.errors.currency && (
                      <div className="text-sm text-red-500">
                        {formik.errors.currency}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="my-4 inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
