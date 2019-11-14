
/**
so for this each storline has a text, choice1, and choice2. Only once it reaches the end of a storyline does it have "end": true.
Please take note of where there are commas and where there are not. commas only appear if there are still more items left in an object
also keep note of where brackets are

if this is too confusing then keep it as it is and demo using my test scrip
you can ignore the script.json file. just make sure that that stays the same in case you mess up the script and you can just copy and paste it back in

last note my html is different from yours and i renamed some stuff so make sure it all works. CSS is just filler right now just to test it works
**/

//work in css and html and then connect it to the js CHECK TYPOGRAPHY
//TWINE CAN CODE DIS

const script = 
//from script.json
[{
    "text" : ["Wake up", "Get up", "Hit snooze"],
    "action": "morning",
    "choice1" : {
        "text" : ["You got out of bed", "Brush and shower", "Go directly to school"],
        "action": "neutral",
        "choice1" : {
            "text" : ["You are now running late to school", "Run", "Uber"],
            "action": "neutral",
            "choice1" : {
                "text": ["You bump into your crush", "Walk together", "Continue walking alone"],
                "action": "neutral",
                "choice1" : {
                    "text": ["You continue walking with her", "You ask her about the weather today", "Tell her she's pretty" ],
                    "action": "crush-good",
                    "choice1" : {
                        "text": ["She said it's nice. Sad you didnt ask her for her number. You slip on a banana peel on the ground and DIE"],
                        "action": "ending-bad",
                        "end": true
                    },
                    "choice2" : {
                        "text" : ["She smiles and hands you her number as you arrive in class", "Sit with crush", "Sit with friends instead"],
                        "action": "crush-good",
                        "choice1" : {
                            "text": ["You flirt with her as she flirts back", "Keep your distance", "Reach out and hold her hand"],
                            "action": "crush-good",
                            "choice1" : {
                                "text": ["She asks if you want to study together in library after", "Yes", "No"],
                                "action": "crush-good",
                                "choice1" : {
                                    "text": ["She smiles and says she can't wait to see you later"],
                                    "action": "end-good",
                                    "end": true
                                    
                                },
                                "choice2" : {
                                    "text" : ["She is sad and leaves you... forever alone"],
                                    "action": "ending-bad",
                                    "end": true
                                }
                            },
                            "choice2" : {
                                "text" : ["She is offended and reports you. You get kicked out of school for sexual harassment"],
                                "action": "ending-bad",
                                "end": true
                            }
                            
                        },
                        "choice2" : {
                            "text" : ["They tell you about a party going on.", "Go to party alone", "Ask crush to go with you"],
                            "action": "neutral",
                            "choice1" : {
                                "text": ["On your way to the party you are struck by lightning and DIE ⚡️"],
                                "action": "lightning",
                                "end": true
                                
                            },
                            "choice2" : {
                                "text" : ["Your crush agrees to go with you", "Walk and pick her up", "Uber and pick her up"],
                                "action": "crush-good",
                                "choice1" : {
                                    "text": ["On your way, it begins to storm and you are both struck by lightning and DIE ⚡️"],
                                    "action": "lightning",
                                    "end": true
                                    
                                },
                                "choice2" : {
                                    "text" : ["You arrive at the party and are having a great time", "You take your crush outside", "You take her to the bathroom"],
                                    "action": "crush-good",
                                    "choice1" : {
                                        "text": ["You have a deep talk outside and kiss! ❤️"],
                                        "action": "end-good",
                                        "end": true
                                        
                                    },
                                    "choice2" : {
                                        "text" : ["She thinks you are trying something funny and slaps you. You slip on the wet floor and DIE ☠️"],
                                        "action": "ending-bad",
                                        "end": true
                                    }
                                }
                            }
                        }
                    }
                    
                },
                "choice2" : {
                    "text" : ["In your haste you slip on a banana peel and DIE! 🍌"],
                    "action": "ending-bad",
                    "end": true
                }
            },
            "choice2" : {
                "text" : ["You pass your crush and get to class", "Sit with crush", "Sit with friends"],
                "action": "neutral",
                "choice1" : {
                    "text": ["She says she saw you Uber to class and thinks you are a lazy bum 😮"],
                    "action": "ending-bad",
                    "end": true
                    
                },
                "choice2" : {
                    "text" : ["Your friends tell you about a party", "Go to party after class", "Go study after class"],
                    "action": "neutral",
                    "choice1" : {
                        "text": ["On your way to the party you get struck by lightning! ⚡️"],
                        "action": "lightning",
                        "end": true
                        
                    },
                    "choice2" : {
                        "text" : ["You are deciding where to study", "Cafe", "Library"],
                        "action": "neutral",
                        "choice1" : {
                            "text": ["You order a latte and it's poisoned! ☠️"],
                            "action": "poison",
                            "end": true
                            
                        },
                        "choice2" : {
                            "text" : ["You see your crush at the library", "Study alone", "Sit with her"],
                            "action": "neutral",
                            "choice1" : {
                                "text": ["You finish studying and go home. Your life is boring"],
                                "action": "ending-bad",
                                "end": true
                                
                            },
                            "choice2" : {
                                "text" : ["She enjoys your company and asks to study again sometime!  👍"],
                                "action": "end-good",
                                "end": true
                            }
                        }
                    }
                }
            }
        },
        "choice2" : {
            "text" : ["It's a nice day outside", "Walk to school", "Take an Uber"],
            "action": "sunny",
            "choice1" : {
                "text": ["You bump into your crush", "You go towards her", "You walk past her"],
                "action": "neutral",
                "choice1" : {
                    "text": ["Your crush walks past you because of your bad breath", "Continue as is", "Stop to eat a breath mint"],
                    "action": "crush-bad",
                    "choice1" : {
                        "text": ["You spend the rest of your day with bad breath and are forever alone...."],
                        "action": "ending-bad",
                        "end": true
                        
                    },
                    "choice2" : {
                        "text" : ["You choke on your breath mint and DIE"],
                        "action": "ending-bad",
                        "end": true
                    }
                    
                },
                "choice2" : {
                    "text" : ["In your haste you slip on a banana peel and hit your head and DIE"],
                    "action": "ending-bad",
                    "end": true
                }
            },
            "choice2" : {
                "text" : ["You pass your crush and get to class", "Sit with crush", "Sit with friends"],
                "action": "neutral",
                "choice1" : {
                    "text": ["She ignores you because of your bad breath. You leave class disheartened thinking you'll never get a gf", "Go home after class ends", "Go home now"],
                    "action": "crush-bad",
                    "choice1" : {
                        "text": ["You are preoccupied and BAM a car hits you"],
                        "action": "hit-death",
                        "end": true
                        
                    },
                    "choice2" : {
                        "text" : ["You are preoccupied and BAM a car hits you"],
                        "action": "hit-death",
                        "end": true
                    }
                    
                },
                "choice2" : {
                    "text" : ["Your friends tell you about a party", "Go to party after class", "Go study after class"],
                    "action": "neutral",
                    "choice1" : {
                        "text": ["On your way to the party you get struck by lightning! ⚡️"],
                        "action": "lightning",
                        "end": true
                        
                    },
                    "choice2" : {
                        "text" : ["You are deciding where to study", "Cafe", "Library"],
                        "action": "neutral",
                        "choice1" : {
                            "text": ["You order a latte and it's poisoned! ☠️"],
                            "action": "poison",
                            "end": true
                            
                        },
                        "choice2" : {
                            "text" : ["You see your crush at the library", "Study alone", "Sit with her"],
                            "action": "neutral",
                            "choice1" : {
                                "text": ["You finish studying and go home. Your life is boring"],
                                "action": "ending-bad",
                                "end": true
                                
                            },
                            "choice2" : {
                                "text" : ["She rejects you due to bad breath. A truck hits the library and you both DIE! 🚛"],
                                "action": "hit-death",
                                "end": true
                            }
                        }
                    }
                }
            }
        }
    },
    "choice2" : {
        "text" : ["You are now late", "Call in sick", "Go to work late"],
        "choice1" : {
            "text": ["You called in sick and your boss fired you", "Find a new job", "Move back home"],
            "choice1" : {
                "text": ["No one wants to hire you"],
                "end": true
            },
            "choice2" : {
                "text" : ["You fight with your parents everyday 🙃"],
                "end": true
            }
        },
        "choice2" : {
            "text" : ["You showed up late but no one notices", "Work extra hard today", "Do the same as usual"],
            "choice1" : {
                "text": ["You get promoted and make 💰"],
                "end": true
            },
            "choice2" : {
                "text" : ["You stay at the bottom"],
                "end": true
            }
        }
    }
}]


const myfunction = () => {

    script[0]

    // if a story line ending has not been reached, ended = false
    let started = false
    let ended = false
    let happy = false;

    const choice1 = document.getElementById("choice1")
    const choice2 = document.getElementById("choice2")
    choice1.style.visibility = 'hidden'
    choice2.style.visibility = 'hidden'

    let currentStory = script[0]
    
    const start = document.getElementById("start")

    // start the bot
    start.onclick = () => {
        if (started === false){
            start.innerText = script[0].text[0]
            choice1.style.visibility = 'visible'
            choice2.style.visibility = 'visible'
        

            choice1.innerText = currentStory.text[1]
            choice2.innerText = currentStory.text[2]
            started = true
            document.body.style.cssText = "background: linear-gradient(0deg,  #fff, #000); background-size:100% 400%; animation: morning 5s ease infinite";
        }
    }

    // click on each choice to advance the story
    choice1.onclick = () => {
        currentStory = currentStory.choice1
        buttonOption(currentStory)
            
    }

    choice2.onclick = () => {
        if (choice2.innerText === 'Hit snooze'){
            currentStory = currentStory
        }
        else {
            currentStory = currentStory.choice2
        }
        buttonOption(currentStory)

    }
}

const buttonOption = ( currentStory ) => {
    document.body.style.removeProperty('animation')
    document.body.style.removeProperty('background-color')
//    document.body.style.removeProperty('background')
    document.body.style.removeProperty('background-size')

    start.innerText = currentStory.text[0], choice1.innerText = currentStory.text[1], choice2.innerText = currentStory.text[2]

    let action = currentStory.action
    console.log(action)
    animation(action)

    if(currentStory.end === true){
        choice1.style.visibility = 'hidden'
        choice2.style.visibility = 'hidden'

        const ending = document.createElement('p')
        ending.innerText = "The End"
        start.appendChild(ending)

        ended = true
    }
}

const animation = ( action ) => {
    switch ( action ){
        case "ending-bad":
            document.body.style.cssText = `animation: end 1s`
            break;
        case "crush-good":
            document.body.style.cssText = "background-color:#eea5f6; animation: heartbeat 2s infinite";
            break;
        case "crush-bad":
            document.body.style.cssText = "background-color: gray; animation: heartbeat-bad 2s infinite";
            break;
        case "morning":
            document.body.style.cssText = "background: linear-gradient(0deg,  #fff, #000,); background-size:100% 400%; animation: morning 5s ease";
            break;
        case "hit-death":
            document.body.style.cssText = `animation: hitDeath 1s `
            break;
        case "lightning":
            document.body.style.cssText = `animation: lightning 1s `
            break;
        case "poison":
            document.body.style.cssText = `animation: poison 5s ease`
            break;
        case "end-good":
            document.body.style.cssText ='animation: heartbeat-end 2s infinite'
            break;
        case "neutral":
            document.body.style.cssText = 'background-color: white';
            break;
    }
}

myfunction();