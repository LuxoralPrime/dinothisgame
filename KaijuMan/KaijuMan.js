/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class KaijuMan extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./KaijuMan/costumes/costume1.svg", {
        x: 200.66665649414062,
        y: 103.33332824707031
      }),
      new Costume("costume2", "./KaijuMan/costumes/costume2.svg", {
        x: 122.66665649414062,
        y: 106.33332824707027
      }),
      new Costume("costume3", "./KaijuMan/costumes/costume3.svg", {
        x: 200.66665649414062,
        y: 106.84664767487328
      }),
      new Costume("costume4", "./KaijuMan/costumes/costume4.svg", {
        x: 200.66665649414062,
        y: 119.78767389223012
      })
    ];

    this.sounds = [new Sound("pop", "./KaijuMan/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage4
      )
    ];
  }

  *whenIReceiveMessage1() {
    while (true) {
      if (this.touching(Color.rgb(255, 255, 255))) {
        if (!this.touching(Color.rgb(255, 0, 0))) {
          this.y -= 3;
        }
      }
      yield;
    }
  }

  *whenIReceiveMessage2() {
    this.goto(0, -83);
    while (true) {
      /* TODO: Implement motion_ifonedgebounce */ null;
      if (this.keyPressed("right arrow")) {
        this.direction = 90;
        this.move(3);
      }
      if (this.keyPressed("left arrow")) {
        this.direction = -90;
        this.move(3);
      }
      if (this.keyPressed("down arrow")) {
        this.y -= 3;
      }
      if (this.keyPressed("up arrow")) {
        this.y += 3;
      }
      yield;
    }
  }

  *whenIReceiveMessage3() {
    while (true) {
      if (this.keyPressed("1")) {
        this.stage.vars.atk1 = 1;
        yield* this.wait(0.2);
        this.stage.vars.atk1 = 0;
        yield* this.wait(0.5);
      }
      if (this.keyPressed("2")) {
        this.stage.vars.atk1 = 2;
        yield* this.wait(0.2);
        this.stage.vars.atk1 = 0;
        yield* this.wait(0.5);
      }
      if (this.keyPressed("3")) {
        this.stage.vars.atk1 = 3;
        yield* this.wait(3);
        this.stage.vars.atk1 = 0;
        yield* this.wait(5);
      }
      yield;
    }
  }

  *whenIReceiveMessage4() {
    while (true) {
      if (this.toNumber(this.stage.vars.atk1) === 1) {
        this.costume = "costume2";
      }
      if (this.toNumber(this.stage.vars.atk1) === 0) {
        this.costume = "costume1";
      }
      if (this.toNumber(this.stage.vars.atk1) === 2) {
        this.costume = "costume3";
      }
      if (this.toNumber(this.stage.vars.atk1) === 3) {
        this.costume = "costume4";
      }
      yield;
    }
  }
}
