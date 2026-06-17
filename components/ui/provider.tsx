"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const config = defineConfig({
  globalCss: {
    p: {
      marginTop: 4,
      marginBottom: 4,
    },
    a: {
      textDecorationThickness: "3px !important",
    },
  },
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
