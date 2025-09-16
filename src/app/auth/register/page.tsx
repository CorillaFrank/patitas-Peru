import { Container, Card, Heading, Flex, Text, Link } from "@radix-ui/themes";
import SigninUp from "@/components/SigninUp";
import NavLink from "next/link";
function RegisterPage() {
  //componente basico de React
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0 ">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p7">
            <Heading>Regrístrate</Heading>
            <SigninUp />
            <Flex justify="between" my="4">
              <Text>Cuenta Nueva</Text>
              <Link asChild>
                <NavLink href="/auth/login" passHref>
                  Ya tengo una cuenta!
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}
export default RegisterPage;
