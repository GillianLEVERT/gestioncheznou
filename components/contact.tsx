/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
"use client";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { useState, FormEvent, useRef, useCallback, useEffect } from "react";

export const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRgpdChecked, setIsRgpdChecked] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const lastSubmitTime = useRef<number>(0);
  const cooldownPeriod = 20000;
  const resultTimeout = useRef<NodeJS.Timeout | null>(null);

  const clearResult = useCallback(() => {
    setResult("");
  }, []);

  useEffect(() => {
    return () => {
      if (resultTimeout.current) {
        clearTimeout(resultTimeout.current);
      }
    };
  }, []);

  const setTemporaryResult = useCallback(
    (message: string) => {
      setResult(message);
      if (resultTimeout.current) {
        clearTimeout(resultTimeout.current);
      }
      resultTimeout.current = setTimeout(clearResult, 5000);
    },
    [clearResult],
  );

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isRgpdChecked) {
        setTemporaryResult(
          "Veuillez accepter la politique RGPD avant d'envoyer le formulaire.",
        );

        return;
      }

      const now = Date.now();

      if (now - lastSubmitTime.current < cooldownPeriod) {
        setTemporaryResult(
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
          setTemporaryResult("Envoi du mail réussi.");
          if (formRef.current) {
            formRef.current.reset();
          }
          setIsRgpdChecked(false);
          lastSubmitTime.current = now;
        } else {
          setTemporaryResult(data.message);
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi du formulaire:", error);
        setTemporaryResult(
          "Une erreur s'est produite lors de l'envoi du formulaire.",
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [isSubmitting, setTemporaryResult, isRgpdChecked],
  );

  const handleRgpdChange = (checked: boolean) => {
    setIsRgpdChecked(checked);
  };

  return (
    <section className="h-screen flex items-center" id="contact">
      <div className="mx-auto mt-8 p-6 transparent rounded-lg shadow-xl">
        <form ref={formRef} className="space-y-4" onSubmit={onSubmit}>
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
              type="name"
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
              placeholder="0611223344"
              type="phone"
            />
          </div>
          <div>
            <Checkbox
              id="rgpd_check"
              isSelected={isRgpdChecked}
              name="rgpd_check"
              onValueChange={handleRgpdChange}
            >
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="rgpd_check"
              >
                J'accepte la conservation de mes données selon
                <Link className="text-blue-500" href="/rgpd">
                  {" "}
                  la politique RGPD de Gestion chez Nou.
                </Link>
              </label>
            </Checkbox>
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
            <Button
              className="w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              disabled={isSubmitting || !isRgpdChecked}
              type="submit"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </Button>
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
