"use client";

import { useState, Fragment } from "react";
import { Dialog, Transition, Menu, Listbox, Disclosure, Popover, Switch } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";

export default function HeadlessUIShowcase() {
  // State for Dialog
  const [isOpen, setIsOpen] = useState(false);

  // State for Listbox
  const people = ["Africk", "Monika", "John", "Lisa"];
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  // State for Switch
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Headless UI Showcase</h1>

      {/* Disclosure */}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="px-4 py-2 bg-blue-600 text-white rounded">
              {open ? "Hide Details" : "Show Details"}
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 bg-gray-100 rounded">
              This is a Disclosure component (accordion).
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Popover */}
      <Popover className="relative">
        <Popover.Button className="px-4 py-2 bg-green-600 text-white rounded">
          Open Popover
        </Popover.Button>
        <Popover.Panel className="absolute z-10 p-4 bg-white border rounded shadow">
          This is a Popover content 🎉
        </Popover.Panel>
      </Popover>

      {/* Menu */}
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="px-4 py-2 bg-purple-600 text-white rounded flex items-center">
          Options <ChevronDownIcon className="ml-2 h-4 w-4" />
        </Menu.Button>
        <Menu.Items className="absolute mt-2 w-40 bg-white border rounded shadow">
          <Menu.Item>
            {({ active }) => (
              <button className={`block w-full px-4 py-2 ${active ? "bg-gray-100" : ""}`}>
                Profile
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button className={`block w-full px-4 py-2 ${active ? "bg-gray-100" : ""}`}>
                Settings
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>

      {/* Listbox */}
      <div className="w-60">
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
          <Listbox.Button className="w-full px-4 py-2 bg-gray-200 rounded flex justify-between">
            {selectedPerson}
            <ChevronDownIcon className="h-4 w-4" />
          </Listbox.Button>
          <Listbox.Options className="mt-1 bg-white border rounded shadow">
            {people.map((person) => (
              <Listbox.Option key={person} value={person} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={`px-4 py-2 cursor-pointer ${
                      active ? "bg-gray-100" : ""
                    } ${selected ? "font-bold" : ""}`}
                  >
                    {person}
                    {selected && <CheckIcon className="inline ml-2 h-4 w-4 text-green-600" />}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>

      {/* Switch */}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-300"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white`}
        />
      </Switch>
      <p className="text-sm">Switch is {enabled ? "ON" : "OFF"}</p>

      {/* Dialog */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Open Dialog
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="bg-white p-6 rounded shadow">
              <Dialog.Title className="font-bold text-lg">Dialog Title</Dialog.Title>
              <Dialog.Description>This is the Dialog content.</Dialog.Description>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-gray-200 rounded"
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
