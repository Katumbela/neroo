import React from "react";
import { ElementType, ChangeEvent } from "react";

export interface InputType {
    icon: ElementType;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export function Input({ icon: Icon, placeholder, value, onChange }: InputType) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex w-full gap-4 px-5 py-3 border rounded-md text-dark focus-within:border-red-500 bg-secondary">
      <Icon className="my-auto text-primary" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="w-full my-auto bg-transparent outline-none"
      />
    </div>
  );
}
