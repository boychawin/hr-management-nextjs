"use client"
import React from 'react'
import RegisterUserModal from './register-user-modal'
import { PaginationButton } from '../pogination';
import DeleteUserModal from './user-delete';
import EditUserModal from './user-edit';

type Props = {
    data: any | [],
    currentPage: number
}

export default function TableUserPagination({ data, currentPage }: Props) {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-8 ">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Users
                            <span className='mx-2'>
                                <RegisterUserModal />
                            </span>
                        </h2>

                    </div>
                    <div className="my-2 flex sm:flex-row flex-col">
                        <div className="flex flex-row mb-1 sm:mb-0">
                            <div className="relative">
                                <select className=" h-full rounded-l border block appearance-none w-full  border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus: focus:border-gray-500">
                                    <option>5</option>
                                    <option>10</option>
                                    <option>20</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative">
                                <select className=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full  border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus: focus:border-gray-500">
                                    <option>All</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="block relative">
                            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                    </path>
                                </svg>
                            </span>
                            <input placeholder="Search" className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full  text-sm placeholder-gray-400 text-gray-700 focus: focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                        </div>

                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            ID                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Edit
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {data.slice(0).map(({ id, email, name, role }: any, index: number) => (
                                        <tr key={index}>
                                            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                                                {id}
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                                                {email}
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                                                {name}
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                                                {role}
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                                                <EditUserModal id={id} email={email} name={name} role={role} />
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                                                <DeleteUserModal id={id} email={email} / >
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {data?.length === 0 && (
                                <div className='text-center'>
                                    <span>No data</span>
                                </div>
                            )}

                            <PaginationButton
                                pathName="/"
                                disabled={data.length === 0}
                                currentPage={currentPage}
                            />


                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}




