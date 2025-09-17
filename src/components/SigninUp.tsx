"use client";
import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "@/lib/supabaseClient";
function SigninUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: { name: "", email: "", password: "" } });
  const onSubmit = handleSubmit(async(data) => {
    const {name,email,password}=data;
    const {error} = await supabase.from("users").insert([
      {
         name, email, password,
         role: "user",  //podemos agregar un avatar
      }
    ])
    if(error){
      console.error("Error de registrado usuario",error.message);
      alert("Error al registrar usuario");
    }else{
      alert("Usuario registrado con exito");
    }
  });
  console.log(errors);
  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2" className="mt-4">
        <label htmlFor="name">Nombre</label>
        <TextField.Root>
          <TextField.Slot>
            <PersonIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            rules={{
              required: {
                message: "El Nombre es obligatorio",
                value: true,
              },
            }}
            name="name"
            control={control}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="text"
                  placeholder="Nombre"
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>
        {errors.name && (
          <Text color="red" className="text-xs">
            {" "}
            {errors.name.message}
          </Text>
        )}
        <label htmlFor="email">Email</label>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            rules={{
              required: {
                message: "El Email es obligatorio",
                value: true,
              },
            }}
            name="email"
            control={control}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="email"
                  placeholder="email@gmail.com"
                  autoFocus
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>
        {errors.email && (
          <Text color="red" className="text-xs">
            {" "}
            {errors.email.message}
          </Text>
        )}
        <label htmlFor="password">Password</label>
        <TextField.Root>
          <TextField.Slot>
            <LockClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                message: "El Password es obligatorio",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  type="password"
                  placeholder="*********"
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>
        {errors.password && (
          <Text color="red" className="text-xs">
            {" "}
            {errors.password.message}
          </Text>
        )}
        <Button>Registrar</Button>
      </Flex>
    </form>
  );
}
export default SigninUp;
