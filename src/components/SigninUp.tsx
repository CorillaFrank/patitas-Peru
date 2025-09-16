"use client";
import { Flex, TextField, Button } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
function SigninUp() {
  return (
    <Flex direction="column" gap="2" className="mt-4">
      <label htmlFor="name">Nombre</label>
      <TextField.Root>
        <TextField.Slot>
          <PersonIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input 
        type="text" 
        placeholder="Nombre" 
        autoFocus />
      </TextField.Root>

      <label htmlFor="email">Email</label>
      <TextField.Root>
        <TextField.Slot>
          <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          type="email"
          placeholder="email@gmail.com"
          autoFocus
        />
      </TextField.Root>

      <label htmlFor="password">Password</label>
      <TextField.Root>
        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input type="password" placeholder="*********" />
      </TextField.Root>
      <Button>Registrar</Button>
    </Flex>
  );
}
export default SigninUp;
