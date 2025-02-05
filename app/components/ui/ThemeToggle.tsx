import { Form, useSubmit } from "@remix-run/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

export function ThemeToggle() {
  const submit = useSubmit();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (formRef.current) {
        submit(formRef.current);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [submit]);

  return (
    <Form method="post" action="/theme" ref={formRef}>
      <input type="hidden" name="theme" value="toggle" />
      <button
        type="submit"
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 mt-4"
      >
        <SunIcon className="h-5 w-5 hidden dark:block text-gray-600 dark:text-gray-300" />
        <MoonIcon className="h-5 w-5 block dark:hidden text-gray-600 dark:text-gray-300" />
      </button>
    </Form>
  );
} 