class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your answer");
    this.playButton = createButton("Submit");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 + 30);
    this.playButton.position(width / 2 - 90, height / 2 + 80);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  
  handleMousePressed(){
    this.playButton.mousePressed(()=> {
      this.input.hide()
      this.playButton.hide()
      background("black");
      /*var name=this.input.value()
      var message="hello "+ name*/
      textSize(55)
      var message=`</br>Thanks for the response ...`
      this.greeting.html(message)
      clearCanvas();
    })
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
