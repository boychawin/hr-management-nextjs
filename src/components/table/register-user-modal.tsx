"use client";

import { FormButton } from "../button/form-button";
import { useModal } from "../modal/provider";

export default function RegisterUserModal() {
  const modal = useModal();
  return (
    <button
      onClick={() => modal?.show(<FormRegister />)}
      className="rounded-xl border border-black bg-black px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-white hover:text-black active:bg-stone-100 dark:border-stone-700 dark:hover:border-stone-200 dark:hover:bg-black dark:hover:text-white dark:active:bg-stone-800"
    >
      Add User
    </button>
  );
}



const FormRegister = () => {
  return (<>

    <div className="mx-auto w-full max-w-[550px] bg-white border-2 rounded-lg">
      <form className="py-6 px-9" action="https://formbold.com/s/FORM_ID" method="POST">
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
            email:
          </label>
          <input type="email" name="email" id="email" placeholder="example@domain.com" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        <div>
          <FormButton classNames="w-full">Send</FormButton>
        </div>
      </form>
    </div>




  </>)
}