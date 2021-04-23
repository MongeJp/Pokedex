import { getTypeColor } from "../utils/colors";

export class Pokemon {
  id: string;
  name: string;
  order: string;
  image: string;
  mainType: string;
  mainColor: string;
  abilities: [];
  types: [];
  stats: [];

  constructor(data: any) {
    this.id = data.id.toString();
    this.name = data.name;
    this.order = this.getNumberOrder(this.id);
    this.image = data.sprites.front_default;
    this.mainType = data.types[0].type.name;
    this.mainColor = this.getBackgroundColor(this.mainType);
    this.abilities = data.abilities;
    this.types = data.types;
    this.stats = data.stats;
  }

  // get the color linked to this type of pokemon
  getBackgroundColor(type: string) {
    return getTypeColor(type);
  }

  // format id to get the number order
  getNumberOrder = (id: string): string => {
    return id.padStart(3, "0");
  };
}
