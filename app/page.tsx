"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import authService from "@/shared/services/AuthService";
import { toast } from "react-toastify";
import LoadingButton from "@/shared/components/LoadingButton/LoadingButton";
import { useState } from "react";
import { redirect } from 'next/navigation';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, } = useForm();

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    authService
      .login(email, password)
      .then(({ access_token }: { access_token: string }) => {
        authService.storeToken(access_token);
        toast.success("Authenticado");
        redirect('/jobs/list')
      })
      .finally(() => setLoading(false));
  };

  return (
    <main className="main flex items-center justify-center w-full h-full">
      <div className="prose">
        <h2 className="prose-h2 text-center">Welcome to wfa jobs</h2>

        <div>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
            />

            <input
              type="password"
              placeholder="Your Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password")}
            />

            <LoadingButton
              type="submit"
              loading={loading}
              className="btn btn-primary"
            >
              Logar
            </LoadingButton>
          </form>
        </div>
      </div>
    </main>
  );
}
