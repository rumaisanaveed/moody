export enum FontTypes {
  Regular = "Regular",
  SemiBold = "SemiBold",
  Bold = "Bold",
}

export const FontVariations = {
  "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
  "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
  "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
};

const font = (type: FontTypes, size: number, color: string) => {
  return {
    fontFamily: `Poppins-${type}`,
    fontSize: size,
    color,
  };
};

const Regular = (size = 16, color = "") => {
  return font(FontTypes.Regular, size, color);
};

const SemiBold = (size = 16, color = "") => {
  return font(FontTypes.SemiBold, size, color);
};

const Bold = (size = 16, color = "") => {
  return font(FontTypes.Bold, size, color);
};

export { Bold, font, Regular, SemiBold };
