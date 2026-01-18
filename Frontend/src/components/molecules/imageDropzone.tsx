import { useDropzone } from 'react-dropzone';
import { CloudUpload } from 'lucide-react';
import React, { useEffect } from 'react';

type Props = {
  className?: string;
  onFileChange?: (file: File | null) => void;
};

export default function ImageDropzone({ className = '', onFileChange }: Props) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      'image/png': [],
      'image/jpeg': [],
      'image/gif': [],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: false,
  });

  useEffect(() => {
    const file = acceptedFiles[0] ?? null;
    onFileChange?.(file ?? null);
  }, [acceptedFiles, onFileChange]);

  return (
    <section className={`w-full ${className}`}>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition"
      >
        <input {...getInputProps()} />
        <CloudUpload className="mx-auto h-12 w-12 text-slate-400" />
        <p className="mt-2 text-sm text-gray-600">
          <strong className="text-cyan-700">Subir Imagen</strong> o arrastrar aquí<br />
          <span className="text-xs text-gray-400">PNG, JPG, GIF hasta 10MB</span>
        </p>
      </div>

      {acceptedFiles.length > 0 && (
        <aside className="mt-4">
          <h4 className="text-sm font-semibold mb-2">Archivos seleccionados:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {acceptedFiles.map(file => (
              <li key={(file as any).path ?? file.name}>
                {(file as any).path ?? file.name} – {(file.size / 1024).toFixed(1)} KB
              </li>
            ))}
          </ul>
        </aside>
      )}
    </section>
  );
}