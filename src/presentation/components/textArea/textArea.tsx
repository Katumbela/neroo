export interface TextAreaType {
  placeholder: string;
}

export function TextArea({ placeholder }: TextAreaType) {
  return (
    <div className="flex w-full gap-4 px-5 py-3 border rounded-md text-dark focus-within:border-red-500 bg-secondary">
      <textarea
        rows={4}
        placeholder={placeholder}
        className="my-auto bg-transparent outline-none"
      ></textarea>
    </div>
  );
}
