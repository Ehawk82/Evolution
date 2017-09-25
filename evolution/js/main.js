// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509

(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var isFirstActivation = true;

    var ViewManagement = Windows.UI.ViewManagement;
    var ApplicationViewWindowingMode = ViewManagement.ApplicationViewWindowingMode;
    var ApplicationView = ViewManagement.ApplicationView;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.voiceCommand) {
            // TODO: Handle relevant ActivationKinds. For example, if your app can be started by voice commands,
            // this is a good place to decide whether to populate an input field or choose a different initial view.
        }
        else if (args.detail.kind === activation.ActivationKind.launch) {
            // A Launch activation happens when the user launches your app via the tile
            // or invokes a toast notification by clicking or tapping on the body.
            if (args.detail.arguments) {
                // TODO: If the app supports toasts, use this value from the toast payload to determine where in the app
                // to take the user in response to them invoking a toast notification.
            }
            else if (args.detail.previousExecutionState === activation.ApplicationExecutionState.terminated) {
                // TODO: This application had been suspended and was then terminated to reclaim memory.
                // To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
                // Note: You may want to record the time when the app was last suspended and only restore state if they've returned after a short period.
            }
        }

        if (!args.detail.prelaunchActivated) {
            // TODO: If prelaunchActivated were true, it would mean the app was prelaunched in the background as an optimization.
            // In that case it would be suspended shortly thereafter.
            // Any long-running operations (like expensive network or disk I/O) or changes to user state which occur at launch
            // should be done here (to avoid doing them in the prelaunch case).
            // Alternatively, this work can be done in a resume or visibilitychanged handler.
        }

        if (isFirstActivation) {
            // TODO: The app was activated and had not been running. Do general startup initialization here.
            document.addEventListener("visibilitychange", onVisibilityChanged);
            args.setPromise(WinJS.UI.processAll());
            ApplicationView.preferredLaunchWindowingMode = ApplicationViewWindowingMode.fullScreen;
        }

        isFirstActivation = false;
    };

    function onVisibilityChanged(args) {
        if (!document.hidden) {
            // TODO: The app just became visible. This may be a good time to refresh the view.
        }
    }

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
        // You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
        // If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
    };
    var UI, uTime, skyeLvl, skyeChat, uData, myBlocks, title, ls, cBool;

    cBool = 0;
    ls = 1;

    myBlocks = {
        bNum: 0,
        DNA: "GAT",
        top: 0,
        left: 0,
        bg: "grey"
    }

    uData = {
        lvl: 0
    };

    uTime = "4000330000";

    skyeLvl = 1;
    skyeChat = {
        0: "",
        1: "First things first, we have to get set up...",
        2: "Select a location to place your carbon",
        3: "Well Done! You are on your way to making organic compounds!",
        4: "For now, you are just a small peice of carbon floating in a vast primordial soup! <br /> New tool unlocked! <strong>Sol Button</strong>",
        5: "Pushing the <strong>Sol button</strong> will cycle the time. Try it!",
        6: "Once your carbon has collected enough debris, plot a new carbon point.<br />New tool unlocked: <strong>Change Plot</strong>",
        7: "Keep collecting and making clusters, you might just make life!"
    };

    title = {
        0: "Pre Abiogenesis Phase",
        1: "Abiogenesis Phase I",
        2: "Abiogenesis Phase II",
        3: "Abiogenesis Phase III",
        4: "Abiogenesis Phase IV",
        5: "Abiogenesis Phase V",
        6: "Pre Metobolic Phase",
        7: "Metobolic Phase I",
        8: "Metobolic Phase II",
        9: "Metobolic Phase III",
        10: "Metobolic Phase IV",
        11: "Metobolic Phase V",
        12: "Pre-Life Phase",
        13: "Life Phase I",
        14: "Life Phase  II",
        15: "Life Phase  III",
        16: "Life Phase  IV",
        17: "Life Phase  V",
        18: "Pre Complex Life Phase",
        19: "Complex Life Phase"

    };
    UI = {
        //return functions
        bySel: (x) => { return document.querySelector(x) },
        bySelAll: (x) => { return document.querySelectorAll(x) },
        createEle: (x) => { return document.createElement(x) },
        syncChatBox: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb) => {


            var sk = localStorage.getItem("skyeLvl");
            var uD = localStorage.getItem("uData");

            if (uD) {
                var uuu = JSON.parse(uD);
            }

            return setTimeout(() => {
                if (!chatBtn) {
                    var chatBtn = UI.createEle("div");
                    chatBtn.className = "chatBtn";

                    gameFrame.appendChild(chatBtn);
                }

                chatBox.innerHTML = skyeChat[sk];

                //console.log(uuu.lvl);
                if (+sk === 1) {
                    //console.log(sk + "n");
                    chatBtn.innerHTML = "Start";
                    chatBtn.onclick = UI.tutor1(gameFrame, chatBox, chatBtn, gameArena);
                    setTimeout(() => {
                        chatBtn.className = "chatBtn_full";
                    }, 10);
                }
                if (+sk === 2) {
                    //console.log(sk + "n");
                    chatBtn.innerHTML = "Continue";
                    if (uuu.lvl === 1) {
                        chatBtn.className = "chatBtn";
                        chatBtn.onclick = UI.tutor2(gameFrame, chatBox, chatBtn);
                        setTimeout(() => {

                            chatBtn.className = "chatBtn";
                        }, 10);
                    } else {
                        setTimeout(() => {
                            chatBtn.className = "chatBtn_sleep";
                            document.body.style.cursor = 'crosshair';
                            gameArena.onclick = UI.addCell(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                        }, 10);

                    }
                }
                if (+sk === 3) {
                    chatBtn.innerHTML = "Continue";
                    setTimeout(() => {
                        chatBtn.className = "chatBtn_full";


                        chatBtn.onclick = UI.tutor3(gameFrame, chatBox, chatBtn, gameArena, cells, mmb);
                    }, 10);
                }
                if (+sk === 4) {
                    chatBtn.innerHTML = "Continue";
                    setTimeout(() => {
                        chatBtn.className = "chatBtn_full";
                        chatBtn.onclick = UI.tutor4(gameFrame, chatBox, chatBtn, gameArena, cells, mmb);
                    }, 10);
                }
                if (+sk >= 4) {

                    setTimeout(() => {
                        var turnBtn = UI.bySel(".turnBtn") || UI.bySel(".turnBtn_lit");

                        turnBtn.className = "turnBtn_lit";

                        turnBtn.disabled = false;

                        setTimeout(() => {
                           
                            turnBtn.className = "turnBtn";
                            turnBtn.onclick = UI.cycle(turnBtn, clock);
                        }, 1010);
                        //console.log(turnBtn);
                    }, 60);
                }
                if (+sk === 5) {
                    chatBtn.innerHTML = "Continue";
                    if (uuu.lvl === 1) {
                        chatBtn.className = "chatBtn";
                        chatBtn.onclick = UI.tutor2(gameFrame, chatBox, chatBtn);
                        setTimeout(() => {
                            chatBtn.className = "chatBtn";
                        }, 10);
                    } else {
                        setTimeout(() => {
                            chatBtn.className = "chatBtn_full";
  
                            chatBtn.onclick = UI.tutor5(gameFrame, chatBox, chatBtn, gameArena, cells, mmb);
                            //gameArena.onclick = UI.changeHomeCell(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                        }, 10);
                    }
                }
                if (+sk >= 6) {

                    setTimeout(() => {
                        //var changeHomeCellBtn = UI.bySel(".changeHomeCellBtn");
                        var x = gameFrame.childNodes;
                        for (var j = 0; j < x.length; j++) {
                            if (x[j].className === "changeHomeCellBtn") {

                                return x[j].className = "changeHomeCellBtn_full";
                                      

                            } 
                            
                        }
                    }, 60);
                }
            }, 710);
        },
        changeHomeCell: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb, changeHomeCellBtn) => {

            var sk = localStorage.getItem("skyeLvl"),
                mB = localStorage.getItem("myBlocks_1"),
                oldCell = UI.bySel(".cell");
            //console.log(gameArena);
            if (mB) {
                var mmm = JSON.parse(mB);
            }
            return () => {
                var cell = UI.createEle("div"),
                    posX = event.clientX,
                    posY = event.clientY;

                var skk = localStorage.getItem("skyeLvl");
                //console.log(skk);
                if (+skk >= 6) {
                    if (oldCell) {
                        oldCell.remove();
                    }
                    document.body.style.cursor = "initial";
                    cell.className = "cell";
                    cell.innerHTML = "&nbsp;";
                    cell.style.left = posX + "px";
                    cell.style.top = posY + "px";
                    cell.style.backgroundColor = "grey";
                    gameArena.appendChild(cell);
                    

                    mmm.bNum = 1;
                    mmm.left = posX;
                    mmm.top = posY;
                    mmm.bg = "grey";

                    localStorage.setItem("skyeLvl", 7);
                    localStorage.setItem("myBlocks_1", JSON.stringify(mmm));
                    chatBox.innerHTML = "";
                    chatBox.className = "chatBox";

                    setTimeout(() => {
                        chatBox.className = "chatBox_full";
                        
                        UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                    }, 600);
                        document.body.style.cursor = "initial";
                        if (!changeHomeCellBtn) {
                            var changeHomeCellBtn = UI.bySel(".changeHomeCellBtn") || UI.bySel(".changeHomeCellBtn_full");
                            changeHomeCellBtn.className = "changeHomeCellBtn_full";
                            gameArena.onclick = null;
                        } else {
                            changeHomeCellBtn.className = "changeHomeCellBtn_full";
                            gameArena.onclick = null;
                        }
                }
            }
    
        },
        //intitializing and localStorage sync
        init: () => {
            var uT = localStorage.getItem("uTime");
            if (!uT || uT === null) {
                localStorage.setItem("uTime", uTime);
            }
            var sk = localStorage.getItem("skyeLvl");
            if (!sk || sk === null) {
                localStorage.setItem("skyeLvl", skyeLvl);
            }
            var uD = localStorage.getItem("uData");
            if (!uD || uD === null) {
                localStorage.setItem("uData", JSON.stringify(uData));
            }
            var mB = localStorage.getItem("myBlocks_1");
            if (!mB || mB === null) {
                localStorage.setItem("myBlocks_1", JSON.stringify(myBlocks));
            }
            var ls = localStorage.getItem("ls");
            if (!ls || ls === null) {
                localStorage.setItem("ls", 1);
            }
            var cBool = localStorage.getItem("cBool");
            if (!cBool) {
                localStorage.setItem("cBool", 0);
            }
            //console.log(ls);
            //console.log(localStorage);
            UI.myLoad();
        },
        //loading and UI stuffs
        addCell: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, e, cells, mmb) => {
            var sk = localStorage.getItem("skyeLvl"),
                mB = localStorage.getItem("myBlocks_1");

            if (mB) {
                var mmm = JSON.parse(mB);
            }
            return () => {
                var cell = UI.createEle("div"),
                    posX = event.clientX,
                    posY = event.clientY;

                var skk = localStorage.getItem("skyeLvl");

                if (+skk === 2) {

                    cell.className = "cell";
                    cell.innerHTML = "&nbsp;";
                    cell.style.left = posX + "px";
                    cell.style.top = posY + "px";
                    cell.style.backgroundColor = "grey";
                    gameArena.appendChild(cell);

                    mmm.bNum = 1;
                    mmm.left = posX;
                    mmm.top = posY;
                    mmm.bg = "grey";

                    localStorage.setItem("skyeLvl", 3);
                    localStorage.setItem("myBlocks_1", JSON.stringify(mmm));
                    chatBox.innerHTML = "";
                    chatBox.className = "chatBox";

                    setTimeout(() => {
                        chatBox.className = "chatBox_full";
                        document.body.style.cursor = 'initial';
                        UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                    }, 600);
                    setTimeout(() => {
                        //console.log(mmm.left = posX;);
                    }, 1000);
                }
            }
        },
        myLoad: () => {
            var startBtn = UI.createEle("button"),
                settBtn = UI.createEle("button");

            var uT = localStorage.getItem("uTime");

            if (+uT === 4000330000) {
                startBtn.innerHTML = "Start";
            } else {
                startBtn.innerHTML = "Continue";
            }

            startBtn.onclick = UI.loadGame(startBtn, settBtn);
            startBtn.className = "startBtn";

            settBtn.innerHTML = "Settings";
            settBtn.onclick = UI.settPage(startBtn, settBtn);
            settBtn.className = "settBtn";

            dvContain.appendChild(startBtn);
            dvContain.appendChild(settBtn);

            setTimeout(() => {
                startBtn.className = "startBtn_full";
                settBtn.className = "settBtn_full";
            }, 600);
        },
        settPage: (startBtn, settBtn) => {
            return () => {
                startBtn.className = "startBtn_pull";
                settBtn.className = "settBtn_pull";
                setTimeout(() => {
                    startBtn.remove();
                    settBtn.remove();
                    UI.rollSettings();
                }, 600);
            }
        },
        rollSettings: () => {
            var clearBtn = UI.createEle("button"),
                backBtn = UI.createEle("button");

            clearBtn.innerHTML = "Clear Local Storage";
            clearBtn.onclick = UI.clearAll(clearBtn, backBtn);
            clearBtn.className = "clearBtn";

            backBtn.innerHTML = "Back";
            backBtn.onclick = UI.backFunc(clearBtn, backBtn);
            backBtn.className = "backBtn";

            dvContain.appendChild(clearBtn);
            dvContain.appendChild(backBtn);
            //console.log(dvContain);

            setTimeout(() => {
                clearBtn.className = "clearBtn_full";
                backBtn.className = "backBtn_full";
            }, 600);
        },
        loadGame: (startBtn, settBtn) => {
            return () => {
                startBtn.className = "startBtn_pull";
                settBtn.className = "settBtn_pull";
                setTimeout(() => {
                    startBtn.remove();
                    settBtn.remove();
                    UI.rollGame();
                }, 600);
            }
        },
        rollGame: () => {
            var gameFrame = UI.createEle("div");

            gameFrame.innerHTML = "&nbsp;";
            gameFrame.className = "gameFrame";

            dvContain.appendChild(gameFrame);

            setTimeout(() => {
                gameFrame.className = "gameFrame_full";
                UI.beginGameState(gameFrame);
            }, 600);
        },
        beginGameState: (gameFrame) => {
            var uD = localStorage.getItem("uData");

            if (uD) {
                var uuu = JSON.parse(uD);
            }

            var turnBtn = UI.createEle("button"),
                header = UI.createEle("h1"),
                slot = UI.createEle("div"),
                clock = UI.createEle("input"),
                menu = UI.createEle("div"),
                skye = UI.createEle("div"),
                chatBox = UI.createEle('div'),
                gameArena = UI.createEle("div"),
                changeHomeCellBtn = UI.createEle("div"),
                chatBtn = UI.createEle("div");

            chatBtn.className = "chatBtn";
            chatBtn.innerHTML = "&nbsp;";

            var uT = localStorage.getItem("uTime"),
                sk = localStorage.getItem("skyeLvl");

            changeHomeCellBtn.innerHTML = "💠";
            changeHomeCellBtn.className = "changeHomeCellBtn";
            changeHomeCellBtn.onclick = UI.homeCellCreate(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb, changeHomeCellBtn);


            //console.log(localStorage);
            gameArena.className = "gameArena";
            var mB = localStorage.getItem("myBlocks_1");
            var ls = localStorage.getItem("ls");

            var b = JSON.parse(mB);
            //console.log(b.bNum);
            if (b.bNum === 0) { } else {
                for (var k = 0; k < +ls; k++) {
                    var mBs = localStorage.getItem("myBlocks_" + (+k + +1));

                    if (mBs != null) {
                        if (mBs) {
                            var mmb = JSON.parse(mBs);

                            var cells = UI.createEle("div");


                            cells.className = "cells";
                            cells.innerHTML = "&nbsp;";
                            cells.style.left = mmb.left + "px";
                            cells.style.top = mmb.top + "px";
                            cells.style.backgroundColor = mmb.bg;
                            //cells[0].className = "cell";
                        }
                        gameArena.appendChild(cells);
  
                    }
                }
                
            }
            

            turnBtn.innerHTML = "🌞";
            turnBtn.className = "turnBtn";

            if (+sk < 4) {
                turnBtn.disabled = true;
            } else {
                turnBtn.onclick = UI.cycle(turnBtn, clock);
            }

            header.innerHTML = title[uuu.lvl];
            header.className = "header";

            slot.innerHTML = "&nbsp;";
            slot.className = "slot";

            clock.value = uT + " BCE";
            clock.className = "clock";
            clock.readOnly = true;

            menu.innerHTML = "Menu";
            menu.onclick = UI.userMenu(menu, gameFrame);
            menu.className = "menuTab";

            skye.className = "skye";
            skye.innerHTML = "&nbsp;";

            //chatBox.value = skyeChat[sk];
            UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
            chatBox.className = "chatBox";

            gameFrame.appendChild(gameArena);
            gameFrame.appendChild(changeHomeCellBtn);
            gameFrame.appendChild(turnBtn);
            gameFrame.appendChild(header);
            gameFrame.appendChild(slot);
            gameFrame.appendChild(clock);
            gameFrame.appendChild(menu);
            gameFrame.appendChild(skye);
            gameFrame.appendChild(chatBox);
            gameFrame.appendChild(chatBtn);

            setTimeout(() => {
                chatBox.className = "chatBox_full";
                if (+sk >= 6) {
                    changeHomeCellBtn.className = "changeHomeCellBtn_full";
                    var bb = UI.bySelAll(".cells");

                        bb[0].className = "cell";
                    
                }

            }, 400);
        },
        homeCellCreate: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb, changeHomeCellBtn) => {
            return () => {
                var cBool = localStorage.getItem("cBool");
                document.body.style.cursor = "crosshair";
                changeHomeCellBtn.className = "changeHomeCellBtn";
                gameArena.onclick = UI.changeHomeCell(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                //console.log(changeHomeCellBtn);
                
            }
        },
        tutor5: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb) => {
            return () => {
                var sk = localStorage.getItem("skyeLvl");

                chatBox.className = "chatBox";
                chatBox.innerHTML = "";

                chatBtn.className = "chatBtn";
                chatBtn.value = "";

                setTimeout(() => {
                    var ssk = +6;

                    localStorage.setItem("skyeLvl", ssk);

                    setTimeout(() => {
                        chatBox.className = "chatBox_full";

                        UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);

                    }, 600);
                }, 100);
            }
        },
        tutor4: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb) => {
            return () => {
                var sk = localStorage.getItem("skyeLvl");

                chatBox.className = "chatBox";
                chatBox.innerHTML = "";

                chatBtn.className = "chatBtn";
                chatBtn.value = "";

                setTimeout(() => {
                    var ssk = +5;

                    localStorage.setItem("skyeLvl", ssk);

                    setTimeout(() => {
           

                        chatBox.className = "chatBox_full";

                        UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                        //console.log(chatBox);
                    }, 600);
                }, 100);
            }
        },
        tutor3: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb) => {
            return () => {
                var sk = localStorage.getItem("skyeLvl");

                chatBox.className = "chatBox";
                chatBox.innerHTML = "";

                chatBtn.className = "chatBtn";
                chatBtn.value = "";

                setTimeout(() => {
                    var ssk = +4;

                    localStorage.setItem("skyeLvl", ssk);

                    setTimeout(() => {
          
                        chatBox.className = "chatBox_full";

                        UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                        //console.log(chatBox);
                    }, 600);
                }, 100);
            }
        },
        tutor2: (gameFrame, chatBox, chatBtn) => {
            return () => {
                var uD = localStorage.getItem("uData");

                if (uD) {
                    var uuu = JSON.parse(uD);
                }
                console.log(uuu.lvl);
            }
        },
        tutor1: (gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb) => {
            return () => {
                var sk = localStorage.getItem("skyeLvl");

                chatBox.className = "chatBox";
                chatBox.innerHTML = "";

                chatBtn.className = "chatBtn";
                chatBtn.value = "";

                setTimeout(() => {
                    var ssk = +2;

                    localStorage.setItem("skyeLvl", ssk);

                    setTimeout(() => {

                        chatBox.className = "chatBox_full";

                        UI.syncChatBox(gameFrame, chatBox, chatBtn, gameArena, turnBtn, clock, cells, mmb);
                        //console.log(chatBox);
                    }, 600);
                }, 100);
            }
        },

        backMenuClick: (menu, backMenuBtn, gameFrame) => {
            return () => {

                menu.innerHTML = "Menu";
                menu.onclick = UI.userMenu(menu, gameFrame);
                menu.className = "menuTab";

                backMenuBtn.remove();

            }
        },
        userMenu: (menu, gameFrame) => {
            return () => {
                menu.className = "menuTab_full";
                menu.onclick = null;
                menu.innerHTML = "&nbsp;";

                setTimeout(() => {
                    var backMenuBtn = UI.createEle("span"),
                        homeBtn = UI.createEle("button");

                    backMenuBtn.innerHTML = "x";
                    backMenuBtn.className = "backMenuBtn";
                    backMenuBtn.onclick = UI.backMenuClick(menu, backMenuBtn, gameFrame);

                    homeBtn.innerHTML = "Home";
                    homeBtn.onclick = UI.homeMenuFunc;
                    homeBtn.className = "homeBtn";

                    //console.log(menu);
                    gameFrame.appendChild(backMenuBtn);
                    menu.appendChild(homeBtn);
                    //console.log(menu);

                }, 600);
            }
        },
        homeMenuFunc: () => {
            dvContain.innerHTML = "";
            UI.myLoad();
        },
        cycle: (turnBtn, clock) => {
            return () => {
                turnBtn.innerHTML = "⌛";

                var uT = localStorage.getItem("uTime"),
                    uD = localStorage.getItem("uData");

                if (uD) {
                    var udd = JSON.parse(uD);
                }

                var uuu = +uT - +1;

                localStorage.setItem("uTime", uuu);
                if (!clock) {
                    var clock = UI.bySel(".clock");
                    clock.value = uuu + " BCE";
                } else {
                    clock.value = uuu + " BCE";
                }
                if (udd.lvl <= 9) {

                    UI.cellFlush();

                }

                setTimeout(() => {
                    turnBtn.innerHTML = "🌞";
                }, 500);
            };
        },
        cellFlush: () => {
            var matter = UI.createEle("div"),
                rand = Math.floor((Math.random() * window.screen.availHeight)),
                rColor = Math.floor((Math.random() * 5) + 1), tColor;

            var mB = localStorage.getItem("myBlocks_1");
            var ls = localStorage.getItem("ls");

            if (mB) {
                var mmm = JSON.parse(mB);
            }
            if (rColor === 5) {
                matter.style.backgroundColor = "red";
            }
            if (rColor === 4) {
                matter.style.backgroundColor = "grey";
            }
            if (rColor === 3) {
                matter.style.backgroundColor = "blue";
            }
            if (rColor === 2) {
                matter.style.backgroundColor = "white";
            }
            if (rColor === 1) {
                matter.style.backgroundColor = "limegreen";
            }
            matter.className = "matter";
            matter.style.top = "" + rand + "px";
            matter.style.left = "101%";

            matter.innerHTML = "&nbsp;";

            var mUpper = +mmm.top + +10;
            var mLower = +mmm.top - +10;

            if (!gameArena) {
                var gameArena = UI.bySel(".gameArena");
            }

            gameArena.style.boxShadow = "0px 172px 70px gold inset";
            gameArena.appendChild(matter);

            setTimeout(() => {
                gameArena.style.boxShadow = "0 0 20px transparent inset";

                if (rand <= mUpper && rand >= mLower) {
                    //console.log(ls)
                    var nls = localStorage.getItem("ls");
                    var x = Math.floor((Math.random() * (+15 + +nls))),
                        rSpot = +mmm.left - +x;
                    matter.style.left = rSpot + "px";
                    matter.style.transition = "all 400ms";
                    UI.newCellBlock(matter, mmm);
                    //console.log(nls);
                } else {
                    matter.style.left = "-10%";
                    if (matter.style.left === "-10%") {
                        setTimeout(() => {
                            matter.remove();
                        }, 1000);

                    }
                }
            }, 300);
        },
        newCellBlock: (matter, mmm) => {
            var ls = localStorage.getItem("ls"),
                mB = localStorage.getItem("myBlocks_" + ls);
            var mst = matter.style.top,
                msl = matter.style.left;
            var cell = UI.bySelAll(".cell");

            
            
            if (cell) {
                console.log(cell);
                for (var g = 0; g < cell.length; g++) {
                    cell[g].remove();
                    //console.log(cell[g]);
                }
                //cell.className = "cells";
            }
            var x = mst.length, y = msl.length, ms, ml;
            if (+x === +6) {
                ms = mst.slice(0, 4);
            }
            if (+x === +5) {
                ms = mst.slice(0, 3);
            }
            if (+x === +4) {
                ms = mst.slice(0, 2);
            }
            if (+x === +3) {
                ms = mst.slice(0, 1);
            }
            if (+y === +6) {
                ml = msl.slice(0, 4);
            }
            if (+y === +5) {
                ml = msl.slice(0, 3);
            }
            if (+y === +4) {
                ml = msl.slice(0, 2);
            }
            if (+y === +3) {
                ml = msl.slice(0, 1);
            }
            var nLs = +ls + +1;

            myBlocks.bNum = nLs;
            myBlocks.DNA = "GAT";
            myBlocks.top = +ms;
            myBlocks.left = +ml;
            myBlocks.bg = matter.style.backgroundColor;

            localStorage.setItem("ls", +nLs);

            localStorage.setItem("myBlocks_" + nLs, JSON.stringify(myBlocks));

            //var dsdg = localStorage.getItem("myBlocks_" + nLs);
            //console.log(dsdg);

        },
        //settings and misc funcs
        backFunc: (clearBtn, backBtn) => {
            return () => {
                clearBtn.className = "clearBtn_pull";
                backBtn.className = "backBtn_pull";
                setTimeout(() => {
                    clearBtn.remove();
                    backBtn.remove();
                    UI.myLoad();
                }, 1000);
            }
        },
        clearAll: (clearBtn, backBtn) => {
            return () => {
                clearBtn.className = "clearBtn_pull";
                backBtn.className = "backBtn_pull";
                setTimeout(() => {
                    localStorage.clear();
                    location.reload();
                }, 1000);
            }
        }
    };

    window.onload = () => {
        UI.init();
    };

    app.start();

})();
