import { PaletteColorOptions, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPaletteOptions {
    detailRed: PaletteColorOptions;
    bgWhite: PaletteColorOptions;
  }

  interface PaletteOptions extends CustomPaletteOptions {}
}
