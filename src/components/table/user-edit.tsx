"use client";

import { editUser } from "@/repositorys/user";
import { FormButton } from "../button/form-button";
import { useModal } from "../modal/provider";
import { toast } from "sonner";

interface Props {
    id: number;
    email: string;
    name: string;
    role: string;
}

export default function EditUserModal({ id, email, name, role }: Props) {
    const modal = useModal();
    return (
        <button
            onClick={() => modal?.show(<FormEdit id={id} email={email} name={name} role={role} />)}
            className="rounded-xl border border-yellow-500 bg-yellow-500 px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-white hover:text-yellow-500 active:bg-stone-100 dark:border-stone-700 dark:hover:border-stone-200 dark:hover:bg-yellow-500 dark:hover:text-white dark:active:bg-stone-800"
        >
            Edit
        </button>
    );
}



const FormEdit = ({ id, email, name, role }: Props) => {
    return (<>

        <div className="mx-auto w-full max-w-[550px] bg-white border-2 rounded-xl">
            <form className="py-6 px-9" 
              action={async (data: FormData) => {
                editUser(data)
                  .then(async (res) => {
                    if (res?.error) {
                      toast.error(res.error);
                    } else {
                   
                      toast.success(`Successfully!`);
                    }
                  })
                  .catch((err: Error) => toast.error(err.message))
              }}
              method="POST">
                <input name="id" hidden value={id}/>
                <div className="mb-5">
                    <label htmlFor="email" className="mb-3 text-center px-2 py-5 block text-base font-medium text-[#07074D]">
                        Edit
                    </label>
                    <input type="email" defaultValue={email} name="email" id="email" placeholder="example@domain.com" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md" />
                </div>
                <div>
                    <FormButton classNames="w-full rounded-xl border border-yellow-500 bg-yellow-500 px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-white hover:text-yellow-500 active:bg-stone-100 dark:border-stone-700 dark:hover:border-stone-200 dark:hover:bg-black dark:hover:text-white dark:active:bg-stone-800">Confirm</FormButton>
                </div>
            </form>
        </div>




    </>)
}