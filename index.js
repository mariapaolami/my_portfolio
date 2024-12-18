document.addEventListener("DOMContentLoaded", function() {
  // Funzione per applicare TypeIt a un elemento
  function applyTypeIt(selector, animations) {
    const element = document.querySelector(selector);
    if (element) {
      let instance = new TypeIt(selector, { lifeLike: false, speed: 0 });
      animations(instance);
      instance.go();
    }
  }

  // Animazioni specifiche per ciascuna pagina
  const animations = {
    "#welcome": (instance) => {
      instance
        .delete(6, { instant: true })
        .pause(1187)
        .type("e")
        .pause(309)
        .delete(1)
        .pause(172)
        .delete(1)
        .pause(1357)
        .type("W")
        .pause(361)
        .type("e")
        .pause(189)
        .type("l")
        .pause(261)
        .type("c")
        .pause(85)
        .type("o")
        .pause(240)
        .type("m")
        .pause(180)
        .type(" ")
        .pause(474)
        .delete(1)
        .pause(95)
        .type("e")
        .pause(130)
        .type(" ")
        .pause(680)
        .type("t")
        .pause(145)
        .type("o")
        .pause(129)
        .type(" ")
        .pause(631)
        .type("m")
        .pause(258)
        .type("y")
        .pause(23)
        .type("t")
        .pause(370)
        .delete(1)
        .pause(262)
        .type("y")
        .pause(280)
        .type(" ")
        .pause(221)
        .delete(1)
        .pause(159)
        .delete(1)
        .pause(96)
        .type(" ")
        .pause(259)
        .type("p")
        .pause(155)
        .type("o")
        .pause(100)
        .type("r")
        .pause(1046)
        .type("t")
        .pause(495)
        .type("f")
        .pause(69)
        .type("o")
        .pause(245)
        .type("l")
        .pause(129)
        .type("i")
        .pause(101)
        .type("o");
    },
    "#projects": (instance) => {
      instance
        .delete(23, { instant: true })
        .type("A")
        .pause(144)
        .type("l")
        .pause(156)
        .type("l")
        .pause(280)
        .type(" ")
        .pause(249)
        .type("m")
        .pause(221)
        .type("y")
        .pause(1153)
        .delete(1)
        .pause(517)
        .delete(1)
        .pause(30)
        .delete(1)
        .pause(31)
        .delete(1)
        .pause(29)
        .delete(1)
        .pause(30)
        .delete(1)
        .pause(3215)
        .type("a")
        .pause(235)
        .type("l")
        .pause(179)
        .type("l")
        .pause(130)
        .type(" ")
        .pause(185)
        .type("m")
        .pause(295)
        .type("y")
        .pause(291)
        .type(" ")
        .pause(349)
        .type("p")
        .pause(147)
        .type("r")
        .pause(99)
        .type("o")
        .pause(235)
        .type("j")
        .pause(116)
        .type("e")
        .pause(384)
        .type("c")
        .pause(251)
        .type("t")
        .pause(276)
        .type("s");
    },
    "#profile": (instance) => {
      instance
        .type("P")
        .pause(200)
        .type("r")
        .pause(150)
        .type("o")
        .pause(100)
        .type("f")
        .pause(200)
        .type("i")
        .pause(150)
        .type("l")
        .pause(100)
        .type("e");
    },
    "#reseauxSociaux": (instance) => {
      instance
        .type("R")
        .pause(200)
        .type("é")
        .pause(150)
        .type("s")
        .pause(100)
        .type("e")
        .pause(200)
        .type("a")
        .pause(150)
        .type("u")
        .pause(100)
        .type("x")
        .pause(200)
        .type(" ")
        .pause(150)
        .type("S")
        .pause(100)
        .type("o")
        .pause(200)
        .type("c")
        .pause(150)
        .type("i")
        .pause(100)
        .type("a")
        .pause(200)
        .type("u")
        .pause(150)
        .type("x");
    }
  };

  // Applica animazioni in base alla pagina
  for (const selector in animations) {
    if (document.querySelector(selector)) {
      applyTypeIt(selector, animations[selector]);
    }
  }
});
