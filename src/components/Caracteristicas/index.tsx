import { Grid, GridItem } from "@chakra-ui/react";
import ListaCaracteristica from "./ListaCaratectistica";

export default function Caracteristicas() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["8", "30"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <ListaCaracteristica icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <ListaCaracteristica icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <ListaCaracteristica icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <ListaCaracteristica icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <ListaCaracteristica icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
