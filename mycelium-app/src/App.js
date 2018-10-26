import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import TextFeed from './TextFeed.js'
import './App.css';
import grey from '@material-ui/core/colors/grey';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
   "fontFamily": "\"Cormorant\", serif",
   "fontSize": 16,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  },
  palette: {
    primary: grey,
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    // Don't call this.setState() here!
    this.state = {
      textFieldValue: "",
      chapter: 'intro',
      feedItems: []
    };
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  _handleTextFieldChange(e) {
    this.setState({
      textFieldValue: e.target.value
    });
  }

  flashError() {

  }

  handleTextInput(e) {
    var newFeedObject = {
      text: e,
      type: 'user'
    }
    var newFeedItems = this.state.feedItems.concat(newFeedObject)
    var responses = this.handleTextResponse(e)
    if (responses != []) {
      for (var response of responses) {
        newFeedItems.push(response)
      }
    }

    this.setState({
      textFieldValue: "",
      feedItems: newFeedItems
    })
  }

  handleTextResponse(e) {
    var responses = []
    console.log("handling intro response", this.state.chapter, e)

    e = e.trim().toLowerCase()

    if (e == "help" || e == "?") {
      responses.push({
        text: "You are generally very weak. Try examining something that you can see.",
        type: "life"
      })
    }

    if (this.state.chapter == "intro") {
      if (e == "intro") {
        responses.push({
          text: "Fungus grows best in dark, warm, and damp places.",
          type: "user"
        })
        responses.push({
          text: "The symphonic smattering of rain is a stark contrast to the mechanical hum of a single bulb. The tempest hits strong tonight outside the concrete cell, spiteful in the face of the past months of drought. The rain disturbs old dust and old memories in their endless fields.",
          type: "life"
        })
        responses.push({
          text: "A figure lies upon a solitary cot in the middle of the cell illuminated by the bulb. It is immobile, weak. Beside the cot, a metal platter is splayed just out of reach.",
          type: "life"
        })
      }
      if (e == "examine platter") {
        responses.push({
          text: "A bowl of dull grey mush sits in the middle of the platter. No utensil. This is nutritious, but the flavor has long since boiled away.",
          type: "life"
        })
      }
      if (e == "examine cot") {
        responses.push({
          text: "You remember when the cot used to be white. The fabric is now a dull gray-yellow.",
          type: "life"
        })
      }
      if (e == "examine figure") {
        responses.push({
          text: "You are the figure. Your eyes might meander around your surroundings to examine the world. Or perhaps, there is nothing to do but dream.",
          type: "life"
        })
      }
      if (e == "examine cell" || e == "examine walls") {
        responses.push({
          text: "The walls are sealed fast. A thin window towards the top of one wall could inform the inside of the time of day.",
          type: "life"
        })
      }
      if (e == "examine window") {
        responses.push({
          text: "It is too high, and frosted. Can’t see anything but the absense or presence of light. The tempest beats upon it.",
          type: "life"
        })
      }
      if (e == "examine bulb" || e == "examine light") {
        responses.push({
          text: "The Edison bulb emits a steady hum. Dust and grime has settled on the glass, so you can’t clearly see the filament inside.",
          type: "life"
        })
      }
      if (e == "examine rain") {
        responses.push({
          text: "It has been an incredibly long time since you last heard the sound of rain.",
          type: "life"
        })
      }
      if (e == "dream") {
        responses.push({
          text: "The errata of static visible from inside your closed eyes begins to organize itself into patterns. You see a damp mesh of beautiful spores, bright like rubies, spreading outwards from a central locus in the fractal designs of doilies.",
          type: "dream1"
        })
        this.setState({chapter: "dream 1"})
      }
    }

    if (this.state.chapter == "dream 1") {
      if (e == "examine spores") {
        responses.push({
          text: "From the soft red iridescent spores blossom the heads of mushrooms. They are buzzing with color. Your nose burns with the acrid, meaty aroma of mildew.",
          type: "dream1"
        })
      }
      if (e == "examine mushrooms" || e == "examine mushroom") {
        responses.push({
          text: "The soft, pillowy caps flaunt the designs of richest fashion. These mushrooms are tortoiseshell, snakeskin, and velvet opulence.",
          type: "dream1"
        })
        responses.push({
          text: "You want to start a garden. You might take the samples of future fungus you find.",
          type: "dream1"
        })
      }
      if (e == "take mushroom" || e == "take mushrooms" || e == "eat mushrooms") {
        responses.push({
          text: "The mesh of mold bends away from your reach and the illusory mushrooms fold away with it. No matter how hard you reach, these fruits are not yours to harvest.",
          type: "dream1"
        })
        responses.push({
          text: "Perhaps you might wake up.",
          type: "dream1"
        })
      }
      if (e == "wake up") {
        responses.push({
          text: "You lie upon a solitary cot in the middle of the cell illuminated by the bulb. You are immobile, weak. Beside the cot, a metal platter is splayed just out of reach.",
          type: "life"
        })
        responses.push({
          text: "The rain is over. There is something in the air.",
          type: "life"
        })
        this.setState({chapter: "1"})
      }
    }

    if (this.state.chapter == "1" || this.state.chapter == "1a") {
      if (e == "examine platter") {
        responses.push({
          text: "A bowl of dull grey mush sits in the middle of the platter. Crowning the mush is a crust of thin, downy white mold. Minute black specks pepper its surface, so numerous and small they seem to be vibrating. Droplets of moisture sit suspended on the microscopic ends of individual hairs. The fungus slowly absorbs this moisture, molecule by molecule. ",
          type: "life"
        })
        responses.push({
          text: "This must be where the odor is coming from.",
          type: "life"
        })
        this.setState({chapter: "1a"});
      }
      if (e == "examine cot") {
        responses.push({
          text: "Nothing has changed. You remember when the cot used to be white. The fabric is now a dull gray-yellow.",
          type: "life"
        })
      }
      if (e == "examine figure") {
        responses.push({
          text: "You are the figure. Your dream has invigorated you. You wish to garden.",
          type: "life"
        })
      }
      if (e == "examine cell") {
        responses.push({
          text: "The walls are very mildly damp, like a thin layer of gloss shimmering on the concrete.",
          type: "life"
        })
      }
      if (e == "examine window") {
        responses.push({
          text: "It is silent, and probably dry outside. It is either dusk or dawn.",
          type: "life"
        })
      }
      if (e == "examine bulb" || e == "examine light") {
        responses.push({
          text: "The Edison bulb emits a hum. It flickers from time to time. Not as steady as before.",
          type: "life"
        })
      }
      if (e == "examine air") {
        responses.push({
          text: "You take a sharp inhale. Within the firm seal of the cell, a musty quality is unmistakable. It’s a new sensation. It must be coming from somewhere.",
          type: "life"
        })
      }
      if (e == "dream" && this.state.chapter == "1") {
        responses.push({
          text: "Your eyes are closed but dreams do not come. The mysterious odor permeates the room and yanks you from sleep every time you toe its line. Where is it coming from?",
          type: "life"
        })
      }
      if (e == "dream" && this.state.chapter == "1a") {
        responses.push({
          text: "A monk stands in a sea of crabs. The brilliant scarlet of the bug-like creatures’ shells blends into hue of the monk’s robes. Your ears ring with the deafening clattering of claws.",
          type: "dream2"
        })
        this.setState({chapter: "dream 2"})
      }
    }

    if (this.state.chapter.startsWith("dream 2")) {
      if (e == "examine monk") {
        if (this.state.chapter == "dream 2") {
          responses.push({
            text: "The monk’s eyes are as red as his robes. Dark, small pupils sit in the center of the red spheres. They glimmer like rubies. Oddly, it does not look out of place on his gaunt face, cut with two large cheekbones and shallow cheeks.",
            type: "dream2"
          })
        }
        if (this.state.chapter == "dream 2a") {
          responses.push({
            text: "The monk plucks the detached claw out of the sea creature’s grip. The amputated base drips colorless fluid, before a batch of brilliant mushrooms blossoms forth from the crustacean’s amputated stump. Regenerative, mentions the red-clad monk. They give new life to the dying. Small white dots pepper the surface of the nearly translucent scarlet fruit bodies.",
            type: "dream2"
          })
          this.setState({chapter: "dream 2b"})
        }
        if (this.state.chapter == "dream 2b") {
          responses.push({
            text: "Silently, he gestures towards the mushrooms.",
            type: "dream2"
          })
        }
      }
      if (e == "examine crab" || e == "examine crabs") {
        if (this.state.chapter == "dream 2") {
          responses.push({
            text: "You watch the crabs crawl over and under each other upon insectoid legs. You think they are looking at you, but there is no way to know for sure in their pitch-black stalked eyes.",
            type: "dream2"
          })
          responses.push({
            text: "One crab chatters its maw at you, and mechanically jousts a claw in your direction. This claw grabs a firm grip on its other claw and, with significant force, detaches it from its base. The crabs around it clatter loudly.",
            type: "dream2"
          })
          this.setState({chapter: "dream 2a"})
        }
        if (this.state.chapter == "dream 2a") {
          responses.push({
            text: "The crab waves its detached claw like a weapon, thrusting it in your direction. The clattering of shell on shell grows deafening.",
            type: "dream2"
          })
        }
        if (this.state.chapter == "dream 2b") {
          responses.push({
            text: "Red mushrooms continue erupting from the crab’s wound. It staggers, losing its balance from the weight of the fungus.",
            type: "dream2"
          })
        }
      }
      if ((e == "examine mushroom" || e == "examine mushrooms") && this.state.chapter == "dream 2b") {
        responses.push({
          text: "Red, dripping, beautiful. There is an erotic glisten to them.",
          type: "dream2"
        })
      }
      if ((e == "take mushroom" || e == "take mushrooms" || e == "grab mushroom" || e == "grab mushrooms") && this.state.chapter == "dream 2b") {
        responses.push({
          text: "You take a handful of mushrooms from the crab’s stub.",
          type: "dream2"
        })
        responses.push({
          text: "The monk smiles. His teeth are pointed and sharklike.",
          type: "dream2"
        })
      }
      if ((e == "eat mushroom" || e == "eat mushrooms") && this.state.chapter == "dream 2b") {
        responses.push({
          text: "You sink your teeth into the fleshy meat of a mushroom head. The gooey fluid coats your tongue. It is deep, and you wince. It is far more bitter than you expected.",
          type: "dream2"
        })
        this.setState({chapter: "dream 2c"})
      }
      if (e == "examine claw" && this.state.chapter == "dream 2a") {
        responses.push({
          text: "The monk plucks the detached claw out of the sea creature’s grip. The amputated base drips colorless fluid, before a batch of brilliant mushrooms blossoms forth from the crustacean’s amputated stump. Regenerative, mentions the red-clad monk. They give new life to the dying. Small white dots pepper the surface of the nearly translucent scarlet fruit bodies.",
          type: "dream2"
        })
        this.setState({chapter: "dream 2b"})
      }
      if (e == "talk to monk") {
        responses.push({
          text: "The characters in your dreams never seem to understand your tongue.",
          type: "dream2"
        })
      }
      if (e == "wake up") {
        if (this.state.chapter == "dream 2b") {
          responses.push({
            text: "You lie upon a solitary cot in the middle of the room illuminated by the bulb. You are immobile, weak. Beside the cot, a metal platter is splayed just out of reach.",
            type: "life"
          })
          responses.push({
            text: "The air is thick. You have a cough.",
            type: "life"
          })
          this.setState({chapter: "2"})
        }
        if (this.state.chapter == "dream 2c") {
          responses.push({
            text: "You lie upon a solitary cot in the middle of the room illuminated by the bulb. You are immobile, weak. Beside the cot, a metal platter is splayed just out of reach.",
            type: "life"
          })
          responses.push({
            text: "It is incredibly difficult to breathe. You try to cough, but your throat is blocked.",
            type: "life"
          })
          this.setState({chapter: "bad end"})
        }
        else {
          responses.push({
            text: "The monk groans deeply. You see that your feet are bound. You can't leave this dream yet.",
            type: "dream2"
          })
        }
      }
    }

    if (this.state.chapter.startsWith("2")) {
      if (e == "examine platter") {
        responses.push({
          text: "A bowl of dull grey mush sits in the middle of the platter. Crowning the mush is a crust of thin, downy white mold.",
          type: "life"
        })
        responses.push({
          text: " Small red mushrooms rise like spring flowers from the nutritious mush.",
          type: "life"
        })
      }
      if (e == "examine cot") {
        responses.push({
          text: "Nothing has changed. You remember when the cot used to be white. The fabric is now a dull gray-yellow.",
          type: "life"
        })
      }
      if (e == "examine mushrooms") {
        responses.push({
          text: "The mushrooms are each smaller than your smallest fingernail. The are covered in thin slime, just like the ones in your dream.",
          type: "life"
        })
      }
      if (e == "examine cell" || e == "examine walls") {
        responses.push({
          text: "The walls are very mildly damp, like a thin layer of gloss shimmering on the concrete. In the deepest corners, you can make out the white furry mold.",
          type: "life"
        })
      }
      if (e == "examine window") {
        responses.push({
          text: "It is silent, and probably dry outside. It quite dark.",
          type: "life"
        })
      }
      if (e == "examine bulb" || e == "examine light") {
        responses.push({
          text: "The Edison bulb emits an unsteady hum. It flickers from time to time, dangerously.",
          type: "life"
        })
      }
      if (e == "examine air" || e == "examine cough" || e == "cough" || e == "examine self" || e == "examine figure") {
        responses.push({
          text: "Your coughs are deep and heavy, roaring from the bottom of your lungs. Gooey phlegm coats your mouth and lips with each heave.",
          type: "life"
        })
      }
      if (e == "examine phlegm") {
        responses.push({
          text: "The phlegm is cloudy. If you look closely, you can see minute, barely visible black specks suspended in the mixture.",
          type: "life"
        })
      }
      if (e == "examine specks") {
        responses.push({
          text: "Spores. You smile.",
          type: "life"
        })
        this.setState({chapter: "2a"})
      }
      if (e == "dream") {
        if (this.state.chapter == "2") {
          responses.push({
            text: "Your heaving coughs prevent you from falling fully asleep. You want to see what is happening to your body.",
            type: "life"
          })
        }
        else if (this.state.chapter == "2a") {
          responses.push({
            text: "A figure lies upon a solitary cot in the middle of the cell. A useless bulb hangs in the middle of the dark room. It is immobile, weak. Beside the cot, a metal platter is splayed just out of reach.",
            type: "dream3"
          })
          this.setState({chapter: "dream 3"})
        }
      }
    }

    if (this.state.chapter.startsWith("dream 3")) {
      if (e == "examine platter") {
        responses.push({
          text: "A bowl of bright red mush sits in the middle of the platter. The contents flicker in and out of view.",
          type: "dream3"
        })
      }
      else if (e == "examine figure") {
        responses.push({
          text: "The figure is mostly motionless. Red rashes in the shape of rings the size of coins stain its pallid skin. In the dim light of bulb, the rashes seem to pulse and writhe in time with the figure’s heartbeat.",
          type: "dream3"
        })
      }
      else if (e == "examine rashes" || e == "examine body" || e == "examine skin" || e == "examine rings") {
        responses.push({
          text: "The figure suddenly jolts awake. It siezes in a coughing fit, phlegm black as night dribbling down its chin. Its eyes are dark and sunken, and a deep red color. It grips its own forearm above a particularly dark red rash. You watch as the surface of the figure’s skin bubbles with small holes, as though its pores are begging to open to release inner toxin. Tiny green heads of mushrooms wriggle out of the holes in the skin. The heavy athsmatic coughs smother the figure’s groans of agony.",
          type: "dream3"
        })
        responses.push({
          text: "More motion wriggles beneath the figure’s pallid body. Across its arms and chest, the wormlike mushrooms burrow out before fluttering open their caps. In the sliver of light afforded by the frosted window, the mushroom caps glimmer like emeralds.",
          type: "dream3"
        })
        this.setState({chapter: "dream 3a"});
      }
      else if (e.startsWith("examine")) {
        responses.push({
          text: "This dream bends and folds away from your gaze. You cannot examine this.",
          type: "dream3"
        })
      }
      else if ((this.state.chapter == "dream 3a") && (e == "take mushroom" || e == "collect mushroom" || e == "take mushrooms" || e == "collect mushrooms"  || e == "grab mushroom" || e == "grab mushrooms")) {
        responses.push({
          text: "You pluck a handful of mushrooms out of the figure’s arm.",
          type: "dream3"
        })
        responses.push({
          text: "Small holes dot his skin, loose and dark. They are moist with painful sweat and blood. If you look closely, you can see the head of new mushrooms wriggling within the holes like worms.",
          type: "dream3"
        })
        this.setState({chapter: "dream 3b"});
      }
      else if (e == "wake up") {
        if (this.state.chapter == "dream 3b") {
          responses.push({
            text: "You lie upon a solitary cot in the middle of the cell. A useless bulb hangs in the middle of the dark room. You are immobile, weak. Beside the cot, a metal platter is splayed just out of reach.",
            type: "life"
          })
          responses.push({
            text: "Your cough seems to have subsided, but your breathing is shallow. Your body aches. The room’s stench is stronger, and the walls seem damp.",
            type: "life"
          })
          this.setState({chapter: "3"});
        }
      }
      else {
        responses.push({
          text: "You lie upon a solitary cot in the middle of the room illuminated by the bulb. You are immobile, weak. Beside the cot, a metal platter is splayed just out of reach.",
          type: "life"
        })
        responses.push({
          text: "It is incredibly difficult to breathe. You try to cough, but your throat is blocked.",
          type: "life"
        })
        this.setState({chapter: "bad end"})
      }
    }

    if (this.state.chapter.startsWith("3")) {
      if (e == "examine platter") {
        responses.push({
          text: "A bed of thick, white furry mold covers the entire platter.",
          type: "life"
        })
        responses.push({
          text: "Red mushrooms have fully colonized the bowl, the largest bodies nearing the size of apples. The moisture of the bowl is nearly depleted. You wonder where your new mushrooms live.",
          type: "life"
        })
      }
      if (e == "examine cot") {
        responses.push({
          text: "Nothing has changed. You remember when the cot used to be white. The fabric is now a dull gray-yellow.",
          type: "life"
        })
      }
      if (e == "examine mushrooms") {
        responses.push({
          text: "They are opaque and colored like deep jewels.",
          type: "life"
        })
      }
      if (e == "examine cell" || e == "examine walls" || e == "examine wall") {
        responses.push({
          text: "White fur sprouts out of minute cracks in the concrete walls. Amidst the fur, tiny lime green mushroom caps sit atop long stalks in groups of three and four.",
          type: "life"
        })
      }
      if (e == "examine window") {
        responses.push({
          text: "It is silent, and probably dry outside. It pitch black.",
          type: "life"
        })
      }
      if (e == "examine bulb" || e == "examine light") {
        responses.push({
          text: "The Edison bulb emits an unsteady hum, spending about as much time on as off. Your vision is quite impeded by its variability.",
          type: "life"
        })
      }
      if (e == "examine air" || e == "examine cough" || e == "cough" || e == "examine self" || e == "examine figure") {
        responses.push({
          text: "Your skin is pale and unblemished. Your breathing is labored, but you no longer cough.",
          type: "life"
        })
      }
      if (e == "dream") {
        responses.push({
          text: "All you see is black.",
          type: "dream4"
        })
        this.setState({chapter: "dream 3"})
      }
    }

    if (this.state.chapter.startsWith("dream 4")) {
      if (e == "examine black") {
        responses.push({
          text: "It is so black it seems palpable. You reach out into the darkness and your hand connects with matter.",
          type: "dream4"
        })
      }
      if (e == "take mushroom" || e == "grab mushroom" || e == "collect mushroom") {
        responses.push({
          text: "You collect the massive black mushroom that obscures your view.",
          type: "dream4"
        })
        responses.push({
          text: "Instead of black, you see nothing.",
          type: "dream4"
        })
        this.setState({chapter: "dream 4b"})
      }
      else if (e.startsWith("examine")) {
        responses.push({
          text: "YOU CANNOT EXAMINE THAT.",
          type: "dream4"
        })
      }
      else if (e == "wake up") {
        if (this.state.chapter == "dream 4") {
          responses.push({
            text: "You try to wake up. You are nearly awake, while the body feebly resists.",
            type: "dream4"
          })
          this.setState({chapter: "dream 4a"})
        }
        else if (this.state.chapter == "dream 4a") {
          responses.push({
            text: "You lie upon a solitary cot in the middle of the room illuminated by the bulb. You are immobile, weak. Beside the cot, a metal platter is splayed just out of reach.",
            type: "life"
          })
          responses.push({
            text: "It is incredibly difficult to breathe. You try to cough, but your throat is blocked.",
            type: "life"
          })
          this.setState({chapter: "bad end"})
        }
        else if (this.state.chapter == "dream 4b") {
          responses.push({
            text: "You lie upon a solitary cot in the middle of the cell. A useless bulb hangs in the middle of the dark room. You are immobile, weak. Beside the cot, a metal platter is splayed just out of reach.",
            type: "life"
          })
          responses.push({
            text: "You feel serene. A blanket covers the lower half of your body.",
            type: "life"
          })
          this.setState({chapter: "4"})
        }
      }
      else {
        responses.push({
          text: "NO.",
          type: "dream4"
        })
      }
    }

    if (this.state.chapter.startsWith("4")) {
      if (e == "examine platter") {
        responses.push({
          text: "The platter can barely be made out under the sea of white fur many inches thick.",
          type: "life"
        })
        responses.push({
          text: "Red, green, and black mushroom caps dot the platter and the ground around it in mesmerizing patterns.",
          type: "life"
        })
      }
      if (e == "examine cot") {
        responses.push({
          text: "The cot is white and downy. It has been so long since it was this beautiful.",
          type: "life"
        })
      }
      if (e == "examine mushrooms") {
        responses.push({
          text: "They are opaque and colored like deep jewels. They pulse in the damp darkness.",
          type: "life"
        })
      }
      if (e == "examine cell" || e == "examine walls" || e == "examine wall") {
        responses.push({
          text: "The walls are fuzzy. Multicolored fungus tile the surfaces in intricate designs.",
          type: "life"
        })
      }
      if (e == "examine window") {
        responses.push({
          text: "Very little light filters through the window that is frosted with mold.",
          type: "life"
        })
      }
      if (e == "examine bulb" || e == "examine light") {
        responses.push({
          text: "The Edison bulb emits an unsteady hum, spending about as much time on as off. Your vision is quite impeded by its variability.",
          type: "life"
        })
      }
      if (e == "examine self" || e == "examine figure" || e == "examine blanket") {
        responses.push({
          text: "The blanket is white and soft. Dozens of fruiting mushroom bodies sprout from long stalks. They are fragrant and lovely.",
          type: "life"
        })
        responses.push({
          text: "Your garden is beautiful. You cannot help but cry.",
          type: "life"
        })
      }
      if (e == "dream") {
        responses.push({
          text: "You lie upon a solitary cot in the middle of the room illuminated by the bulb. Your face is streaked with tears speckled with black spores. You can feel the fungus eagerly taking advantage of every dark and damp corner of the room. A wide smile graces your face.",
          type: "dream5"
        })
        responses.push({
          text: "There is pressure in your head, behind your eyes. You can feel the mycelium webbing throughout your tear ducts. The pressure spreads through the sinus and throughout the rest of the head. Your eyelids are pried open, but your eyes are unfocused, lost in a phantasmagoric dream. Two golden mushroom caps emerge from the inner corners of the dreaming eyes, pushing the soft eyeballs to the side. Fungal roots mindlessly puncturing your pupils to reach the rich fluids within. The mushrooms are splendid, rising inches above your fertile skull, golden like jewellery resplendent.",
          type: "dream5"
        })
        responses.push({
          text: "The garden is complete.",
          type: "dream5"
        })
        responses.push({
          text: "GOOD END",
          type: "life"
        })
        this.setState({chapter: "good end"})
      }
    }

    if (this.state.chapter == "bad end") {
      if (e == "examine throat" || e == "examine mouth" || e == "examine body" || e == "examine figure" || e == "examine self") {
        responses.push({
          text: "You look down towards your mouth and find your jaw forced open. A massive red mushroom cap has grotesquely erupted out your maw. You feel its pressure against your dry tongue. Its wide stalk pulses as its fungal roots puncture the veins inside your throat, feeding off of rich blood. You feel its mycelium gripping your lungs. You are lightheaded as the fungus robs your oxygen. It is not long before the black overtakes your vision.",
          type: "life"
        })
        responses.push({
          text: "You were so close to finishing your garden.",
          type: "life"
        })
        responses.push({
          text: "BAD END",
          type: "life"
        })
      }
    }

    if (responses.length == 0) {
      this.flashError()
      if (e == "examine") {
        responses.push({
          text: "Specify what to examine.",
          type: "life"
        })
      }
      else if (e.startsWith("examine")) {
        responses.push({
          text: "You can't examine that.",
          type: "life"
        })
      }
      else {
        responses.push({
          text: "I don't understand this input. Try examining anything you can see.",
          type: "life"
        })
      }

    }

    return responses
  }


  render() {
    const inputProps = {
      value: this.state.textFieldValue
    };
    if (this.state.feedItems.length == 0) {
      console.log("gotta set")
      this.setState({
        feedItems: this.handleTextResponse('intro')
      })
    }

    var containerClass = "container"
    var enterClass = "enterfield"
    if (this.state.chapter.startsWith("dream")) {
      containerClass = "container dream"
      enterClass = "enterfield dream"
    }

    return (
      <div className={containerClass}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <div className="scrollerfield">
              <TextFeed
                feedItems={this.state.feedItems}
              />
              <div style={{ float:"left", clear: "both" }}
                 ref={(el) => { this.messagesEnd = el; }}>
              </div>
            </div>
            <div className={enterClass}>
              <TextField
                onKeyPress={(ev) => {
                  console.log(`Pressed keyCode ${ev.key}`);
                  if (ev.key === 'Enter') {
                    // Do code here
                    this.handleTextInput(this.state.textFieldValue);
                    ev.preventDefault();
                  }
                }}
                id="text_enter"
                placeholder="What to do..."
                onChange={this._handleTextFieldChange.bind(this)}
                inputProps={inputProps}
                fullWidth
                margin="normal"
              />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
