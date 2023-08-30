import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import KaijuMan from "./KaijuMan/KaijuMan.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  KaijuMan: new KaijuMan({
    x: 96,
    y: -86,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 2
  }),
  Sprite1: new Sprite1({
    x: -168,
    y: -83,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70.22298641279792,
    visible: true,
    layerOrder: 1
  }),
  Sprite2: new Sprite2({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 99.26470588235294,
    visible: true,
    layerOrder: 5
  }),
  Sprite3: new Sprite3({
    x: 82,
    y: -89,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 70,
    visible: true,
    layerOrder: 3
  }),
  Sprite4: new Sprite4({
    x: 45,
    y: -18,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
