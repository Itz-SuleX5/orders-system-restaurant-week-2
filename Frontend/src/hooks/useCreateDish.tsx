import { useState } from "react";

type Form = {
  name: string;
  category: number | string;
  price: number | string;
  description: string;
  img: File | null;
  is_active: boolean;
};

export function useCreateDish(setShowCreateForm: (v: boolean) => void) {
  const [form, setForm] = useState<Form>({
    name: "",
    category: 1,
    price: 1,
    description: "",
    img: null,
    is_active: true,
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { name, type } = target as any;
    let value: any;

    if (type === "checkbox") {
      value = (target as HTMLInputElement).checked;
    } else if (type === "file") {
      value = (target as HTMLInputElement).files?.[0] ?? null;
    } else if (type === "number") {
      const v = (target as HTMLInputElement).value;
      value = v === "" ? "" : Number(v);
    } else {
      value = target.value;
    }

    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (file: File | null) => {
    setForm(prev => ({ ...prev, img: file }));
  };

  const handleToggle = (checked: boolean) => {
    setForm(prev => ({ ...prev, is_active: checked }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setSuccess(false);

    const token = localStorage.getItem("access") ?? "";

    const fd = new FormData();
    fd.append("name", String(form.name));
    fd.append("category", String(form.category));
    fd.append("price", String(form.price));
    fd.append("description", String(form.description));
    if (form.img) fd.append("image", form.img);
    fd.append("is_active", String(form.is_active));

    const res = await fetch("http://127.0.0.1:8000/api/restaurant/dishes/", {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      body: fd,
    });

    if (!res.ok) {
      const text = await res.text();
      setSuccess(false);
      throw new Error(text || "Error creating dish");
    }

    const data = await res.json();
    setSuccess(true);
    setShowCreateForm(false);
    return data;
  };

  return { form, setForm, success, handleChange, handleFileChange, handleToggle, handleSubmit };
}