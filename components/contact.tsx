/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
"use client";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { useState, FormEvent, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

import map from "@/public/map2.png";

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
    <section
      className="xl:h-screen h-[1200px] flex items-center flex-col relative"
      id="contact"
    >
      <h1 className="text-4xl font-bold text-center mb-8 mt-20 text-secondary-700 drop-shadow-2xl ">
        Contact
      </h1>
      <div className="2xl:w-1/3 xl:w-1/2 p-4 text-lg 2xl:text-xl flex justify-center">
        Ne perdez plus de temps et contactez moi.
      </div>
      <div className="container px-5 py-20 md:mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 py-10 xl:px-10 md:px-4 px-2 flex items-end justify-start relative shadow-xl">
          <div className="absolute inset-0 sm:static">
            <Image
              alt="map"
              className="inset-0 absolute h-full sm:w-full sm:object-cover overflow-x-hidden"
              src={map}
            />
          </div>
          <div className="bg-secondary-200 relative flex flex-wrap py-6 rounded shadow-md px-4">
            <div className="">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESSE
              </h2>
              <p className="mt-1 mb-2">45220 CHUELLES</p>
              <Link
                className="py-4 text-xl text-secondary-700"
                href="https://www.google.com/maps/@47.9985298,2.9667853,14.75z?entry=ttu"
              >
                <FaMapMarkerAlt />
              </Link>
            </div>
            <div className="lg:w-1/2 sm:px-6  mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <Link
                className="text-secondary-700 leading-relaxed"
                href="mailto:gestioncheznou@outlook.fr"
              >
                gestioncheznou@outlook.fr
              </Link>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>

              <Link
                className="text-secondary-700 leading-relaxed"
                href="tel:0615817045"
              >
                06.15.81.70.45
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto  p-6 ">
          <form ref={formRef} className="space-y-4" onSubmit={onSubmit}>
            <input
              name="subject"
              type="hidden"
              value="Nouveau mail provenant du site internet."
            />
            <input
              name="from_name"
              type="hidden"
              value="GestionchezNou site internet Ne pas répondre"
            />
            <input name="name" type="hidden" value="GestionChezNou" />

            <div>
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="name"
              >
                Nom ou Société
              </label>
              <input
                required
                className="mt-1 block w-full px-3 py-2 bg-secondary-200 border border-gray-300 rounded-md shadow-sm text-black placeholder-secondary-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="name"
                name="name"
                placeholder="Votre nom ou nom de société, ou les deux."
                type="name"
              />
            </div>

            <div>
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                required
                className="mt-1 block w-full px-3 py-2 bg-secondary-200  border border-gray-300 rounded-md shadow-sm text-black placeholder-secondary-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="email"
                name="email"
                placeholder="votre@email.com"
                type="email"
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="phone"
              >
                Téléphone
              </label>
              <input
                required
                className="mt-1 block w-full px-3 py-2 bg-secondary-200  border border-gray-300 rounded-md shadow-sm text-black placeholder-secondary-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="phone"
                name="phone"
                pattern="[0-9]{10}"
                placeholder="0611223344"
                type="tel"
              />
            </div>
            <div>
              <Checkbox
                color="secondary"
                id="rgpd_check"
                isSelected={isRgpdChecked}
                name="rgpd_check"
                onValueChange={handleRgpdChange}
              >
                <label
                  className="mb-2 text-sm font-semibold text-gray-900"
                  htmlFor="rgpd_check"
                >
                  J'accepte la conservation de mes données selon notre{" "}
                  <Link className="text-secondary-700" href="/rgpd">
                    {" "}
                    politique RGPD
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
                className="mt-1 block w-full px-3 py-2 bg-secondary-200  border border-gray-300 rounded-md shadow-sm text-black placeholder-secondary-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="message"
                name="message"
                placeholder="Votre message"
                rows={4}
              />
            </div>
            <div>
              <Button
                className="w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary-600 hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2  disabled:opacity-30"
                isDisabled={isSubmitting || !isRgpdChecked}
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
      </div>
    </section>
  );
};
