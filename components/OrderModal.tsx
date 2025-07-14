'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X } from 'lucide-react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  order: any;
};

export default function OrderModal({ isOpen, onClose, order }: ModalProps) {
  if (!order) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Disable background scroll */}
        <div className="fixed inset-0 overflow-y-auto bg-black/30 backdrop-blur-sm">
          <div className="flex min-h-screen items-center justify-center px-4 py-8 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>

                <Dialog.Title className="text-xl font-bold mb-2">
                  🧾 Order {order.id}
                </Dialog.Title>
                <p className="text-sm text-gray-500 mb-4">
                  Placed on {new Date(order.date).toLocaleDateString()}
                </p>

                <div className="space-y-1 text-sm">
                  <p><strong>Name:</strong> {order.name}</p>
                  <p><strong>Email:</strong> {order.email}</p>
                  <p><strong>Address:</strong> {order.address}</p>
                </div>

                <hr className="my-4" />

                <h3 className="text-md font-semibold mb-2">Items</h3>
                <ul className="space-y-1 text-sm">
                  {order.items.map((item: any) => (
                    <li key={item.id} className="flex justify-between">
                      <span>{item.name} × {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between font-bold mt-4 text-lg">
                  <span>Total:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
