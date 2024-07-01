/* eslint-disable no-console */
"use client";
import { useState, FormEvent, useRef, useCallback } from "react";

export const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const lastSubmitTime = useRef<number>(0);
  const cooldownPeriod = 10000; // 10 secondes en millisecondes

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const now = Date.now();

      if (now - lastSubmitTime.current < cooldownPeriod) {
        setResult(
          `Veuillez attendre ${Math.ceil(
            (cooldownPeriod - (now - lastSubmitTime.current)) / 1000,
          )} secondes avant de renvoyer un message.`,
        );

        return;
      }

      if (isSubmitting) {
        return;
      }

      setIsSubmitting(true);
      setResult("Envoi en cours...");
      const formData = new FormData(e.currentTarget);

      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_MAILER_KEY as string,
      );

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          setResult("Envoi du mail réussi.");
          if (formRef.current) {
            formRef.current.reset();
          }
          lastSubmitTime.current = now;
        } else {
          setResult(data.message);
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi du formulaire:", error);
        setResult("Une erreur s'est produite lors de l'envoi du formulaire.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [isSubmitting],
  );

  return (
    <section className="h-screen flex items-center" id="contact">
      <div className="mx-auto mt-8 p-6 bg-gray-500 backdrop-blur-md bg-opacity-5  rounded-lg shadow-xl">
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Nom
            </label>
            <input
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="name"
              name="name"
              placeholder="Votre nom"
              type="text"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="email"
              name="email"
              placeholder="votre@email.com"
              type="email"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Téléphone
            </label>
            <input
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="phone"
              name="phone"
              placeholder="06.11.22.33.44"
              type="phone"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="message"
              name="message"
              placeholder="Votre message"
              rows={4}
            />
          </div>
          <div>
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
        {result && (
          <div className="mt-4 text-center text-sm font-medium text-gray-700">
            {result}
          </div>
        )}
      </div>
    </section>
  );
};
