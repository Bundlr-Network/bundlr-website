import { Dialog, Transition } from '@headlessui/react'

import Button from '../Button'
import { Fragment } from 'react'
import React from 'react'

interface AlertModalProps {
  handleConfirmation: () => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const AlertModal = ({ handleConfirmation, isOpen }: AlertModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => null}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="align-center mt-16 w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-center shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="relative flex w-full justify-center text-center font-robotoMono text-lg font-medium uppercase leading-6 text-gray-900"
                >
                  Friendly reminder
                </Dialog.Title>

                <div className="mt-6 font-robotoMono text-gray-500">
                  In order for the verification process to work,{' '}
                  <b>do not change the message of the tweet</b>, and remember to
                  return to the website after tweeting to verify the message.
                </div>

                <div className="mt-6 flex items-center justify-center">
                  <Button onClick={handleConfirmation} className="w-full">
                    I understand.
                  </Button>
                </div>
                {/* 
                <button
                  type="button"
                  onClick={handleConfirmation}
                  className="bg-gradient mt-4 flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  I understand.
                </button> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default AlertModal
