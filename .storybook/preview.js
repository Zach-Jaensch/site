import { RouterContext } from "next/dist/shared/lib/router-context";
import * as NextImage from "next/image";
import theme from "../src/theme";
import { muiTheme } from "storybook-addon-material-ui";

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [muiTheme([theme])];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Atom", "Molecule", "Organism", "Page"],
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
