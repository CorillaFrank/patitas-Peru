import { Container, Card, Heading, Flex, Text, Link } from "@radix-ui/themes";
import SigninFrom from "@/components/SigninFrom";
import NavLink from "next/link";
function loginPage() {
  //componente basico de React
  return (
    <>
      <Container size="1" height="100%" className="p-3 md:p-0 ">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p7">
            <Heading>Sing in</Heading>
            <SigninFrom />
            <Flex justify="between" my="4">
              <Text>No tengo una cuenta?</Text>
              <Link asChild>
                <NavLink href="/auth/register" passHref>
                  Registrate!
                </NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}
export default loginPage;
