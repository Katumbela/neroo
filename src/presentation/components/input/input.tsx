import { ElementType } from "react";

export interface InputType {
    icon: ElementType;
    placeholder: string;
}

export function Input({ icon: Icon, placeholder }: InputType) {
  return (
    <div className="flex w-full gap-4 px-5 py-3 border rounded-md text-dark focus-within:border-red-500 bg-secondary">
      <Icon className="my-auto text-primary" />
      <input
        type="text"
        placeholder={placeholder}
        className="my-auto bg-transparent outline-none"
      />
    </div>
  );
}
