import { ChangeEvent } from "react";

export interface TextAreaType {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function TextArea({ placeholder, onChange, value }: TextAreaType) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className="flex w-full gap-4 px-5 py-3 border rounded-md text-dark focus-within:border-red-500 bg-secondary">
      <textarea
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="my-auto bg-transparent outline-none"
      ></textarea>
    </div>
  );
}
