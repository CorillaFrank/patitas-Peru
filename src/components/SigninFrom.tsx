"use client";
import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";
//el controller es quien va conterner los inputs que nosotros queremos validar y capturar los datos
//Solo se usa cuando el input es creado por nosotros si no por un tercero somo TextField de radix
function SigninFrom() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: { email: "", password: "" },
  });
  const onSubmit = handleSubmit((data) => {
    //lo que hara handleSubmit es enviarnos los datos del formulario que estemos escribiendo
    console.log(data);
  });
  console.log(errors);
  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2" className="mt-4">
        <label htmlFor="email">Email</label>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="email" //para capturar el nombre del formulario
            control={control} //el control que viene del useForm y lo que hace es controlar los datos del formulario
            rules={{
              required: {
                message: "El email es obligatorio",
                value: true,
              },
            }}
            render={({ field }) => {
              //field captura los datos del input y render es lo que vamos a mostrar
              //lo que vamos a retornar que es el texfield de nuestro input lo vamos a guardar en la variable name
              return (
                <TextField.Input //este es el input de radix
                  type="email"
                  placeholder="email@gmail.com"
                  autoFocus
                  {...field} //aqui es donde se capturan los datos del input y lo pasaras al field de render
                />
              );
            }}
          />
        </TextField.Root>
        {errors.email && (
          <Text color="red" className="text-xs">
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
                message: "La contraseña es obligatorio",
                value: true,
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input //este es el input de radix
                  type="password"
                  placeholder="********"
                  {...field} //aqui es donde se capturan los datos del input y lo pasaras al field de render
                />
              );
            }}
          />
        </TextField.Root>
        {errors.password && (
          <Text color="red" className="text-xs">
            {errors.password.message}
          </Text>
        )}
        <Button type="submit">Sign in</Button>
      </Flex>
    </form>
  );
}
export default SigninFrom;
