import paper from "paper";

let canvas = document.getElementById("canvas");
paper.setup(canvas);

var circle = new paper.Shape.Circle(new paper.Point(100, 100), 50);
circle.fillColor = "red";

paper.view.onFrame = (event) => {
  if (event.count % 60 === 0) {
    circle.set({
      fillColor: {
        red: Math.random(),
        green: Math.random(),
        blue: Math.random()
      }
    });
  }
};
