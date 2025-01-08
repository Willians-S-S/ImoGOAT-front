"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contato: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !assunto || !descricao) {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: descricao,
      email: email,
      assunto: assunto,
    };

    emailjs
      .send(
        "service_57wkygj",
        "template_5iqiid5",
        templateParams,
        "t6bn4rh4rwAS8joJl"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setAssunto("");
          setDescricao("");
        },
        (err) => {
          console.error("Erro ao enviar o email: ", err);
        }
      );
  };

  return (
    <section className="max-w-4xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-teal-600">
        Contato
      </h1>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700 text-center mb-4">
          Entre em contato com os criadores do{" "}
          <span className="text-teal-500">ImoGOAT</span>
        </h3>
        <form
          className="bg-white p-6 rounded-lg shadow-md"
          onSubmit={sendEmail}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="assunto"
              className="block text-sm font-medium text-gray-700"
            >
              Assunto
            </label>
            <input
              type="text"
              id="assunto"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="descricao"
              className="block text-sm font-medium text-gray-700"
            >
              Descrição
            </label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              rows={5}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
            >
              Submeter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contato;
