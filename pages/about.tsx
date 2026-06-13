import { Blockquote } from "@chakra-ui/react"
import Header from "@/components/header"

export default function About() {
  return (
    <>
    <Header />
  <h1>About Me</h1>
   <Blockquote.Root>
      <Blockquote.Content>
        If anyone thinks he is something when he is nothing, he deceives
        himself. Each one should test his own actions. Then he can take pride in
        himself, without comparing himself to anyone else.
      </Blockquote.Content>
    </Blockquote.Root>
    </>
  )
}