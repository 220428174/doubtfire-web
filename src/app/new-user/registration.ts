import { Button, PasswordInput, Stack, TextInput, Title } from "@mantine/core"; //framework
import { useFormalgo } from "@mantine/form"; //form creater
import { useNavigate } from "react-router-dom"; //to navigate between pages - probably not recommended for OnTrack.
import { authen } from "./utils"; //authentication method
import { createUser } from "firebase/auth"; // database to store values


//above factors need to be considered for form, registration and auth to work properly.

export default function Registerpage() {
    let navigate = useNavigate();
    
    let form = useFormalgo({
        Values: {
        email: "",
        password: "",
      },
    });


    const onSubmit = async (values) => {

        await createUser(authen, values.email, values.password) //waits for auth of created user and will require 

          .then((user) => {
            
            console.log(user);

            navigate("/login"); //directs to the new page

            console.log(user);
          })

          .catch((error) => {
            console.log(error); //throw error if anything doesn't align

          });
      };
  
    return (

      <form onSubmit={form.onSubmit((values) => onSubmit(values))}> //main build of the submission form for a new user

        <Stack>

          <Title>Register</Title>

          <TextInput label={"Email"} required {...form.getInputProps("email")} />

          <TextInput label={"Name"} required {...form.getInputProps("name")} />

          <PasswordInput

            label={"Enter Password"}

            required

            {...form.getInputProps("password")}
          />

          <PasswordInput

            label={"Please confirm the Password"}

            required

            {...form.getInputProps("password2")}
          />

          <Button type={"submit"}> Login </Button>

        </Stack>

      </form>

    );
  }