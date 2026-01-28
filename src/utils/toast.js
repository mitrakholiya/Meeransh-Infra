// utils/copy.js
import toast from "react-hot-toast";

export const copyToClipboard = async (text, label = "Text") => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(`${label} copied`);
  } catch (err) {
    toast.error("Copy failed");
  }
};
