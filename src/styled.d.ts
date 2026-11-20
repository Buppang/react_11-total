import "styled-components";
import { lightTheme } from "./contexts/theme/Theme.ts";

type Theme = typeof lightTheme;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
